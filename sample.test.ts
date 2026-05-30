import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://play.grafana.org/d/to6j8mh/grafana-play-home?orgId=1&from=now-6h&to=now&timezone=utc');
  await page.getByRole('button', { name: 'Search...' }).click();
  await page.getByText('DashboardsExamplesGrafana Play HomeSearch...ctrl+kSign in').click();
  await page.getByRole('button', { name: 'Search...' }).click();
  await page.getByRole('combobox', { name: 'Search or jump to...' }).fill('1 time-series dashboard');
  await page.getByRole('combobox', { name: 'Search or jump to...' }).press('Enter');
  await page.getByRole('option', { name: 'Dashboards: time series test' }).click();
  await page.getByTestId('data-testid TimePicker Open Button').click();
  await page.getByTestId('data-testid Dashboard Sidebar outline button').click();
  await page.getByTestId('data-testid sidebar-show-hide-toggle').click();
  await page.locator('div').filter({ hasText: /^Panel Titlevalue$/ }).nth(4).click();
  await page.getByTestId('data-testid TimePicker Open Button').click();
  await page.getByText('Last 6 hours').click();
  await page.getByTestId('data-testid DashboardEditPaneSplitter body container').click();
});