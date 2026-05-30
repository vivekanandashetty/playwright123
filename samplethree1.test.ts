import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://play.grafana.org/d/to6j8mh/grafana-play-home?orgId=1&from=now-6h&to=now&timezone=utc');
  await page.getByTestId('data-testid Dashboards breadcrumb').click();
  await page.getByRole('link', { name: 'Demo: MySQL' }).click();
  await page.getByRole('link', { name: 'MySQL 8: Cities of the World' }).click();
  await page.getByTestId('data-testid TimePicker Open Button').click();
  await page.getByText('Last 30 minutes').click();
  await page.getByTestId('data-testid TimePicker Open Button').click();
  await page.getByText('Last 24 hours').click();
  await page.getByTestId('data-testid TimePicker Open Button').click();
  await page.getByText('Last 1 hour').click();
});