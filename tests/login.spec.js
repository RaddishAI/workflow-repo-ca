import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

test('User can log in with valid credentials', async ({ page }) => {
  await page.goto('http://localhost:5500/login');
  await page.fill('input[name="email"]', process.env.VALID_EMAIL);
  await page.fill('input[name="password"]', process.env.VALID_PASSWORD);
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/.*home|dashboard|index/i);
});

test('User sees error with invalid credentials', async ({ page }) => {
  await page.goto('http://localhost:5500/login');
  await page.fill('input[name="email"]', 'wrong@example.com');
  await page.fill('input[name="password"]', 'wrongpass');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error-message')).toBeVisible();
});
