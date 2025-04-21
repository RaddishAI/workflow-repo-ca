// playwright.config.js
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests/e2e',
  use: {
    baseURL: 'http://localhost:5500/',
    headless: true,
  },
});
