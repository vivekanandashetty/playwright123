import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://play.grafana.org/d/to6j8mh/grafana-play-home?orgId=1&from=now-6h&to=now&timezone=utc');
  await page.getByTestId('data-testid Dashboards breadcrumb').click();
  await page.getByRole('link', { name: 'Grafana SLO' }).click();
  await page.getByTestId('data-testid browse dashboards row Cart Interactions - Latency - Demo hhl28ui22l6x7xocvn8ck').getByRole('link', { name: 'Cart Interactions - Latency' }).click();
  await page.getByTestId('data-testid Dashboards breadcrumb').click();
  await page.getByTestId('data-testid browse dashboards row Test dashboard').getByRole('link', { name: 'Test dashboard' }).click();
  await page.getByTestId('data-testid dashboard controls').click();
  await page.getByTestId('data-testid dashboard controls').click();
  await page.getByTestId('data-testid dashboard controls').click();
  await page.locator('.css-14iycu').click();
  await page.locator('.css-14iycu').click();
  await page.getByTestId('data-testid Dashboards breadcrumb').click();
  await page.getByTestId('data-testid browse dashboards row Test dashboard').getByRole('link', { name: 'Test dashboard' }).click();
  await page.getByTestId('data-testid Dashboards breadcrumb').click();
  await page.getByRole('cell', { name: 'My test dashboard' }).click();
  await page.getByRole('link', { name: 'My test dashboard' }).click();
  await page.getByText('labelsTimeLinetsNslabelTypesidNo rows').click();
  await page.getByTestId('data-testid Panel header New panel').getByTestId('data-testid header-container').click();
  await page.locator('.css-g5v32a').click();
  await page.locator('.css-14iycu').click();
  await page.locator('.css-14iycu').click();
  await page.getByTestId('data-testid dashboard controls').click();
  await page.getByTestId('data-testid TimePicker Open Button').click();
  await page.getByTestId('data-testid TimePicker Open Button').click();
});