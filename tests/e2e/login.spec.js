import { test, expect } from '@playwright/test';

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:5500/login'); // Adjust if your login page is different
  await page.fill('input[name="email"]', process.env.EMAIL);
  await page.fill('input[name="password"]', process.env.PASSWORD);
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/.*\/$/); // Homepage or redirect
});

test('User sees error message with invalid credentials', async ({ page }) => {
  await page.goto('http://localhost:5500/login');
  await page.fill('input[name="email"]', 'wrong@example.com');
  await page.fill('input[name="password"]', 'invalidpassword');
  await page.click('button[type="submit"]');

  await expect(page.getByText(/invalid email/i)).toBeVisible(); // Adjust error message text if needed
});
