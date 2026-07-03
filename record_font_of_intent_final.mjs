import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 800, height: 400 },
    deviceScaleFactor: 2,
    recordVideo: {
      dir: './temp-video'
    }
  });

  const page = await context.newPage();

  console.log("Navigating to https://font-of-intent.vercel.app/...");
  await page.goto('https://font-of-intent.vercel.app/');

  // Hide the text around the typing box and center it
  await page.evaluate(() => {
    const hideElements = () => {
      const allTextElements = Array.from(document.querySelectorAll('h1, h2, p, a, span'));
      allTextElements.forEach(el => {
        const text = el.innerText.toLowerCase();
        if (
          text.includes('your words reveal') || 
          text.includes('a letter that proves') ||
          text.includes('write your letter') ||
          text.includes('the letter only a human') ||
          text.includes('made with figma')
        ) {
          el.style.display = 'none';
        }
      });

      // Also hide the top nav
      const navs = Array.from(document.querySelectorAll('nav, header'));
      navs.forEach(el => el.style.display = 'none');
    };
    
    hideElements();
    setTimeout(hideElements, 1000);
    setTimeout(hideElements, 2000);

    // Center the typing box
    const mainBox = document.querySelector('main > div') || document.querySelector('main');
    if (mainBox) {
       mainBox.style.display = 'flex';
       mainBox.style.justifyContent = 'center';
       mainBox.style.alignItems = 'center';
       mainBox.style.height = '100vh';
       // Move it down a bit
       mainBox.style.paddingTop = '80px';
    }
  });

  // Wait 8 seconds for the typing animation to finish
  await page.waitForTimeout(8000);

  // Close page to flush the video to disk
  await page.close();
  await context.close();
  await browser.close();

  if (!fs.existsSync('./temp-video')) return;
  const tempFiles = fs.readdirSync('./temp-video');
  const webmFile = tempFiles.find(f => f.endsWith('.webm'));
  
  if (webmFile) {
    const src = path.join('./temp-video', webmFile);
    const dest = path.join('./public/media/portfolio', 'font-of-intent-loop.webm');
    fs.renameSync(src, dest);
    console.log(`Video saved to ${dest}`);
  }
  
  fs.rmSync('./temp-video', { recursive: true, force: true });
})();
