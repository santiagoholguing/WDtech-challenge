// @ts-check
import { test, expect } from '@playwright/test';
import { LandingPage } from '../test-pages/landingPage.js';

test('sign up process with mail', async ({ page }) => {
  const landingPage = new LandingPage(page);
  await landingPage.gotoLandingPage();
  await landingPage.signUpHeaderButton.click();
  await landingPage.firstNameField.fill('santi');
  await landingPage.lastNameField.fill('holguin giraldo');
  await landingPage.Emailfield.fill('santiago.holguin@endava.com');
  await landingPage.passwordfield.fill('Sant.holguin1234');
  await landingPage.termsOfUseCheckbox.click();
  await landingPage.signUpProcessButton.click();

});
