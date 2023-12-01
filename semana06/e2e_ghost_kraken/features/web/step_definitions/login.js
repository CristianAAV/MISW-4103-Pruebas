const { Given, When, Then } = require("@cucumber/cucumber");
const { ScreenshotV4,ScreenshotV5 } = require("./screenshot.js");

  /////////////////////////////////
 /* Pruebas de login con kraken */
////////////////////////////////

When("I enter login email {kraken-string}", async function (email) {
  let element = await this.driver.$('input[name="identification"]');
  return await element.setValue(email);
  });

When("I enter the password {kraken-string}", async function (password) {
  let element = await this.driver.$('input[name="password"]');
  await element.setValue(password);
});

When("I submit login", async function () {
  let element = await this.driver.$(".login.gh-btn.gh-btn-login");
  return await element.click();
});

When("I login to ghost {kraken-string} {kraken-string}", async function (email, password) {
  let tagEmail = await this.driver.$('input[name="identification"]');
  await tagEmail.setValue(email);
  let tagPassword = await this.driver.$('input[name="password"]');  
  await tagPassword.setValue(password);
  let element = await this.driver.$('button[type="submit"]');
  return await element.click();
});

Then("I should be logged", async function () {
  let element = await this.driver.$("header.gh-nav-menu");
  return await element;
});

Then ("I screenshotV5 {kraken-string} {kraken-string}", async function (scenario,step) {
  await ScreenshotV5(this.driver, scenario, step);
});

Then ("I screenshotV4 {kraken-string} {kraken-string}", async function (scenario,step) {
  await ScreenshotV4(this.driver, scenario, step);
});

