const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");

/*****************************************************************************/
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

When("I click Save", async function () {
  let element = await this.driver.$("section .view-actions button");
  return await element.click();
});

Then("I should have a retry button", async function () {
  //const newTag = 'news';
  let element = await this.driver.$('[data-test-task-button-state="failure"]');
  return await element;
});

When("I enter a fake tag data {kraken-string}, {kraken-string}", async function (name, description) {
  const tagName = name;
  const tagDescription = description;
  await this.driver.$("#tag-name").setValue(tagName);
  await this.driver.$("#tag-description").setValue(tagDescription);
  return true;
});

When("I expand meta section", async function () {
  let element = await this.driver.$("section .gh-expandable .gh-expandable-block:first-child .gh-expandable-header button");  
  return await element.click();
});
/*****************************************************************************/

// tag con datos aleatorios validos
Then("I should have {kraken-string} on the list", async function (tagName) {
  let element = await this.driver.$(`a[href='#/tags/${tagName.toLowerCase()}/']`);
  return await element;
});

//tag con name invalido
When("I enter an invalid tag name", async function () {
  const tagName = faker.string.alpha(192);
  let element = await this.driver.$("#tag-name");
  return await element.setValue(tagName);
});

//tag con slug invalido
When("I enter an invalid slug", async function () {
  const tagSlug = faker.string.alpha(192);
  let element = await this.driver.$("#tag-slug");
  return await element.setValue(tagSlug);
});

//tag con color invalido
When("I enter an invalid color", async function () {
  let invalidColor = faker.color.human();
  let element = await this.driver.$(".input-color .gh-input");
  return await element.setValue(invalidColor);
});

//tag con descripcion invalido
When("I enter an invalid description", async function () {
  const tagDescription = faker.string.alpha(501);
  let element = await this.driver.$("#tag-description");
  return await element.setValue(tagDescription);
});

//tag con titulo de la seccion meta invalido
When("I enter the invalid meta title", async function () {
  let element = await this.driver.$("#meta-title"); 
  const invalidMetaTitle = faker.string.alpha(301);
  return await element.setValue(invalidMetaTitle);
});

//tag con descripcion de la seccion meta invalido
When("I enter the invalid meta description", async function () {
  let element = await this.driver.$("#meta-description"); 
  const invalidMetaUrl =  faker.string.alpha(501);
  return await element.setValue(invalidMetaUrl);
});

