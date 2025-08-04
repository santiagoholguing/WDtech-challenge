
export class LandingPage {
  constructor(page) {
    this.page = page;
    this.signUpHeaderButton= page.locator('[data-test="signup-button"]');
    this.firstNameField= page.locator('[data-test="userFirstname"]');
    this.lastNameField = page.locator('[data-test="userLastname"]');
    this.Emailfield = page.locator('[data-test="userEmail"]');
    this.passwordfield = page.locator('[data-test="userPassword"]');
    this.termsOfUseCheckbox = page.locator('[data-test="termsAndPrivacyCheckbox"]');
    this.signUpProcessButton = page.locator('[data-test="signUpButton"]');
    
  }

  async gotoLandingPage() {
    await this.page.goto('https://suite.walkerdunlop.com/');
  }
}