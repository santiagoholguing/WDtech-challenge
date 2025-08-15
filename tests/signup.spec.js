// @ts-check
import { test, expect } from '@playwright/test';
import { LandingPage } from '../test-pages/LandingPage.js';
import { SignUpPage } from '../test-pages/SignUpPage.js';
import { LoginPage } from '../test-pages/LoginPage.js';


let landingPage;
let signUpPage;


test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page);
  await landingPage.goToLandingPage();
});

test('Sign-up process with mail', async ({ page }) => {
   
  await landingPage.clickLandingSignUpButton();
  signUpPage = new SignUpPage(page);
  await signUpPage.signUpWithDefaultCredentials('santi', 'holguin giraldo', 'santiago.holguin@endava.com', 'Santi.164251');

});

test('Log-in process with mail', async ({ page }) => {
  await landingPage.clickLandingLogginButton();
  let loginPage = new LoginPage(page);
  await loginPage.loginWithDefaultCredentials('santiago.holguin@endava.com', 'Santi.164251');

});

