import { test, expect } from '@playwright/test';
import { LandingPage } from '../test-pages/LandingPage.js';
import { LoginPage } from '../test-pages/LoginPage.js';
import { MapPage } from '../test-pages/MapPage.js';

let landingPage;
let loginPage;
let mapPage;

test.beforeEach(async ({ page }) => {
  landingPage = new LandingPage(page);
  await landingPage.goToLandingPage();
  await landingPage.clickLandingLogginButton();
  loginPage = new LoginPage(page);
  await loginPage.loginWithDefaultCredentials('santiago.holguin@endava.com', 'Santi.164251');
  await landingPage.SearchforaPlace('miami');
  

});

test('click on map center and check data appears', async ({ page }) => { 
mapPage = new MapPage(page);
  await expect(mapPage.isMapVisible()).toBeTruthy();
   //const box = await mapPage.retrieveMap().boundingBox();
   //console.log(box);
  console.log(await mapPage.getMapWidth());
  console.log(await mapPage.getMapHeight());
});