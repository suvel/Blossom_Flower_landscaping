import { test, expect } from '@playwright/test';

test.use({ viewport: { width: 390, height: 844 } });

test('the hamburger menu opens and closes the nav on mobile', async ({ page }) => {
  await page.goto('/');

  const collapse = page.locator('#navbarCollapse');
  await expect(collapse).not.toHaveClass(/show/);

  await page.locator('.navbar-toggler').click();
  await expect(collapse).toHaveClass(/show/);

  await page.locator('.navbar-toggler').click();
  await expect(collapse).not.toHaveClass(/show/);
});
