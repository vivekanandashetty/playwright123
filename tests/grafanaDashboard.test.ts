import { test, expect } from '@playwright/test';
import { GrafanaDashboardPage } from './pageObject/GrafanaDashboardPage';

test('Grafana dashboard validation', async ({ page }) => {

    const dashboard = new GrafanaDashboardPage(page);

    await dashboard.navigateToDashboard();

    await expect(page).toHaveTitle(/stacking-groups - Test - Dashboards - Grafana/i);
    await expect(dashboard.graphpanel).toBeVisible();
    await expect(dashboard.timepicker).toBeVisible();
    await expect(dashboard.sidebar).toBeVisible();
    

    //await expect(dashboard.sidebar).toBeVisible();
    //await expect(dashboard.timepicker).toBeVisible();
    //ait expect(dashboard.graphpanel).toBeVisible();
});

test('Grafana dashboard updates', async ({ page }) => {

    const dashboard = new GrafanaDashboardPage(page);
    const startTime = Date.now();
    await dashboard.navigateToDashboard();

    const graphPanelSnapshot = await dashboard.graphpanel.ariaSnapshot();
    dashboard.graphpanel.screenshot({ path: 'graphpanel.png' });
    dashboard.timepicker.click();
    await page.getByText('Last 30 minutes').click();
    dashboard.graphpanel.screenshot({ path: 'graphpanel-qualified.png' });

    expect('graphpanel.png').not.toMatchSnapshot('graphpanel-qualified.png', {
        threshold: 0.1, // Allow 10% difference
    });

    const loadTime = Date.now() - startTime;
    console.log(`Dashboard load time: ${loadTime} ms`);

});

test('Grafana dashboard load time', async ({ page, context }) => {

    const dashboard = new GrafanaDashboardPage(page);     
    await dashboard.navigateToDashboard();

    const dashboardUrl = page.url();
    page.screenshot({ path: 'dashboard-full.png', fullPage: true });

    const newPage = await context.newPage();
    await newPage.goto(dashboardUrl);
    await newPage.waitForLoadState('networkidle');

    await expect(newPage).toHaveScreenshot(
        'dashboard-full.png',
        {
            fullPage: true,
            maxDiffPixelRatio: 0.05
        }
    );
    
});

