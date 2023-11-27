const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");

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

/********************************************************************/

When("I click post descripton 1", async function () {
  let element = await this.driver.$(".koenig-editor__editor-wrapper");
  return await element.click();
});

When("I click Publish 1", async function () {
  let element = await this.driver.$('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger');
  return await element.click();
});


When("I click Publish preview", async function () {
  let element = await this.driver.$('.gh-publishmenu .gh-btn-editor.green');
  return await element.click();
});


When("I click Publish 2", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view");
  return await element.click();
});

When("I click publish post 1", async function () {
  let element = await this.driver.$("button.gh-btn.gh-btn-black.gh-btn-icon.ember-view");
  return await element.click();
});


When("I click update", async function () {
  let element = await this.driver.$("div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.green.gh-publishmenu-trigger");
  return await element.click();
});

When("I click update 1", async function () {
  let element = await this.driver.$('.gh-publishmenu-footer .gh-publishmenu-button');
  return await element.click();
});

When("I enter post descripton 1", async function () {
  const randomDescription = "post description";
  let element = await this.driver.$(".koenig-editor__editor-wrapper");
  return await element.setValue(randomDescription);
});

When("I click Preview 1", async function () {
  let element = await this.driver.$("button.gh-btn.gh-editor-preview-trigger");
  return await element.click();
});

/***************************************************************/
//Title valido
When("I enter post name2", async function () {
    const postTitle = faker.string.alpha(15);
    let element = await this.driver.$(".gh-editor-title");
    return await element.setValue(postTitle);
  });

When("I enter post descripton2", async function () {
  const postDescription = faker.string.alpha(150);
  let element = await this.driver.$(".kg-prose");
  return await element.setValue(postDescription);
});

When("I click setting", async function () {
    let element = await this.driver.$("button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon");
    return await element.click();
});

When("I click remove autor", async function () {
    let element = await this.driver.$(".ember-power-select-multiple-remove-btn");
    return await element.click();
});

When("I enter autor", async function () {
  const postAutor = faker.string.alpha(10);
  let element = await this.driver.$("#author-list");
  return await element.setValue(postAutor);
});

Then("I should have author error", async function () {
    let element = await this.driver.$(".gh-alert");
    return await element;
  });
  
When("I enter post name3", async function () {
    const postTitle2 = faker.string.alpha(257);
    let element = await this.driver.$(".gh-editor-title");
    return await element.setValue(postTitle2);
  });

When("I click tag", async function () {
  let element = await this.driver.$("#tag-input");
  return await element.click();
});

When("I enter tag", async function () {
    const postTag = faker.string.alpha(15);
    let element = await this.driver.$("#tag-input");
    return await element.setValue(postTag);
  });

When("I enter date", async function () {
    const postDate = faker.string.alpha(15);
    let element = await this.driver.$(".gh-date-time-picker-date ");
    return await element.setValue(postDate);
  });

When("I click date", async function () {
    let element = await this.driver.$(".gh-date-time-picker-date ");
    return await element.click();
  });

When("I click hour", async function () {
    let element = await this.driver.$(".gh-date-time-picker-time ");
    return await element.click();
  });

When("I enter hour", async function () {
  const postDate = faker.string.alpha(10);
  let element = await this.driver.$(".gh-date-time-picker-time ");
  return await element.setValue(postDate);
});

When("I click excerpt", async function () {
    let element = await this.driver.$("#custom-excerpt");
    return await element.click();
  });

When("I should have a date error", async function () {
  let element = await this.driver.$(".gh-date-time-picker-error");
  return await element.click();
});

When("I click name", async function () {
    let element = await this.driver.$("[data-test-editor-title-input]");
    return await element.click();
  });

When("I enter excerpt", async function () {
  const postDate = faker.string.alpha(500);
  let element = await this.driver.$("#custom-excerpt");
  return await element.setValue(postDate);
});
