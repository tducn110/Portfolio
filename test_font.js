const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  await page.goto('https://font-of-intent.vercel.app/');
  await page.waitForTimeout(5000); // wait 5s to see what's on screen
  await page.screenshot({ path: 'public/media/portfolio/font-of-intent-test.png' });
  await browser.close();
})();
