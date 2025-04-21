import { test, expect } from '@playwright/test';

test('User can navigate to a venue detail page', async ({ page }) => {
  await page.goto('http://localhost:5500/');

  await page.waitForSelector('.venue-card'); // Adjust this selector to your venue list
  await page.click('.venue-card >> nth=0'); // Click the first venue

  const heading = await page.getByRole('heading', { name: /venue details/i });
  await expect(heading).toBeVisible();
});
