import { LoginPage } from '../test-pages/LoginPage.js';
import { SignUpPage } from '../test-pages/SignUpPage.js';

export async function loginWithDefaultCredentials(page, email, password) {
  const loginPage = new LoginPage(page);
  
  await loginPage.LoginEmailfield.fill(email);
  await loginPage.Loginpasswordfield.fill(password);
  await loginPage.LoginSignInButton.click();
}


export async function signUpWithDefaultCredentials(page, firstName, lastName,email, password) {
  const signUpPage = new SignUpPage(page);
  await signUpPage.firstNameField.fill(firstName);
  await signUpPage.lastNameField.fill(lastName);
  await signUpPage.Emailfield.fill(email);
  await signUpPage.passwordfield.fill(password);
  await signUpPage.termsOfUseCheckbox.click();
  await signUpPage.signUpProcessButton.click();

}






