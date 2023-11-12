const { Given, When, Then } = require("@cucumber/cucumber");

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

// Pruebas POST
When("I select the posts section", async function () {
  let element = await this.driver.$('a[href="#/posts/"]');
  return await element.click();
});

Then("I should have a new post button", async function () {
  let element = await this.driver.$("a[href='#/editor/post/']");
  return await element;
});

When("I click on the new post button", async function () {
  let element = await this.driver.$("a[href='#/editor/post/']");
  return await element.click();
});

Then("I should have a title to enter post information", async function () {
  let element = await this.driver.$(".gh-editor-title");
  return await element;
});

When("I enter post name", async function () {
  let randomName = 'news';
  let element = await this.driver.$(".gh-editor-title");
  return await element.setValue(randomName);
});

When("I click post descripton", async function () {
  let element = await this.driver.$(".kg-prose");
  return await element.click();
});

When("I click Publish", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger");
  return await element.click();
});

When("I click final review", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-black.gh-btn-large");
  return await element.click();
});

When("I click publish post", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view");
  return await element.click();
});

Then("I should have a new post on the list", async function () {
  const newPost = 'news';
  let element = await this.driver.$(`a[href="#/posts/${newPost}/']`);
  return await element;
});

When("I click edit post", async function () {
  let element = await this.driver.$("button.gh-btn-editor.gh-publish-back-button");
  return await element.click();
});

When("I enter post descripton", async function () {
  const randomDescription = "post description";
  let element = await this.driver.$(".kg-prose");
  return await element.setValue(randomDescription);
});

Then("I shouldnt have a title to enter post information", async function () {
  let element = await this.driver.$(".gh-editor-title");
  return await element.click();
});

When("I click Preview", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-editor.gh-editor-preview-trigger");
  return await element.click();
});