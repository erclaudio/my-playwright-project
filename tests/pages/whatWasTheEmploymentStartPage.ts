import {Page} from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accesibilityTestHelper';
import whatWasTheEmploymentStartPage_content from '../content/whatWasTheEmploymentStartPage_content';

class WhatWasTheEmploymentStartPage{
    private readonly url: string;
    private readonly title: string;
    private readonly form: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2024-01-01/shift-worker/starting-and-leaving';
        this.title = `.govuk-fieldset__heading`;
        this.form = `.gem-c-date-input`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto(this.url);

        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(whatWasTheEmploymentStartPage_content.pageTitle),            
        ]);
        await axeTest(page)
    }
    async continueOn(page: Page): Promise<void> {
        await page.fill('input#response-0', '1'); 

    // Fill the 'month' field
    await page.fill('input#response-1', '4'); 

    // Fill the 'year' field
    await page.fill('input#response-2', '2024'); 

    // Click the 'Continue' button
    await page.getByRole("button", { name: "Continue" }).click();
}


}
export default WhatWasTheEmploymentStartPage