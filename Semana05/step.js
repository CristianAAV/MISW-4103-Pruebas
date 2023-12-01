const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");

let tagName = '';
let newtagText = '';

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

When("I select the tags section", async function () {
  let element = await this.driver.$('a[href="#/tags/"]');
  return await element.click();
});

Then("I should have a new tag button", async function () {
  let element = await this.driver.$("a[href='#/tags/new/']");
  return await element;
});

When("I click on the new tag button", async function () {
  let element = await this.driver.$("a[href='#/tags/new/");
  return await element.click();
});

Then("I should have a form to enter tag information", async function () {
  let element = await this.driver.$("form.mb15");
  return await element;
});

When("I enter tag name", async function () {
  tagName = faker.string.alpha(10).toLowerCase();
  let element = await this.driver.$("#tag-name");
  return await element.setValue(tagName);
});

When("I enter an invalid color", async function () {
  let invalidColor = 'xxxxxx';
  let element = await this.driver.$(".input-color .gh-input");
  return await element.setValue(invalidColor);
});

When("I enter an invalid description", async function () {
  const tagDescription = faker.string.alpha(700);
  let element = await this.driver.$("#tag-description");
  return await element.setValue(tagDescription);
});

When("I enter tag descripton", async function () {
  const tagDescription = faker.string.alpha(100);
  let element = await this.driver.$("#tag-description");
  return await element.setValue(tagDescription);
});

When("I click Save", async function () {
  let element = await this.driver.$("section .view-actions button");
  return await element.click();
});

Then("I should have a new tag on the list", async function () {
  let element = await this.driver.$(`a[href='#/tags/${tagName}/']`);
  return await element;
});

Then("I should have a retry button", async function () {
  let element = await this.driver.$(`button .gh-btn-red`);
  return await element;
});

When("I select the created tag", async function () {
  let element = await this.driver.$(`a[href='#/tags/${tagName}/']`);
  return await element.click();
});

When("I modify the tittle of the created tag", async function () {
  newtagText =  `${tagName}_modificado`
  let element = await this.driver.$("#tag-name");
  return await element.setValue(newtagText);
});

Then("I should have the modified tag on the list", async function () {
  let element = await this.driver.$(`a[href='#/tags/${tagName}/']`);
  return await element;
});

When("I delete the tag", async function () {
  let element = await this.driver.$(`.gh-btn.gh-btn-red`);
  return await element.click();
});

Then("I confirm the delete operation", async function () {
  let element = await this.driver.$(`.modal-footer .gh-btn.gh-btn-red`);  
  return await element.click();
});