const { Given, When, Then } = require('@cucumber/cucumber');


When('I enter identification {string}', async function (identification) {
    let element = await this.driver.$('#identification');
    return await element.setValue(identification);
});
When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});
When('I click next', async function() {
    let element = await this.driver.$('#ember5');
    return await element.click();
})

Then("I should be on the admin section", async function () {
    let element = await this.driver.$("header.gh-nav-menu");
    return await element;
  });
When('I click on the page', async function () {
    let element = await this.driver.$('a[href="#/pages/"]');
    return await element.click();
});
When('I click on the new pages', async function () {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

  Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$('.gh-editor-title');
    return await element.click();
  });
  When('I redact text', async function() {
    let element = await this.driver.$('div.kg-prose');
    return await element.click();
})

  When('I Publisher', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');
    return await element.click();
})
When('I Publisher final', async function() {
    let element = await this.driver.$('div.gh-publish-cta');
    return await element.click();
})

When('I Publisher final2', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view');
    return await element.click();
    
})

Then("I should have a new Pages", async function () {
    const newTag = 'news';
    let element = await this.driver.$('div.gh-publish-title');
    return await element;
  });

  When('I back edit', async function() {
    let element = await this.driver.$('button.gh-btn-editor.gh-publish-back-button');
    return await element.click();
    
})

When('I new edit', async function() {
    let element = await this.driver.$('.kg-prose');
    return await element.click();
    
})


When('I update', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view');
    return await element.click();
    
})
When('I click list page', async function() {
    let element = await this.driver.$('div.gh-posts-list-item-group');
    return await element.click();
    
})
When('I click button settings menu', async function() {
    let element = await this.driver.$('button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon');
    return await element.click();
    
})
When('I click button delete page', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-outline.gh-btn-icon.gh-btn-fullwidth');
    return await element.click();
    
})
When('I click button delete page confirmation', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    return await element.click();
    
})

Then("I should have error", async function () {
    const newTag = 'news';
    let element = await this.driver.$('.gh-alert.gh-alert-red');
    return await element;
  });












