const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.connect({
        wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
            'browser': 'chrome',
            'browser_version': 'latest',
            'os': 'osx',
            'os_version': 'ventura',
            'name': 'DuckDuckGo Test',
            'build': 'Playwright Jenkins Build',
            'browserstack.username': 'devendragawade_a7XBUS',
            'browserstack.accessKey': 'zsVnCSszQ9C8JX7FnZKA'
        }))}`
    });

    const page = await browser.newPage();
    await page.goto('https://duckduckgo.com/');
    await page.waitForSelector('input[name="q"]', { timeout: 60000 });
    await page.fill('input[name="q"]', 'Hello World');
    await page.press('input[name="q"]', 'Enter');
    await page.waitForTimeout(5000);
    await browser.close();
})();

