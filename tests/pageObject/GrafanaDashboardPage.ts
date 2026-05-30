import { Page, Locator } from '@playwright/test';

export class GrafanaDashboardPage {

    readonly page: Page;
    readonly dashboardUrl: string = 'https://play.grafana.org/d/lexb9mf/stacking-groups?orgId=1&from=now-1h&to=now&timezone=utc';
    readonly sidebar: Locator;
    readonly timepicker: Locator;
    readonly graphpanel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sidebar = this.page.getByTestId('data-testid Sidebar container');
        this.timepicker = this.page.getByTestId('data-testid TimePicker Open Button');
        this.graphpanel = this.page.getByTestId('data-testid Panel header New panel');
    }

    async navigateToDashboard() {

        await this.page.goto(
            this.dashboardUrl,
            { waitUntil: 'domcontentloaded' }
        );

        await this.page.waitForLoadState('networkidle');
    }
}
