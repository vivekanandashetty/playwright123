# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\grafanaDashboard.test.ts >> Grafana dashboard load time
- Location: tests\grafanaDashboard.test.ts:42:5

# Error details

```
Error: A snapshot doesn't exist at C:\Vivek\Automation\GrafanaTest\tests\grafanaDashboard.test.ts-snapshots\dashboard-full-win32.png, writing actual.
```

# Page snapshot

```yaml
- generic [ref=e4]:
  - link "Skip to main content" [ref=e5] [cursor=pointer]:
    - /url: "#pageContent"
    - generic [ref=e6]: Skip to main content
  - generic [ref=e7]:
    - generic [ref=e8]:
      - generic [ref=e9]:
        - link "Grafana" [ref=e10] [cursor=pointer]:
          - /url: /
          - img "Grafana" [ref=e11]
        - generic [ref=e12]: Grafana
      - button "Undock menu" [ref=e13] [cursor=pointer]:
        - img [ref=e14]
      - button "Close menu" [ref=e16] [cursor=pointer]:
        - img [ref=e17]
    - navigation [ref=e19]:
      - list "Navigation" [ref=e23]:
        - listitem [ref=e24]:
          - link "Home" [ref=e28] [cursor=pointer]:
            - /url: /
            - generic [ref=e30]:
              - img [ref=e31]
              - paragraph [ref=e33]: Home
        - listitem [ref=e34]:
          - generic [ref=e35]:
            - link "Starred" [ref=e38] [cursor=pointer]:
              - /url: /dashboards?starred
              - generic [ref=e40]:
                - img [ref=e41]
                - paragraph [ref=e43]: Starred
            - 'button "Expand section: Starred" [ref=e45] [cursor=pointer]':
              - img [ref=e46]
        - listitem [ref=e48]:
          - link "Dashboards" [ref=e52] [cursor=pointer]:
            - /url: /dashboards
            - generic [ref=e54]:
              - img [ref=e55]
              - paragraph [ref=e57]: Dashboards
        - listitem [ref=e58]:
          - link "Explore" [ref=e62] [cursor=pointer]:
            - /url: /explore
            - generic [ref=e64]:
              - img [ref=e65]
              - paragraph [ref=e67]: Explore
        - listitem [ref=e68]:
          - generic [ref=e69]:
            - link "Drilldown" [ref=e72] [cursor=pointer]:
              - /url: /drilldown
              - generic [ref=e74]:
                - img [ref=e75]
                - paragraph [ref=e80]: Drilldown
            - 'button "Expand section: Drilldown" [ref=e82] [cursor=pointer]':
              - img [ref=e83]
        - listitem [ref=e85]:
          - generic [ref=e86]:
            - link "Alerts & IRM" [ref=e89] [cursor=pointer]:
              - /url: /alerts-and-incidents
              - generic [ref=e91]:
                - img [ref=e92]
                - paragraph [ref=e94]: Alerts & IRM
            - 'button "Expand section: Alerts &amp; IRM" [ref=e96] [cursor=pointer]':
              - img [ref=e97]
        - listitem [ref=e99]:
          - generic [ref=e100]:
            - link "AI & machine learning" [ref=e103] [cursor=pointer]:
              - /url: /a/grafana-ml-app/home
              - generic [ref=e105]:
                - img [ref=e106]
                - paragraph [ref=e110]: AI & machine learning
            - 'button "Expand section: AI &amp; machine learning" [ref=e112] [cursor=pointer]':
              - img [ref=e113]
        - listitem [ref=e115]:
          - generic [ref=e116]:
            - link "Testing & synthetics" [ref=e119] [cursor=pointer]:
              - /url: /testing-and-synthetics
              - generic [ref=e121]:
                - img [ref=e122]
                - paragraph [ref=e126]: Testing & synthetics
            - 'button "Expand section: Testing &amp; synthetics" [ref=e128] [cursor=pointer]':
              - img [ref=e129]
        - listitem [ref=e131]:
          - generic [ref=e132]:
            - link "Observability" [ref=e135] [cursor=pointer]:
              - /url: /observability
              - generic [ref=e137]:
                - img [ref=e138]
                - paragraph [ref=e140]: Observability
            - 'button "Expand section: Observability" [ref=e142] [cursor=pointer]':
              - img [ref=e143]
        - listitem [ref=e145]:
          - generic [ref=e146]:
            - link "Administration" [ref=e149] [cursor=pointer]:
              - /url: /admin
              - generic [ref=e151]:
                - img [ref=e152]
                - paragraph [ref=e154]: Administration
            - 'button "Expand section: Administration" [ref=e156] [cursor=pointer]':
              - img [ref=e157]
  - banner [ref=e159]:
    - generic [ref=e160]:
      - navigation "Breadcrumbs" [ref=e162]:
        - list [ref=e163]:
          - listitem [ref=e164]:
            - link "Dashboards" [ref=e165] [cursor=pointer]:
              - /url: /dashboards
            - img [ref=e167]
          - listitem [ref=e169]:
            - link "Test" [ref=e170] [cursor=pointer]:
              - /url: /dashboards/f/aelokze2m6uwwa/test
            - img [ref=e172]
          - listitem [ref=e174]:
            - generic "stacking-groups" [ref=e175]
      - generic [ref=e176]:
        - generic [ref=e178]:
          - img [ref=e180]
          - button "Search..." [ref=e182] [cursor=pointer]
          - generic [ref=e184]: ctrl+k
        - button "Help" [ref=e185] [cursor=pointer]:
          - img [ref=e186]
        - link "Sign in" [ref=e189] [cursor=pointer]:
          - /url: /login
  - main [ref=e192]:
    - log [ref=e193]
    - generic [ref=e196]:
      - generic [ref=e199]:
        - generic [ref=e200]:
          - generic [ref=e201]:
            - button "Move 30m backward" [ref=e202] [cursor=pointer]:
              - img [ref=e203]
            - 'button "Time range selected: Last 1 hour" [ref=e205] [cursor=pointer]':
              - img [ref=e206]
              - generic [ref=e209]:
                - generic [ref=e210]: Last 1 hour
                - generic [ref=e211]: UTC
              - img [ref=e212]
            - button "Move time range forwards" [ref=e214] [cursor=pointer]:
              - img [ref=e215]
            - button "Zoom out time range" [ref=e217] [cursor=pointer]:
              - img [ref=e218]
          - generic [ref=e220]:
            - button "Refresh" [ref=e221] [cursor=pointer]:
              - img [ref=e222]
              - generic [ref=e226]: Refresh
            - button "Auto refresh turned off. Choose refresh time interval" [ref=e227] [cursor=pointer]:
              - img [ref=e228]
        - generic [ref=e230]:
          - generic [ref=e231]:
            - button "Copy link" [ref=e232] [cursor=pointer]:
              - img [ref=e233]
            - button "Share" [ref=e235] [cursor=pointer]:
              - img [ref=e236]
          - button "Enter edit mode" [ref=e238] [cursor=pointer]:
            - img [ref=e239]
            - generic [ref=e241]: Edit
      - generic [ref=e242]:
        - region "New panel" [ref=e253]:
          - heading "New panel" [level=2] [ref=e256]
          - list [ref=e274]:
            - listitem [ref=e275]:
              - generic [ref=e277]:
                - button "Edit color for 10" [ref=e278] [cursor=pointer]
                - button "All series selected" [ref=e279] [cursor=pointer]: "10"
            - listitem [ref=e280]:
              - generic [ref=e282]:
                - button "Edit color for 5" [ref=e283] [cursor=pointer]
                - button "All series selected" [ref=e284] [cursor=pointer]: "5"
            - listitem [ref=e285]:
              - generic [ref=e287]:
                - button "Edit color for 4" [ref=e288] [cursor=pointer]
                - button "All series selected" [ref=e289] [cursor=pointer]: "4"
            - listitem [ref=e290]:
              - generic [ref=e292]:
                - button "Edit color for 8" [ref=e293] [cursor=pointer]
                - button "All series selected" [ref=e294] [cursor=pointer]: "8"
        - generic [ref=e298]:
          - button "Export" [ref=e299] [cursor=pointer]:
            - img [ref=e301]
          - button "Outline" [ref=e303] [cursor=pointer]:
            - img [ref=e305]
          - button "Hide" [ref=e308] [cursor=pointer]:
            - img [ref=e310]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { GrafanaDashboardPage } from './pageObject/GrafanaDashboardPage';
  3  | 
  4  | test('Grafana dashboard validation', async ({ page }) => {
  5  | 
  6  |     const dashboard = new GrafanaDashboardPage(page);
  7  | 
  8  |     await dashboard.navigateToDashboard();
  9  | 
  10 |     await expect(page).toHaveTitle(/stacking-groups - Test - Dashboards - Grafana/i);
  11 |     await expect(dashboard.graphpanel).toBeVisible();
  12 |     await expect(dashboard.timepicker).toBeVisible();
  13 |     await expect(dashboard.sidebar).toBeVisible();
  14 |     
  15 | 
  16 |     //await expect(dashboard.sidebar).toBeVisible();
  17 |     //await expect(dashboard.timepicker).toBeVisible();
  18 |     //ait expect(dashboard.graphpanel).toBeVisible();
  19 | });
  20 | 
  21 | test('Grafana dashboard updates', async ({ page }) => {
  22 | 
  23 |     const dashboard = new GrafanaDashboardPage(page);
  24 |     const startTime = Date.now();
  25 |     await dashboard.navigateToDashboard();
  26 | 
  27 |     const graphPanelSnapshot = await dashboard.graphpanel.ariaSnapshot();
  28 |     dashboard.graphpanel.screenshot({ path: 'graphpanel.png' });
  29 |     dashboard.timepicker.click();
  30 |     await page.getByText('Last 30 minutes').click();
  31 |     dashboard.graphpanel.screenshot({ path: 'graphpanel-qualified.png' });
  32 | 
  33 |     expect('graphpanel.png').not.toMatchSnapshot('graphpanel-qualified.png', {
  34 |         threshold: 0.1, // Allow 10% difference
  35 |     });
  36 | 
  37 |     const loadTime = Date.now() - startTime;
  38 |     console.log(`Dashboard load time: ${loadTime} ms`);
  39 | 
  40 | });
  41 | 
  42 | test('Grafana dashboard load time', async ({ page, context }) => {
  43 | 
  44 |     const dashboard = new GrafanaDashboardPage(page);     
  45 |     await dashboard.navigateToDashboard();
  46 | 
  47 |     const dashboardUrl = page.url();
  48 |     page.screenshot({ path: 'dashboard-full.png', fullPage: true });
  49 | 
  50 |     const newPage = await context.newPage();
  51 |     await newPage.goto(dashboardUrl);
  52 |     await newPage.waitForLoadState('networkidle');
  53 | 
> 54 |     await expect(newPage).toHaveScreenshot(
     |     ^ Error: A snapshot doesn't exist at C:\Vivek\Automation\GrafanaTest\tests\grafanaDashboard.test.ts-snapshots\dashboard-full-win32.png, writing actual.
  55 |         'dashboard-full.png',
  56 |         {
  57 |             fullPage: true,
  58 |             maxDiffPixelRatio: 0.05
  59 |         }
  60 |     );
  61 |     
  62 | });
  63 | 
  64 | 
```