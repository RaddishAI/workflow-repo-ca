import { test, expect } from '@playwright/test';

test('Navigation to venue detail page works', async ({ page }) => {
  await page.goto('http://localhost:5500/');
  await page.waitForSelector('.venue-card');
  await page.click('.venue-card:first-child');
  await page.waitForSelector('h1');
  const heading = await page.locator('h1').innerText();
  expect(heading.toLowerCase()).toContain('venue details');
});
