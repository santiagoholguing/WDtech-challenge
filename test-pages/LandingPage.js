import { expect } from "@playwright/test";

export class LandingPage {

  constructor(page) {
    this.page = page;
    this.landingLogginButton= page.locator('[data-test="login-button"]');
    this.landingSignUpButton = page.locator('[data-test="signup-button"]');
    this.searchBarInput = page.locator('[data-test="searchInput"]');
    this.firstListOption = page.locator('[data-test="propertyItem"]');
  }
  

  async clickLandingLogginButton() {
    await this.landingLogginButton.click();
  }

  async clickLandingSignUpButton() {
    await this.landingSignUpButton.click();
  }

  async SearchforaPlace(place) {
    await expect(this.searchBarInput).toBeVisible();
    await expect(this.searchBarInput).toBeEnabled();  
    await this.searchBarInput.click();
    await this.searchBarInput.type(place);
    (this.firstListOption.isVisible()) ? await this.firstListOption.first().click() : console.log('there is no elements to select');
  }



  async goToLandingPage() {
    await this.page.goto('https://suite.walkerdunlop.com/');
  }


}