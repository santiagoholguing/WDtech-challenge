// @ts-check
import { test, expect } from '@playwright/test';
import { landingPage } from '../test-pages/landingPage.js';
import { loginWithDefaultCredentials } from '../test-helpers/Commands.js';
import { signUpWithDefaultCredentials } from '../test-helpers/Commands.js';


test('sign-up process with mail', async ({ page }) => {
  const LandingPage = new landingPage(page);
  await LandingPage.goToLandingPage();
  await LandingPage.clickLandingSignUpButton();
  await signUpWithDefaultCredentials(page, 'santi', 'holguin giraldo', 'santiago.holguin@endava.com', 'Santi.164251');
  

});

test('log-in process with mail', async ({ page }) => {
  const LandingPage = new landingPage(page);
  await LandingPage.goToLandingPage();
  await LandingPage.clickLandingLogginButton();
  await loginWithDefaultCredentials(page, 'santiago.holguin@endava.com', 'Santi.164251');

});

