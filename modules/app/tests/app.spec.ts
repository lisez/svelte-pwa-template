import { test, expect } from '@playwright/test';

test.describe('App', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');

    // Expect a title containing "Svelte PWA"
    await expect(page).toHaveTitle(/Svelte PWA/);
  });

  test('displays main heading', async ({ page }) => {
    await page.goto('/');

    // Expect the main heading to be visible
    const heading = page.getByRole('heading', { name: /Svelte PWA/i });
    await expect(heading).toBeVisible();
  });

  test('displays environment and date info', async ({ page }) => {
    await page.goto('/');

    // Check that environment info is displayed
    const envText = page.getByText(/Environment:/);
    await expect(envText).toBeVisible();
  });

  test('shows logos with correct links', async ({ page }) => {
    await page.goto('/');

    // Check Svelte logo link
    const svelteLink = page.getByRole('link', { name: /Svelte Logo/i });
    await expect(svelteLink).toHaveAttribute('href', 'https://svelte.dev');
  });
});
