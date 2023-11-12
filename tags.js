const { Given, When, Then } = require("@cucumber/cucumber");


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
  let randomName = 'news';
  let element = await this.driver.$("#tag-name");
  return await element.setValue(randomName);
});

When("I enter tag descripton", async function () {
  const randomDescription = "tag description";
  let element = await this.driver.$("#tag-description");
  return await element.setValue(randomDescription);
});

When("I click Save", async function () {
  let element = await this.driver.$("section .view-actions button");
  return await element.click();
});

Then("I should have a new tag on the list", async function () {
  const newTag = 'news';
  let element = await this.driver.$(`a[href='#/tags/${newTag}/']`);
  return await element;
});

Then("I should have a retry button", async function () {
  const newTag = 'news';
  let element = await this.driver.$('[data-test-task-button-state="failure"]');
  return await element;
});