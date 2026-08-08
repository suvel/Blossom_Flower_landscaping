import { test, expect } from '@playwright/test';

test.describe('project modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/project');
  });

  test('opening a project card shows its details', async ({ page }) => {
    await page.locator('.portfolio-inner').first().click();

    const modal = page.locator('.modal.show');
    await expect(modal).toBeVisible();
    await expect(modal.getByText('Department of Municipalities and Transport.(DMT)')).toBeVisible();
    await expect(modal.getByText('AED 2.4 million')).toBeVisible();
  });

  test('next/prev cycle through the project images', async ({ page }) => {
    await page.locator('.portfolio-inner').first().click();
    const image = page.locator('#projectImage');
    const firstSrc = await image.getAttribute('src');

    await page.getByRole('button', { name: 'Next image' }).click();
    await expect(image).not.toHaveAttribute('src', firstSrc);

    await page.getByRole('button', { name: 'Previous image' }).click();
    await expect(image).toHaveAttribute('src', firstSrc);
  });

  test('closing the modal dismisses it', async ({ page }) => {
    await page.locator('.portfolio-inner').first().click();
    await expect(page.locator('.modal.show')).toBeVisible();

    await page.getByRole('button', { name: 'Close' }).click();

    await expect(page.locator('.modal.show')).toHaveCount(0);
  });
});
