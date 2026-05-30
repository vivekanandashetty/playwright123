import { test, expect } from '@playwright/test';

test('Validate Grafana dashboard loads successfully', async ({ page }) => {

    // Dashboard URL
    const dashboardUrl = 'https://play.grafana.org/';

    // Start load time capture
    const startTime = Date.now();

    // Launch and navigate
    await page.goto(dashboardUrl, {
        waitUntil: 'domcontentloaded'
    });

    // Wait for dashboard/page to fully load
    await page.waitForLoadState('networkidle');

    // End load time capture
    const endTime = Date.now();
    const dashboardLoadTime = endTime - startTime;

    console.log(`Dashboard Load Time: ${dashboardLoadTime} ms`);

    // Verify dashboard title
    await expect(page.locator('h1').first()).toContainText('Welcome to Grafana Play');

    // Verify expected panels are visible
    const expectedPanels = [
        'New panel',
        'Memory',
        'Network'
    ];

    for (const panel of expectedPanels) {

        const panelLocator = page.locator(`text=${panel}`);

        await expect(panelLocator).toBeVisible();
    }

    // Verify no datasource or panel errors are displayed
    const errorMessages = [
        'No data',
        'Data source error',
        'Panel data error',
        'Unable to connect',
        'Query error'
    ];

    for (const errorText of errorMessages) {

        await expect(
            page.locator(`text=${errorText}`)
        ).toHaveCount(0);
    }

    // Optional assertion for dashboard load SLA
    expect(dashboardLoadTime).toBeLessThan(10000);

});