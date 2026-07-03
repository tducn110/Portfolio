const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const outDir = '/tmp/portfolio-qa-screenshots';
fs.mkdirSync(outDir, { recursive: true });

const targets = [
  { name: 'process', selector: '[data-component="ProcessSection"]' },
  { name: 'service', selector: '[data-component="ServiceSection"]' },
  { name: 'projects', selector: '[data-component="ProjectsSection"]' },
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'laptop', width: 1280, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const viewport of viewports) {
    const page = await browser.newPage({ viewport });
    page.on('console', msg => {
      if (['error', 'warning'].includes(msg.type())) {
        results.push({ type: 'console', viewport: viewport.name, level: msg.type(), text: msg.text() });
      }
    });
    page.on('pageerror', err => {
      results.push({ type: 'pageerror', viewport: viewport.name, text: err.message });
    });
    page.on('requestfailed', req => {
      results.push({ type: 'requestfailed', viewport: viewport.name, url: req.url(), failure: req.failure()?.errorText });
    });

    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle', timeout: 30000 });

    for (const target of targets) {
      const loc = page.locator(target.selector).first();
      const count = await loc.count();

      if (!count) {
        results.push({ type: 'missing-selector', viewport: viewport.name, selector: target.selector });
        continue;
      }

      await loc.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const file = path.join(outDir, `${viewport.name}-${target.name}.png`);
      await loc.screenshot({ path: file });
      results.push({ type: 'screenshot', viewport: viewport.name, section: target.name, file });
    }

    await page.close();
  }

  await browser.close();

  fs.writeFileSync(path.join(outDir, 'qa-results.json'), JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
})();
