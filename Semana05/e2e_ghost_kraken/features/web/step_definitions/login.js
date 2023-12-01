const { Given, When, Then } = require("@cucumber/cucumber");


  /////////////////////////////////
 /* Pruebas de login con kraken */
////////////////////////////////

When("I enter login email {kraken-string}", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter the password {kraken-string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I submit login", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});

When("I login to ghost {kraken-string} {kraken-string}", async function (email, password) {
  let tagEmail = await this.driver.$("#identification");
  await tagEmail.setValue(email);
  let tagPassword = await this.driver.$("#password");
  await tagPassword.setValue(password);
  let element = await this.driver.$("#ember5");
  return await element.click();
});

Then("I should be logged", async function () {
  let element = await this.driver.$("header.gh-nav-menu");
  return await element;
});
