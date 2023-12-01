const { Given, When, Then } = require('@cucumber/cucumber');
const { faker } = require("@faker-js/faker");
 


///////////////////////////////////////////////////////////////////////////////////

// esto es para la version 5.71  loguin
When('I enter identification {kraken-string}', async function (identification) {
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
//////////////////////////////////////////////////////////////////

// esto para la version 4.44  loguin
When('I enter identification v4 {kraken-string}', async function (identification) {
    let element = await this.driver.$('.gh-input-icon.gh-icon-mail');
    return await element.setValue(identification);
});
When('I enter password v4 {kraken-string}', async function (password) {
    let element = await this.driver.$('input[name="password"]');
    return await element.setValue(password);
});
When('I click next v4', async function() {
    let element = await this.driver.$('.login.gh-btn');
    return await element.click();
})

Then("I should be on the admin section v4", async function () {
    let element = await this.driver.$("gh-nav-top");
    return await element;
  });



////////////////////////////////////////////////////////

When('I click on the new pages', async function () {
    let element = await this.driver.$('a[href="#/editor/page/"]');
    return await element.click();
});

  Then('I click on the redact message inputbox', async function () {
    let element = await this.driver.$('.gh-editor-title'); 
    const pagesTitle = faker.string.alpha(10);   
    return await element.setValue(pagesTitle);
  });
  Then('I click on the redact message inputbox 256', async function () {
    let element = await this.driver.$('.gh-editor-title'); 
    const pagesTitle = faker.string.alpha(300);   
    return await element.setValue(pagesTitle);
  });

   

  When('I redact text', async function() {    
    let element = await this.driver.$('div.kg-prose');
    const pagesBody = faker.string.alpha(20); 
    return await element.setValue(pagesBody);
})

When('I click text', async function() {    
    let element = await this.driver.$('div.kg-prose');
    return await element.keys(['Enter']);
})


When('I enter', async function() {    
    let element = await this.driver.$('div.kg-prose');
    return await element.keys(['Enter']);
})

When('I enter title', async function() {    
    let element = await this.driver.$('.gh-editor-title');
    return await element.keys(['Enter']);
})

When('I add card', async function() {    
    let element = await this.driver.$('.group.relative.flex.cursor-pointer.rounded-full"]');
    return await element.click();
})




When('I redact text 1000', async function() {    
    let element = await this.driver.$('div.kg-prose');
    const pagesBody = faker.string.alpha(1000); 
    return await element.setValue(pagesBody);
})

When('I redact text v4', async function() {
    let element = await this.driver.$('p[data-koenig-dnd-droppable="true"]');
    return await element.click();
})

  When('I Publisher', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger');   

    return await element.click();
})






When('I Publisher v4', async function() {
    let element = await this.driver.$('.gh-btn-editor.gh-publishmenu-trigger');
    
    return await element.click();
})

When('I Publisher final', async function() {
    let element = await this.driver.$('div.gh-publish-cta');
    return await element.click();
})

When('I Publisher final v4', async function() {
    let element = await this.driver.$('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon');
    return await element.click();
})

When('I seleccion menu list', async function() {
   // Seleccionar el elemento usando un selector específico
let elemento = await this.driver.$('.ember-power-select-selected-item');

return await elemento.click();
})

When('I seleccion menu list published', async function() {
    let element = await this.driver.$('.ember-power-select-option=Published pages');
    return await element.click();
})

Then("I should see the confirmation message", async function () {
    const newTag = 'news';
    let element = await this.driver.$('.gh-notification-title', 'Published');
    return await element;
  });



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

When('I clear edit', async function() {
    let element = await this.driver.$('div.kg-prose');
    return await element.clearValue();
    
})
When('I clear edit title', async function() {
    let element = await this.driver.$('.gh-editor-title');
    return await element.clearValue();
    
})




When('I update', async function() {
    let element = await this.driver.$('button.gh-btn.gh-btn-editor.gh-editor-save-trigger.green.ember-view');
    return await element.click();
    
})

When('I update v4', async function() {
    let element = await this.driver.$('.gh-btn-editor.green.gh-publishmenu-trigger');
    return await element.click();
    
})

When('I confirmation update v4', async function() {
    let element = await this.driver.$('.gh-btn-black.gh-publishmenu-button.gh-btn-icon');
    return await element.click();
    
})




When('I click list page', async function() {
    let element = await this.driver.$('div.gh-posts-list-item-group');
    return await element.click();
    
})

When('I click list page v4', async function() {
    let element = await this.driver.$('.gh-content-entry-title');
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

When('I click button delete page v4', async function() {
    let element = await this.driver.$('.gh-btn-hover-red.settings-menu-delete-button');
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

Then('I should see a notification with the message "Updated"',async function(){
    let element = await this.driver.$('.gh-notification-title', 'Updated');
    return  await element;
});

Then('I should be able to see the main page of pages',async function(){
    let element = await this.driver.$('.gh-canvas-title', 'Pages');
    return  await element;
});










