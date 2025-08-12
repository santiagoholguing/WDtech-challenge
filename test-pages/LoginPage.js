export class LoginPage {
  constructor(page) {
    this.page = page;
    this.LoginEmailfield = page.locator('[data-test="userEmail"]');
    this.Loginpasswordfield = page.locator('[data-test="userPassword"]');
    this.LoginSignInButton = page.locator('[data-test="signInButton"]');
    
  }
   async fillEmail(email) {
    await this.LoginEmailfield.fill(email);
  }

  async fillPassword(password) {
    await this.Loginpasswordfield.fill(password);
  }

  async clickSignInButton() {
    await this.LoginSignInButton.click();
  }

   async loginWithDefaultCredentials(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickSignInButton();
  }
}