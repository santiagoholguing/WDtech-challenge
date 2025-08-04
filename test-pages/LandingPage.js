
export class LandingPage {
  constructor(page) {
    this.page = page;
    this.LandingLogginButton= page.locator('[data-test="login-button"]');
    this.LandingSignUpButton = page.locator('[data-test="signup-button"]');

    
  }

  async gotoLandingPage() {
    await this.page.goto('https://suite.walkerdunlop.com/');
  }
}