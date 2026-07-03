import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('https://font-of-intent.vercel.app/');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'public/media/portfolio/font-of-intent-test.png' });
  
  // also scroll down a bit and take another screenshot to see if the animation is lower
  await page.evaluate(() => window.scrollBy(0, 800));
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'public/media/portfolio/font-of-intent-test2.png' });

  await browser.close();
})();
