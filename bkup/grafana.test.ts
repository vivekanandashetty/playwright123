import { test, expect } from '@playwright/test';

test.describe('Grafana Time-Series Dashboard Tests', () => {

    test('dashboard loads correctly', async ({ page }) => {

        // Navigate to Grafana Play
        await page.goto('https://play.grafana.org');

        // Wait for application load
        await page.waitForLoadState('networkidle');

        // Click Dashboards breadcrumb/menu
        const dashboardsMenu = page.getByRole('link', {
            name: /dashboards/i
        });

        await expect(dashboardsMenu).toBeVisible();

        await dashboardsMenu.click();

        // Click Browse/Search dashboards
        const browseDashboard = page.getByRole('link', {
            name: /browse/i
        });

        if (await browseDashboard.count() > 0) {

            await browseDashboard.click();
        }

        // Wait for dashboard search page
        await page.waitForLoadState('networkidle');

        // Search dashboard
        const searchBox = page.locator('input[type="search"]')
            .or(page.locator('input[placeholder*="Search"]'))
            .first();

        await expect(searchBox).toBeVisible();

        await searchBox.fill('1 time-series dashboard');

        await page.keyboard.press('Enter');

        // Wait for results
        await page.waitForTimeout(3000);

        // Open dashboard
        const dashboardResult = page.locator('a')
            .filter({
                hasText: '1 Time-series'
            })
            .first();

        await expect(dashboardResult).toBeVisible();

        await dashboardResult.click();

        // Wait for dashboard load
        await page.waitForLoadState('networkidle');

        // Validate dashboard URL
        await expect(page).toHaveURL(/d\//);

        // Validate panels visible
        const panels = page.locator('[data-testid*="panel"]');

        await expect(panels.first()).toBeVisible();

        // Validate no datasource errors
        await expect(
            page.locator('text=DatasourceError')
        ).toHaveCount(0);

        await expect(
            page.locator('text=No data')
        ).toHaveCount(0);
    });

});