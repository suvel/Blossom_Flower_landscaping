import { test, expect } from '@playwright/test';

const pages = [
  { link: 'Home', path: '/', heading: /bringing the harmony of nature/i },
  { link: 'About', path: '/about', heading: /about us/i },
  { link: 'Services', path: '/service', heading: /^services$/i },
  { link: 'Accreditation', path: '/accreditation', heading: /^accreditation$/i },
  { link: 'Projects', path: '/project', heading: /^projects$/i },
  { link: 'Contact', path: '/contact', heading: /^contact us$/i },
];

test.describe('site navigation', () => {
  for (const { link, path, heading } of pages) {
    test(`clicking "${link}" in the nav goes to ${path}`, async ({ page }) => {
      await page.goto('/');
      await page.getByRole('navigation').getByRole('link', { name: link, exact: true }).click();
      await expect(page).toHaveURL(path);
      await expect(page.getByRole('heading', { name: heading }).first()).toBeVisible();
    });
  }

  test('the logo returns to the home page', async ({ page }) => {
    await page.goto('/about');
    await page.locator('.navbar-brand').click();
    await expect(page).toHaveURL('/');
  });

  test('a full page reload on a deep link still renders the right page', async ({ page }) => {
    await page.goto('/service');
    await expect(page.getByRole('heading', { name: /^services$/i }).first()).toBeVisible();
  });
});
