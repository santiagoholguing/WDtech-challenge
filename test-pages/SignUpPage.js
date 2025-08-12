
export class SignUpPage {
  constructor(page) {
    this.page = page;
    this.firstNameField= page.locator('[data-test="userFirstname"]');
    this.lastNameField = page.locator('[data-test="userLastname"]');
    this.emailfield = page.locator('[data-test="userEmail"]');
    this.passwordfield = page.locator('[data-test="userPassword"]');
    this.termsOfUseCheckbox = page.locator('[data-test="termsAndPrivacyCheckbox"]');
    this.signUpProcessButton = page.locator('[data-test="signUpButton"]');
    this.VerificationHeaderMessage = page.locator('[data-test="verifyDialogHeader"]');

  }

  async fillFirstName(firstName) {
    await this.firstNameField.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastNameField.fill(lastName);
  }

  async fillEmail(email) {
    await this.emailfield.fill(email);
  }

  async fillPassword(password) {
    await this.passwordfield.fill(password);
  }

  async clickTermsOfUseCheckbox() {
    await this.termsOfUseCheckbox.check();
  }

  async clickSignUpProcessButton() {
    await this.signUpProcessButton.click();
  }

  async  signUpWithDefaultCredentials(firstName, lastName, email, password) {
  await this.fillFirstName(firstName);
  await this.fillLastName(lastName);
  await this.fillEmail(email);
  await this.fillPassword(password);
  await this.clickTermsOfUseCheckbox();
  await this.clickSignUpProcessButton();

}
}