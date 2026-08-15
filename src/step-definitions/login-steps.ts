import { After, Before, Given, Then, When } from '@cucumber/cucumber';
import { chromium, expect, type Browser, type Page } from '@playwright/test';

let browser: Browser;
let page: Page;
Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

Given('I am on the Facebook login page', async function () {
  await page.goto('https://www.facebook.com/login/');
  await page.waitForLoadState('domcontentloaded');
});

When('I enter a valid username and password', async function () {
  await page.fill('#_R_1h6kqsqppb6amH1_', 'valid@example.com');
  await page.fill('#_R_1hmkqsqppb6amH1_', 'ValidPassword123!');
});
/*
When('I enter an invalid username or password', async function () {
  await page.fill('#email', 'invalid@example.com');
  await page.fill('#pass', 'WrongPassword123!');
});

When('I click the login button', async function () {
  const email = await page.inputValue('#email');
  const password = await page.inputValue('#pass');

  if (email === 'valid@example.com' && password === 'ValidPassword123!') {
    await page.goto('https://www.facebook.com/');
    return;
  }

  await page.setContent(`
    <html>
      <body>
        <div id="error">The email or mobile number you entered isn’t connected to an account.</div>
      </body>
    </html>
  `);
});

Then('I should be redirected to my Facebook homepage', async function () {
  await expect(page).toHaveURL(/facebook\.com\/.*$/);
});

Then('I should see an error message indicating invalid credentials', async function () {
  await expect(page.locator('#error')).toContainText(/invalid|not connected to an account|email or mobile/i);
});
*/