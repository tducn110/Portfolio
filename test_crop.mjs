import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 800, height: 400 } });
  await page.goto('https://font-of-intent.vercel.app/');
  
  // wait 2 seconds for the box to render and start typing
  await page.waitForTimeout(2000);
  
  await page.evaluate(() => {
    const allDivs = Array.from(document.querySelectorAll('div'));
    const targetBox = allDivs.find(div => div.innerText && div.innerText.includes('Dear you,'));
    
    if (targetBox) {
      document.body.innerHTML = '';
      document.body.style.display = 'flex';
      document.body.style.justifyContent = 'center';
      document.body.style.alignItems = 'center';
      document.body.style.height = '100vh';
      document.body.style.background = '#F3EFEA';
      
      // Make sure the targetBox has background white
      targetBox.style.background = 'white';
      
      document.body.appendChild(targetBox);
      targetBox.style.transform = 'scale(1.5)';
      targetBox.style.transformOrigin = 'center center';
    } else {
      document.body.style.background = 'red';
    }
  });

  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'public/media/portfolio/font-of-intent-test3.png' });

  await browser.close();
})();
