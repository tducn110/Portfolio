import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  // We record a smaller video, just the size of the box roughly
  const context = await browser.newContext({
    viewport: { width: 800, height: 400 },
    recordVideo: {
      dir: './temp-video'
    }
  });

  const page = await context.newPage();
  
  // Intercept the page load and inject CSS to hide everything except the animation box
  await page.route('**/*', async route => {
    route.continue();
  });

  console.log("Navigating to https://font-of-intent.vercel.app/...");
  await page.goto('https://font-of-intent.vercel.app/');

  // Wait for the text box to appear
  await page.waitForSelector('.typewriter-wrapper', { state: 'attached', timeout: 5000 }).catch(() => {});
  
  await page.evaluate(() => {
    // We want to keep only the box containing "Dear you,"
    // Let's try to find it. It's usually a div with a white background and left border.
    const allDivs = Array.from(document.querySelectorAll('div'));
    const targetBox = allDivs.find(div => div.innerText && div.innerText.includes('Dear you,'));
    
    if (targetBox) {
      // Hide everything else
      document.body.innerHTML = '';
      document.body.style.display = 'flex';
      document.body.style.justifyContent = 'center';
      document.body.style.alignItems = 'center';
      document.body.style.height = '100vh';
      document.body.style.background = '#F3EFEA'; // Match the background
      document.body.appendChild(targetBox);
      
      // Make the box larger
      targetBox.style.transform = 'scale(1.5)';
      targetBox.style.transformOrigin = 'center center';
    }
  });

  // Wait 8 seconds for the typing animation to finish
  await page.waitForTimeout(8000);

  // Close page to flush the video to disk
  await page.close();
  await context.close();
  await browser.close();

  // Find the recorded video and move it to public/media/portfolio
  if (!fs.existsSync('./temp-video')) return;
  const tempFiles = fs.readdirSync('./temp-video');
  const webmFile = tempFiles.find(f => f.endsWith('.webm'));
  
  if (webmFile) {
    const src = path.join('./temp-video', webmFile);
    const dest = path.join('./public/media/portfolio', 'font-of-intent-loop.webm');
    fs.renameSync(src, dest);
    console.log(`Video saved to ${dest}`);
  }
  
  // Cleanup temp dir
  fs.rmSync('./temp-video', { recursive: true, force: true });
})();
