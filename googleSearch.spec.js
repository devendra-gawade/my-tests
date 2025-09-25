const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://duckduckgo.com/');

    // Wait for the search box
    await page.waitForSelector('input[name="q"]', { timeout: 60000 });

    // Type search query
    await page.fill('input[name="q"]', 'Hello World');
    await page.press('input[name="q"]', 'Enter');

    // Wait to see results
    await page.waitForTimeout(5000);

    await browser.close();
})();

