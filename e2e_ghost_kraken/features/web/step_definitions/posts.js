const { Given, When, Then } = require("@cucumber/cucumber");

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