import { test, expect } from '@playwright/test'


test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await expect(page).toHaveTitle(/Market Research/)
})


test('has heading', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await expect(page.getByRole('heading', { name: 'Game Sales Stats API' })).toBeVisible();
})


test('Add data button is clickable and leads to /input', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await page.getByRole('button', { name: 'Add data' }).click()
  await expect(page).toHaveURL('http://localhost:3000/input')
})

// WIP
test('Edit button is clickable and leads to /update/:id', async ({ page }) => {
  await page.goto('http://localhost:3000')

  await page.getByText('Edit', {exact: true}).click() // Need to figure out how to get this to be clicked
  await expect(page).toHaveURL(/.*update.*/)
})
