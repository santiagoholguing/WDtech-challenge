export class LoginPage {
  constructor(page) {
    this.page = page;
    this.LoginEmailfield = page.locator('[data-test="userEmail"]');
    this.Loginpasswordfield = page.locator('[data-test="userPassword"]');
    this.LoginSignInButton = page.locator('[data-test="signInButton"]');
    
  }
}