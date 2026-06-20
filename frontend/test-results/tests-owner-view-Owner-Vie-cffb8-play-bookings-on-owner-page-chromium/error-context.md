# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/owner-view.spec.ts >> Owner View >> should display bookings on owner page
- Location: e2e/tests/owner-view.spec.ts:4:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Upcoming Bookings"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('h1')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Owner View', () => {
  4  |   test('should display bookings on owner page', async ({ page, request }) => {
  5  |     const bookingDate = new Date();
  6  |     bookingDate.setDate(bookingDate.getDate() + 3);
  7  |     bookingDate.setHours(11, 0, 0, 0);
  8  | 
  9  |     const response = await request.post('http://localhost:3000/bookings', {
  10 |       data: {
  11 |         eventTypeId: 'demo',
  12 |         guestName: 'Test Guest',
  13 |         guestEmail: 'testguest@example.com',
  14 |         startTime: bookingDate.toISOString(),
  15 |       },
  16 |     });
  17 | 
  18 |     expect(response.status()).toBe(201);
  19 | 
  20 |     await page.goto('/owner');
  21 | 
> 22 |     await expect(page.locator('h1')).toContainText('Upcoming Bookings');
     |                                      ^ Error: expect(locator).toContainText(expected) failed
  23 | 
  24 |     await expect(page.getByText('Test Guest')).toBeVisible();
  25 |     await expect(page.getByText('testguest@example.com')).toBeVisible();
  26 |   });
  27 | 
  28 |   test('should show empty state when no bookings', async ({ page }) => {
  29 |     await page.goto('/owner');
  30 | 
  31 |     await expect(page.locator('h1')).toContainText('Upcoming Bookings');
  32 |     await expect(page.getByText(/No upcoming bookings/i)).toBeVisible();
  33 |   });
  34 | });
```