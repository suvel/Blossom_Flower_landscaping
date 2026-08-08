import { test, expect } from '@playwright/test';

test('clicking a certificate shows the matching image in the modal', async ({ page }) => {
  await page.goto('/accreditation');

  await page.getByText('ISO 9001:2015').click();

  const modalImage = page.locator('#certificateImage');
  await expect(modalImage).toBeVisible();
  await expect(modalImage).toHaveAttribute('src', /ISO_quality_management\.jpg$/);
});
