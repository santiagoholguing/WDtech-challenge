// @ts-check
import { test, expect } from '@playwright/test';
import { LandingPage } from '../test-pages/LandingPage.js';
import { loginWithDefaultCredentials } from '../test-helpers/Commands.js';
import { signUpWithDefaultCredentials } from '../test-helpers/Commands.js';


test('sign-up process with mail', async ({ page }) => {
  const landingPage = new LandingPage(page);
  await landingPage.gotoLandingPage();
  await landingPage.LandingSignUpButton.click();
  await signUpWithDefaultCredentials(page,'santi', 'holguin giraldo', 'santiago.holguin@endava.com', 'Santi.164251');

});

test('log-in process with mail', async ({ page }) => {
  const landingPage = new LandingPage(page);
  await landingPage.gotoLandingPage();
  await landingPage.LandingLogginButton.click();
  await loginWithDefaultCredentials(page, 'santiago.holguin@endava.com', 'Santi.164251');

});

