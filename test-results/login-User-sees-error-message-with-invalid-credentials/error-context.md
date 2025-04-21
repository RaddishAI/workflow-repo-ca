# Test info

- Name: User sees error message with invalid credentials
- Location: C:\Users\Petter\OneDrive\Dokumenter\Skole\Noroff\workflow-repo-ca\tests\e2e\login.spec.js:12:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByText(/invalid email/i)
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText(/invalid email/i)

    at C:\Users\Petter\OneDrive\Dokumenter\Skole\Noroff\workflow-repo-ca\tests\e2e\login.spec.js:18:50
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
   2 |
   3 | test('User can log in with valid credentials', async ({ page }) => {
   4 |   await page.goto('http://localhost:5500/login'); // Adjust if your login page is different
   5 |   await page.fill('input[name="email"]', process.env.EMAIL);
   6 |   await page.fill('input[name="password"]', process.env.PASSWORD);
   7 |   await page.click('button[type="submit"]');
   8 |
   9 |   await expect(page).toHaveURL(/.*\/$/); // Homepage or redirect
  10 | });
  11 |
  12 | test('User sees error message with invalid credentials', async ({ page }) => {
  13 |   await page.goto('http://localhost:5500/login');
  14 |   await page.fill('input[name="email"]', 'wrong@example.com');
  15 |   await page.fill('input[name="password"]', 'invalidpassword');
  16 |   await page.click('button[type="submit"]');
  17 |
> 18 |   await expect(page.getByText(/invalid email/i)).toBeVisible(); // Adjust error message text if needed
     |                                                  ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  19 | });
  20 |
```