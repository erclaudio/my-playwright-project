import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accesibilityTestHelper';
import doYouWantToWorkOut_content from '../content/doYouWantToWorkOut_content';

class DoYouWantToWorkOutPage {
    private readonly url: string;
    private readonly title: string;
    private readonly radios: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2024-01-01/annualised-hours';
        this.title = `.govuk-fieldset__heading`
        this.radios= `.govuk-radios`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto(this.url);

        // Check elements of the page
        await Promise.all([
    expect(page.locator(this.radios)).toContainText(doYouWantToWorkOut_content.radio0),
    expect(page.locator(this.radios)).toContainText(doYouWantToWorkOut_content.radio1),
    expect(page.locator(this.radios)).toContainText(doYouWantToWorkOut_content.radio2),
    expect(page.locator(this.radios)).toContainText(doYouWantToWorkOut_content.radio3),
    
    // indentation scuffed above.
        ]);
        await axeTest(page)
    }

    
    async continueOn(page: Page): Promise<void> {
        
        await page.getByRole("radio", { name: "for a full leave year" }).click();
        await page.getByRole("button", { name: "Continue" }).click();
    }
    async continueOn2(page: Page): Promise<void> {
        
        await page.getByRole("radio", { name: "for someone starting and leaving part way through a leave year" }).click();
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default DoYouWantToWorkOutPage;