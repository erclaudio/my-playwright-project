import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accesibilityTestHelper';
import howManyHoursPerShift_content from '../content/howManyHoursPerShift_content';

class HowManyHoursPerShiftPage {
    private readonly url: string;
    private readonly title: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2024-01-01/shift-worker/starting-and-leaving/2024-04-01/2024-10-31';
        this.title = `.govuk-label-wrapper`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto(this.url);

        // Check elements of the page
        await Promise.all([
    expect(page.locator(this.title)).toContainText(howManyHoursPerShift_content.pageTitle)
        ]);
        await axeTest(page)
    }

    
    async continueOn(page: Page): Promise<void> {
        
        await page.fill('input#response', '6');
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default HowManyHoursPerShiftPage;