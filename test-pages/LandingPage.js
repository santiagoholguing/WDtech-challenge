
export class landingPage {
  
  constructor(page) {
    this.page = page;
    this.landingLogginButton= page.locator('[data-test="login-button"]');
    this.landingSignUpButton = page.locator('[data-test="signup-button"]');
  }

  async clickLandingLogginButton() {
    await this.landingLogginButton.click();
  }
  async clickLandingSignUpButton() {
    await this.landingSignUpButton.click();
  }

  async goToLandingPage() {
    await this.page.goto('https://suite.walkerdunlop.com/');
  }
}