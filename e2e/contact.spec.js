import { test, expect } from '@playwright/test';

test('contact form is a mailto GET form and accepts a subject', async ({ page }) => {
  await page.goto('/contact');

  const form = page.locator('form');
  await expect(form).toHaveAttribute('action', 'mailto:info@blossomlandscaping.ae');
  await expect(form).toHaveAttribute('method', 'get');

  const subject = page.locator('#subject');
  await subject.fill('Jane Doe, 0501234567');
  await expect(subject).toHaveValue('Jane Doe, 0501234567');
});
