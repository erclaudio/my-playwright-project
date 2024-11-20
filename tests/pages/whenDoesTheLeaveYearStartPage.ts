import {Page} from 'playwright';
import {expect} from "@playwright/test";
import axeTest from '../accesibilityTestHelper';
import whenDoesTheLeaveYearStart_content from '../content/whenDoesTheLeaveYearStart_content';

class WhenDoesTheLeaveYearStartPage{
    private readonly url: string;
    private readonly title: string;
    private readonly text: string;
    private readonly form: string;

    constructor() {
        this.url = 'https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year';
        this.title = `.govuk-fieldset__heading`;
        this.text = `.gem-c-hint`;
        this.form = `.gem-c-date-input`;
    }

    async checkPageLoads(page: Page): Promise<void> {
        // Navigate to the landing page
        await page.goto(this.url);

        // Check elements of the page
        await Promise.all([
            expect(page.locator(this.title)).toContainText(whenDoesTheLeaveYearStart_content.pTitle),
            expect(page.locator(this.text)).toContainText(whenDoesTheLeaveYearStart_content.pText1),
            expect(page.locator(this.form)).toContainText(whenDoesTheLeaveYearStart_content.formDay),
            expect(page.locator(this.form)).toContainText(whenDoesTheLeaveYearStart_content.formMonth),
            expect(page.locator(this.form)).toContainText(whenDoesTheLeaveYearStart_content.formYear),
        ]);
        await axeTest(page)
    }
    async continueOn(page: Page): Promise<void> {
        await page.fill('input#response-0', '1'); // Assuming the 'day' field has id 'response-0'

    // Fill the 'month' field
    await page.fill('input#response-1', '1'); // Assuming the 'month' field has id 'response-1'

    // Fill the 'year' field
    await page.fill('input#response-2', '2024'); // Assuming the 'year' field has id 'response-2'

    // Click the 'Continue' button
    await page.getByRole("button", { name: "Continue" }).click();
}


}
export default WhenDoesTheLeaveYearStartPage