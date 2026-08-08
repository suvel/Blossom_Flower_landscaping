# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: home.spec.js >> home page >> facts counters animate up to their final values
- Location: e2e/home.spec.js:25:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Element is not attached to the DOM
Call log:
  - attempting scroll into view action
    - waiting for element to be stable

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('home page', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |   });
  7  | 
  8  |   test('hero carousel controls change the visible slide', async ({ page }) => {
  9  |     const carousel = page.locator('#header-carousel');
  10 |     await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
  11 |       /bringing the harmony of nature to your doorstep/i,
  12 |     );
  13 | 
  14 |     await carousel.locator('.carousel-control-next').click();
  15 |     await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
  16 |       /transforming spaces, one bloom at a time/i,
  17 |     );
  18 | 
  19 |     await carousel.locator('.carousel-control-prev').click();
  20 |     await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
  21 |       /bringing the harmony of nature to your doorstep/i,
  22 |     );
  23 |   });
  24 | 
  25 |   test('facts counters animate up to their final values', async ({ page }) => {
  26 |     const facts = page.locator('.facts h1.display-4');
> 27 |     await facts.first().scrollIntoViewIfNeeded();
     |                         ^ Error: locator.scrollIntoViewIfNeeded: Element is not attached to the DOM
  28 |     await expect(facts.nth(0)).toHaveText('38', { timeout: 10000 });
  29 |     await expect(facts.nth(1)).toHaveText('52', { timeout: 10000 });
  30 |     await expect(facts.nth(2)).toHaveText('26', { timeout: 10000 });
  31 |   });
  32 | 
  33 |   test('"Explore More" under services goes to the services page', async ({ page }) => {
  34 |     await page.getByRole('link', { name: 'Explore More' }).first().click();
  35 |     await expect(page).toHaveURL('/service');
  36 |   });
  37 | 
  38 |   test('"Explore More" under projects goes to the projects page', async ({ page }) => {
  39 |     await page.getByRole('link', { name: 'Explore More' }).nth(1).click();
  40 |     await expect(page).toHaveURL('/project');
  41 |   });
  42 | });
  43 | 
```