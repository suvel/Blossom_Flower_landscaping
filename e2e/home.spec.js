import { test, expect } from '@playwright/test';

test.describe('home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('hero carousel controls change the visible slide', async ({ page }) => {
    const carousel = page.locator('#header-carousel');
    await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
      /bringing the harmony of nature to your doorstep/i,
    );

    await carousel.locator('.carousel-control-next').click();
    await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
      /transforming spaces, one bloom at a time/i,
    );

    await carousel.locator('.carousel-control-prev').click();
    await expect(carousel.locator('.carousel-item.active h1')).toHaveText(
      /bringing the harmony of nature to your doorstep/i,
    );
  });

  test('facts counters animate up to their final values', async ({ page }) => {
    const facts = page.locator('.facts h1.display-4');
    await facts.first().scrollIntoViewIfNeeded();
    await expect(facts.nth(0)).toHaveText('38', { timeout: 10000 });
    await expect(facts.nth(1)).toHaveText('52', { timeout: 10000 });
    await expect(facts.nth(2)).toHaveText('26', { timeout: 10000 });
  });

  test('"Explore More" under services goes to the services page', async ({ page }) => {
    await page.getByRole('link', { name: 'Explore More' }).first().click();
    await expect(page).toHaveURL('/service');
  });

  test('"Explore More" under projects goes to the projects page', async ({ page }) => {
    await page.getByRole('link', { name: 'Explore More' }).nth(1).click();
    await expect(page).toHaveURL('/project');
  });
});
