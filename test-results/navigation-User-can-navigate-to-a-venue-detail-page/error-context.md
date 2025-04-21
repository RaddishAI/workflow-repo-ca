# Test info

- Name: User can navigate to a venue detail page
- Location: C:\Users\Petter\OneDrive\Dokumenter\Skole\Noroff\workflow-repo-ca\tests\e2e\navigation.spec.js:3:1

# Error details

```
Error: page.waitForSelector: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.venue-card') to be visible

    at C:\Users\Petter\OneDrive\Dokumenter\Skole\Noroff\workflow-repo-ca\tests\e2e\navigation.spec.js:6:14
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
  - heading "Welcome to this site" [level=1]
  - link:
    - /url: /venue/?id=3d100123-8dbf-4a81-bfb8-34631d076877
  - link:
    - /url: /venue/?id=d3bfcac8-98e8-4209-982f-9c5fb6abd2ec
  - link:
    - /url: /venue/?id=64d8b86a-3723-46c7-851d-a515d3ac9bf5
  - link:
    - /url: /venue/?id=20d15d21-06ec-4e86-ba2b-b38eaef28b24
  - link:
    - /url: /venue/?id=395d892f-9cfb-4901-871f-500ceb979afd
  - link:
    - /url: /venue/?id=28709ac5-07ed-4b9b-b7f3-d457e0ac6a0b
  - link:
    - /url: /venue/?id=fb6af390-e75c-4f00-8cf1-a661096e2e94
  - link:
    - /url: /venue/?id=eb197dd8-9a30-4ffe-8016-b4fc9f083d4c
  - link:
    - /url: /venue/?id=1742740e-022f-47cb-a030-0d4b1115aca1
  - link:
    - /url: /venue/?id=6885fdb8-242e-4e1f-91f5-b484acab62d9
  - link:
    - /url: /venue/?id=33742c37-8166-447d-a2ee-22bd680f12c2
  - link:
    - /url: /venue/?id=a9bfa745-f6e0-437e-a007-fcaad5141633
  - link:
    - /url: /venue/?id=61ff8a12-66e8-4296-a12f-819ebd960b5e
  - link:
    - /url: /venue/?id=2af8328f-e069-466c-9f51-79ae73cd636c
  - link:
    - /url: /venue/?id=d52b51c9-fd3c-4281-aaff-d7ed93ce4f73
  - link:
    - /url: /venue/?id=a49d21c9-5673-40a1-9895-afda75c5fc82
  - link:
    - /url: /venue/?id=444de933-6bb3-4076-84b9-1379d3f84f48
  - link:
    - /url: /venue/?id=7366b52f-ef30-4aba-9c70-99cf446b37d0
  - link:
    - /url: /venue/?id=8197c637-4197-480c-9195-666849a3a9af
  - link:
    - /url: /venue/?id=11da8305-5a12-44a9-b376-7525d62f407b
  - link:
    - /url: /venue/?id=a2b148f0-b6e3-42be-a19b-6eca248a5d0d
  - link:
    - /url: /venue/?id=05f68218-bab5-42b7-a224-777f2854e43c
  - link:
    - /url: /venue/?id=ee55f6d1-3f11-4911-9aff-c0aff400cd32
  - link:
    - /url: /venue/?id=57e4d28a-fd7c-4be2-bc79-2ad3c1ce75f1
  - link:
    - /url: /venue/?id=5c7f341d-41d4-4600-a8c3-d9935be8ec15
  - link:
    - /url: /venue/?id=72d12472-b43e-46a2-ad7d-2650c6439aa8
  - link:
    - /url: /venue/?id=5db49621-b562-4fdd-b636-b5d40934020f
  - link:
    - /url: /venue/?id=c5f6ceb0-3b81-4ee6-b89f-2070c41fbd38
  - link:
    - /url: /venue/?id=ff7707e4-ef41-4c7d-9233-23759b1e8383
  - link:
    - /url: /venue/?id=61e42ed5-92aa-411d-98e3-6c61f782571c
  - link:
    - /url: /venue/?id=7bea3413-af98-401e-8811-5329825a017a
  - link:
    - /url: /venue/?id=6e5d671b-cb45-4b49-b9b1-f0fb398320bd
  - link:
    - /url: /venue/?id=9fd25399-3e2c-4993-83e1-6049de86d5fe
  - link:
    - /url: /venue/?id=475256b0-5b0e-4b7e-bdee-30971cacd3ea
  - link:
    - /url: /venue/?id=5ef8184b-dadc-4439-bdf4-1dd79511c4b2
  - link:
    - /url: /venue/?id=6a93a57f-0e62-42ed-875b-dac55ab3a101
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('User can navigate to a venue detail page', async ({ page }) => {
   4 |   await page.goto('http://localhost:5500/');
   5 |
>  6 |   await page.waitForSelector('.venue-card'); // Adjust this selector to your venue list
     |              ^ Error: page.waitForSelector: Test timeout of 30000ms exceeded.
   7 |   await page.click('.venue-card >> nth=0'); // Click the first venue
   8 |
   9 |   const heading = await page.getByRole('heading', { name: /venue details/i });
  10 |   await expect(heading).toBeVisible();
  11 | });
  12 |
```