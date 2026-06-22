import { test, expect } from '@playwright/test';

test.describe('Guest Flow', () => {
  test('should complete booking successfully', async ({ page }) => {
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1')).toContainText('Запись на встречу', { timeout: 10000 });

    await page.getByRole('link', { name: /Записаться/i }).first().click();

    await expect(page.locator('h1')).toContainText('Выберите длительность', { timeout: 10000 });

    // Select 30 minutes duration
    await page.getByText('30 минут').click();

    await expect(page).toHaveURL(/\/book\/30\/schedule/, { timeout: 10000 });

    // Select first available slot
    const availableSlot = page.locator('button:has-text("09:00")').first();
    await availableSlot.click({ timeout: 5000 });

    await page.getByRole('button', { name: /Продолжить/i }).click();

    await expect(page.getByText('Завершить бронирование')).toBeVisible({ timeout: 5000 });

    await page.fill('input#name', 'John Doe');
    await page.fill('input#email', 'john@example.com');

    await page.getByRole('button', { name: /Подтвердить запись/i }).click();

    await expect(page.getByText('Запись подтверждена!')).toBeVisible({ timeout: 5000 });
  });

  test('should display event types on home page', async ({ page }) => {
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    await expect(page.locator('h1')).toContainText('Запись на встречу', { timeout: 10000 });

    await page.getByRole('link', { name: /Записаться/i }).first().click();

    await expect(page.getByText('30 минут')).toBeVisible({ timeout: 5000 });
    await expect(page.getByText('60 минут')).toBeVisible({ timeout: 5000 });
    await expect(page.getByText('90 минут')).toBeVisible({ timeout: 5000 });
  });

  test('should navigate to availability page', async ({ page }) => {
    await page.goto('/');

    await page.waitForLoadState('networkidle');

    await page.getByRole('link', { name: /Записаться/i }).first().click();

    await expect(page).not.toHaveURL('/', { timeout: 5000 });
  });
});