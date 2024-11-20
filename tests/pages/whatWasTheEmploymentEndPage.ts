import { Page } from "playwright";
import axeTest from "../accesibilityTestHelper";
import { expect } from "@playwright/test";
import whatWasTheEmploymentEnd_content from "../content/whatWasTheEmploymentEndPage_content";

class WhatWasTheEmploymentEndPage {
  private readonly url: string;
  private readonly title: string;

  constructor() {
    this.url =
      "https://www.gov.uk/calculate-your-holiday-entitlement/y/irregular-hours-and-part-year/2024-01-01/shift-worker/starting-and-leaving/2024-04-01";
    this.title = `.govuk-fieldset__heading`;
  }

  async checkPageLoads(page: Page): Promise<void> {
    // Navigate to the landing page
    await page.goto(this.url);

    // Check elements of the page
    await Promise.all([
      expect(page.locator(this.title)).toContainText(
        whatWasTheEmploymentEnd_content.pageTitle
      ),
    ]);
    await axeTest(page);
  }

  async continueOn(page: Page): Promise<void> {
    await page.fill('input#response-0', '31'); 

// Fill the 'month' field
await page.fill('input#response-1', '10'); 

// Fill the 'year' field
await page.fill('input#response-2', '2024'); 

// Click the 'Continue' button
await page.getByRole("button", { name: "Continue" }).click();
}
}export default WhatWasTheEmploymentEndPage