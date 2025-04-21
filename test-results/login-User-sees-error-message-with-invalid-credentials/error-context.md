# Test info

- Name: User sees error message with invalid credentials
- Location: C:\Users\Petter\OneDrive\Dokumenter\Skole\Noroff\workflow-repo-ca\tests\e2e\login.spec.js:14:1

# Error details

```
Error: Timed out 7000ms waiting for expect(locator).toBeVisible()

Locator: getByText(/invalid email/i)
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 7000ms
  - waiting for getByText(/invalid email/i)

    at C:\Users\Petter\OneDrive\Dokumenter\Skole\Noroff\workflow-repo-ca\tests\e2e\login.spec.js:20:68
```

# Page snapshot

```yaml
- banner:
  - navigation:
    - navigation:
      - link "Logo":
        - /url: /
      - link "Home":
        - /url: /
      - link "Login":
        - /url: /login
      - link "Register":
        - /url: /register
- main:
  - heading "Login" [level=1]
  - alert:
    - paragraph: Please enter a noroff.no or stud.noroff.no email address.
  - group:
    - textbox "Email": wrong@example.com
    - textbox "Password": invalidpassword
    - button "Login"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import dotenv from 'dotenv';
   3 |
   4 | dotenv.config();
   5 |
   6 | test('User can log in with valid credentials', async ({ page }) => {
   7 |   await page.goto('http://localhost:5500/login');
   8 |   await page.fill('input[name="email"]', process.env.TEST_USER_EMAIL);
   9 |   await page.fill('input[name="password"]', process.env.TEST_USER_PASSWORD);
  10 |   await page.click('button[type="submit"]');
  11 |   await expect(page).toHaveURL(/\/$/);
  12 | });
  13 |
  14 | test('User sees error message with invalid credentials', async ({ page }) => {
  15 |   await page.goto('http://localhost:5500/login');
  16 |   await page.fill('input[name="email"]', 'wrong@example.com');
  17 |   await page.fill('input[name="password"]', 'invalidpassword');
  18 |   await page.click('button[type="submit"]');
  19 |
> 20 |   await expect(page.getByText(/invalid email/i, { exact: false })).toBeVisible({
     |                                                                    ^ Error: Timed out 7000ms waiting for expect(locator).toBeVisible()
  21 |     timeout: 7000,
  22 |   });
  23 | });
  24 |
```