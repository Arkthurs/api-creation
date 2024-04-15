import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000')
    })
  
    test('main navigation', async ({ page }) => {
      await expect(page).toHaveURL('http://localhost:3000');
    })
  })