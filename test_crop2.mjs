import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 400 } });
  await page.goto('https://font-of-intent.vercel.app/');
  
  await page.waitForTimeout(1000);
  
  await page.evaluate(() => {
    // hide all h1, p, span that are not inside the typing box
    // Actually, just find the big text and hide it
    const allHeaders = Array.from(document.querySelectorAll('h1, h2, p'));
    allHeaders.forEach(el => {
      if (el.innerText.toLowerCase().includes('your words reveal') || 
          el.innerText.toLowerCase().includes('a letter that proves')) {
        el.style.display = 'none';
      }
    });

    // Also hide the top nav
    const navs = Array.from(document.querySelectorAll('nav, header'));
    navs.forEach(el => el.style.display = 'none');
  });

  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'public/media/portfolio/font-of-intent-test4.png' });

  await browser.close();
})();
