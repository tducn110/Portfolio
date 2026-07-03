import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  // We record video into a temp directory
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    recordVideo: {
      dir: './temp-video'
    }
  });

  const page = await context.newPage();
  console.log("Navigating to https://font-of-intent.vercel.app/...");
  await page.goto('https://font-of-intent.vercel.app/');

  // Wait 10 seconds for the typing animation to finish
  await page.waitForTimeout(10000);

  // Close page to flush the video to disk
  await page.close();
  await context.close();
  await browser.close();

  // Find the recorded video and move it to public/media/portfolio
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
