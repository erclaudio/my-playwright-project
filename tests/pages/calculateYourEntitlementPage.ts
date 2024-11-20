import { Page } from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accesibilityTestHelper';
import calculateYourEntitlementPage_content from '../content/calculateYourEntitlementPage_content';

class CalculateYourEntitlementPage {
    private readonly url: string;
    private readonly title: string;
    private readonly text: string;
    private readonly text2: string;
    private readonly subText: string;
    private readonly radios: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y';
        this.title = `.govuk-fieldset__heading`
        this.text = `.gem-c-hint`
        this.text2 = `.govuk-hint`
        this.subText = `.govuk-caption-l`
        this.radios= `.govuk-radios`
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto(this.url);

        // Check elements of the page
        await Promise.all([
    expect(page.locator(this.title)).toContainText(calculateYourEntitlementPage_content.pageTitle),
    expect(page.locator(this.subText)).toContainText(calculateYourEntitlementPage_content.subText),
    expect(page.locator(this.text2)).toContainText(calculateYourEntitlementPage_content.pText2),
    expect(page.locator(this.radios)).toContainText(calculateYourEntitlementPage_content.radio1),
    expect(page.locator(this.radios)).toContainText(calculateYourEntitlementPage_content.radio2),
    // indentation scuffed above.
        ]);
        await axeTest(page)
    }

    
    async continueOn(page: Page): Promise<void> {
        
        //await page.getByLabel("response-0").check();
        //await page.getByRole("radio", { name: "response-0" }).check();
        await page.getByRole ("radio", { name: "Yes" }).click();
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default CalculateYourEntitlementPage;