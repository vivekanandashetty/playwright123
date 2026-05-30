import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://play.grafana.org/d/to6j8mh/grafana-play-home?orgId=1&from=now-6h&to=now&timezone=utc');
  await page.getByTestId('data-testid Dashboards breadcrumb').dblclick();
  await page.getByRole('textbox', { name: 'Search for dashboards and' }).click();
  await page.getByRole('textbox', { name: 'Search for dashboards and' }).fill('await page.getByRole(\'combobox\', { name: /Search for dashboards and/i }).click();');
});