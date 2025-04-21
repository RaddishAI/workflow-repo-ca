import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

test('User can navigate to a venue detail page', async ({ page }) => {
  await page.goto('http://localhost:5500/login');
  await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
  await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);
  await page.click('button[type="submit"]');

  await page.waitForURL('http://localhost:5500/');

  await page.waitForSelector('.venue-card', { timeout: 10000 });
  await page.click('.venue-card >> nth=0');

  const heading = await page.getByRole('heading', { name: /venue details/i });
  await expect(heading).toBeVisible();
});
