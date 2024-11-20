import {expect, test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import CalculateYourEntitlementPage from "./pages/calculateYourEntitlementPage";
import WhenDoesTheLeaveYearStartPage from "./pages/whenDoesTheLeaveYearStartPage";
import HolidayEntitlementBasedOnPage from "./pages/holidayEntitlementBasedOnPage";
import DoYouWantToWorkOutPage from "./pages/doYouWantToWorkOutPage";
import WhatWasTheEmploymentStartPage from "./pages/whatWasTheEmploymentStartPage";
import WhatWasTheEmploymentEndPage from "./pages/whatWasTheEmploymentEndPage";
import HowManyHoursPerShiftPage from "./pages/howManyHoursPerShiftPage";
import HowManyShiftsWillBeWorkedPage from "./pages/howManyShiftsWillBeWorkedPage";
import HowManyDaysPerPatternPage from "./pages/howManyDaysPerPatternPage";


test('Test holiday entitlement with irregular hours, 2024 leave year, annualised hours, for a full leave year', async ({ page }) => {
    const landingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const calculateYourEntitlementPage = new CalculateYourEntitlementPage();
    await calculateYourEntitlementPage.checkPageLoads(page);
    await calculateYourEntitlementPage.continueOn(page);
    const whenDoesTheLeaveYearStartPage = new WhenDoesTheLeaveYearStartPage();
    await whenDoesTheLeaveYearStartPage.checkPageLoads(page);
    await whenDoesTheLeaveYearStartPage.continueOn(page);
    const holidayEntitlementBasedOnPage = new HolidayEntitlementBasedOnPage();
    await holidayEntitlementBasedOnPage.checkPageLoads(page);
    await holidayEntitlementBasedOnPage.continueOn(page);
    const doYouWantToWorkOutPage = new DoYouWantToWorkOutPage();
    await doYouWantToWorkOutPage.checkPageLoads(page);
    await doYouWantToWorkOutPage.continueOn(page);
    // await page.screenshot({ path: `screenshots/first-test.png` });
    
    
});

test('Test holiday entitlement with irregular hours, 2024 leave year, based on shifts, for someone starting and leaving part way through a leave year, start 01/04/2024, end 31/10/2024, 6 hours per shift, 10 shifts per pattern, 15 days per pattern', async ({ page }) => {
    const landingPage = new LandingPage();
    await landingPage.checkPageLoads(page);
    await landingPage.continueOn(page);
    const calculateYourEntitlementPage = new CalculateYourEntitlementPage();
    await calculateYourEntitlementPage.checkPageLoads(page);
    await calculateYourEntitlementPage.continueOn(page);
    const whenDoesTheLeaveYearStartPage = new WhenDoesTheLeaveYearStartPage();
    await whenDoesTheLeaveYearStartPage.checkPageLoads(page);
    await whenDoesTheLeaveYearStartPage.continueOn(page);
    const holidayEntitlementBasedOnPage = new HolidayEntitlementBasedOnPage();
    await holidayEntitlementBasedOnPage.checkPageLoads(page);
    await holidayEntitlementBasedOnPage.continueOn2(page);
    const doYouWantToWorkOutPage = new DoYouWantToWorkOutPage();
    await doYouWantToWorkOutPage.checkPageLoads(page);
    await doYouWantToWorkOutPage.continueOn2(page);
    const whatWasTheEmploymentStartPage = new WhatWasTheEmploymentStartPage();
    await whatWasTheEmploymentStartPage.checkPageLoads(page);
    await whatWasTheEmploymentStartPage.continueOn(page);
    const whatWasTheEmploymentEndPage = new WhatWasTheEmploymentEndPage();
    await whatWasTheEmploymentEndPage.checkPageLoads(page);
    await whatWasTheEmploymentEndPage.continueOn(page);
    const howManyHoursPerShiftPage = new HowManyHoursPerShiftPage();
    await howManyHoursPerShiftPage.checkPageLoads(page);
    await howManyHoursPerShiftPage.continueOn(page);
    const howManyShiftsWillBeWorkedPage = new HowManyShiftsWillBeWorkedPage();
    await howManyShiftsWillBeWorkedPage.checkPageLoads(page);
    await howManyShiftsWillBeWorkedPage.continueOn(page);
    const howManyDaysPerPatternPage = new HowManyDaysPerPatternPage();
    await howManyDaysPerPatternPage.checkPageLoads(page);
    await howManyDaysPerPatternPage.continueOn(page);



    // await page.screenshot({ path: `screenshots/first-test.png` });
    
    
});