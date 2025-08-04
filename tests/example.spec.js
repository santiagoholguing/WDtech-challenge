// @ts-check
import { test, expect } from '@playwright/test';



test('sign up process with mail', async ({ page }) => {
  await page.goto('https://suite.walkerdunlop.com/');
  await page.locator('[data-test="signup-button"]').click();
  await page.fill('[data-test="userFirstname"]',"santi")
  await page.fill('[data-test="userLastname"]',"holguin giraldo")
  await page.fill('[data-test="userEmail"]',"santiago.holguin@endava.com")
  await page.fill('[data-test="userPassword"]',"santiago.123456789")
  await page.locator('[data-test="termsAndPrivacyCheckbox"]').click();
  await page.locator('[data-test="signUpButton"]').click();

});
