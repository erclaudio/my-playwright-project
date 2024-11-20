import {Page} from 'playwright';
import axeTest from '../accesibilityTestHelper';
import holidayEntitlementbasedOn_content from '../content/holidayEntitlementBasedOn_content';
import {expect} from "@playwright/test";


class HolidayEntitlementBasedOnPage{
    private readonly url: string;
    private readonly title: string;
    private readonly text: string;
    private readonly radios: string;
    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2024-01-01';
        this.title = `.govuk-fieldset__heading`
        this.text = `.gem-c-hint`
        this.radios = `.govuk-radios`
    }
    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto(this.url);

        // Check elements of the page
        await Promise.all([
    expect(page.locator(this.title)).toContainText(holidayEntitlementbasedOn_content.pageTitle),
    expect(page.locator(this.text)).toContainText(holidayEntitlementbasedOn_content.pText1),
    expect(page.locator(this.radios)).toContainText(holidayEntitlementbasedOn_content.radio0),
    expect(page.locator(this.radios)).toContainText(holidayEntitlementbasedOn_content.radio1),
    // indentation scuffed above.
        ]);
        await axeTest(page)
    }
    async continueOn(page: Page): Promise<void> {
        // Click the 'Continue' button
        await page.getByRole ("radio", { name: "annualised hours" }).click(); 
        await page.getByRole("button", { name: "Continue" }).click();
    }
    async continueOn2(page: Page): Promise<void> {
        // Click the 'Continue' button
        await page.getByRole ("radio", { name: "shifts" }).click(); 
        await page.getByRole("button", { name: "Continue" }).click();
    }
} 
export default HolidayEntitlementBasedOnPage;