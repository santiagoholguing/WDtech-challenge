import { loginPage } from '../test-pages/loginPage.js';
import { signUpPage } from '../test-pages/signUpPage.js';

export async function loginWithDefaultCredentials(page, email, password) {
  const LoginPage = new loginPage(page);
  await LoginPage.fillEmail(email);
  await LoginPage.fillPassword(password);
  await LoginPage.clickSignInButton();
}


export async function signUpWithDefaultCredentials(page, firstName, lastName, email, password) {
  const SignUpPage = new signUpPage(page);
  await SignUpPage.fillFirstName(firstName);
  await SignUpPage.fillLastName(lastName);
  await SignUpPage.fillEmail(email);
  await SignUpPage.fillPassword(password);
  await SignUpPage.clickTermsOfUseCheckbox();
  await SignUpPage.clickSignUpProcessButton();

}






