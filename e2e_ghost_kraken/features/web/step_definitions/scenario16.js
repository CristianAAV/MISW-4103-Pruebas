const { Given, When, Then } = require("@cucumber/cucumber");


  /////////////////////////////////
 /* Pruebas de login con kraken */
////////////////////////////////





  ///////////////////////////////////////////
 /* Pruebas de login con kraken - Members - Escenario 15  */
///////////////////////////////////////////

When("I select the members section", async function () {
  let element = await this.driver.$('a[href="#/members/"]');
  return await element.click();
});

Then("I should have a new members button", async function () {
  let element = await this.driver.$("a[href='#/members/new/']");
  return await element;
});

When("I click on the new members button", async function () {
  let element = await this.driver.$("a[href='#/members/new/");
  return await element.click();
});

Then("I should have a form to enter members information", async function () {
  let element = await this.driver.$("form.member-basic-info-form");
  return await element;
});

When("I enter member Email", async function () {
  let randomEmail = 'newsmember@uniandes.edu.co';
  let element = await this.driver.$("#member-email");
  return await element.setValue(randomEmail);
});

When("I enter member name", async function () {
  const randomName = "new members";
  let element = await this.driver.$("#member-name");
  return await element.setValue(randomName);
});

When("I click Save members", async function () {
  let element = await this.driver.$("section.view-actions button");
  return await element.click();
});

Then("I should have a new members on the list", async function () {
  let element = await this.driver.$("a[href='#/members/']");
  return await element;
});
