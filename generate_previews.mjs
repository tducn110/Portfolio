import { chromium } from 'playwright';
import { Vibrant } from 'node-vibrant/node';
import fs from 'fs';
import path from 'path';

const projects = [
  { key: 'fontOfIntent', url: 'https://font-of-intent.vercel.app/', file: 'font-of-intent-poster.png' },
  { key: 'financeTracker', url: 'https://finance-for-me-local.vercel.app', file: 'finance-tracker-poster.png' },
  { key: 'unsaidWords', url: 'https://unsaidwords.vercel.app', file: 'unsaid-words-poster.png' },
  { key: 'pingball', url: 'https://pingball.vercel.app', file: 'pingball-poster.png' },
];

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  
  const colors = {};

  for (const proj of projects) {
    const page = await context.newPage();
    console.log(`Navigating to ${proj.url}...`);
    try {
      await page.goto(proj.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);
      
      const savePath = path.join(process.cwd(), 'public/media/portfolio', proj.file);
      await page.screenshot({ path: savePath });
      console.log(`Saved screenshot to ${proj.file}`);
      
      const palette = await Vibrant.from(savePath).getPalette();
      const vibrant = palette.Vibrant || palette.DarkVibrant || palette.Muted;
      if (vibrant) {
        const [r, g, b] = vibrant.rgb;
        const hsl = rgbToHsl(r, g, b);
        colors[proj.key] = `${Math.round(hsl[0]*360)} ${Math.round(hsl[1]*100)}% ${Math.round(hsl[2]*100)}%`;
        console.log(`Extracted color for ${proj.key}: ${colors[proj.key]}`);
      }
    } catch (e) {
      console.error(`Error processing ${proj.key}:`, e);
    }
    await page.close();
  }
  
  await browser.close();
  
  fs.writeFileSync('extracted_colors.json', JSON.stringify(colors, null, 2));
  console.log('Done!');
})();

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if(max == min){
    h = s = 0; 
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max){
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}
