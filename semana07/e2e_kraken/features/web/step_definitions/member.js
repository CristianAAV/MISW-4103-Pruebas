const { Given, When, Then } = require("@cucumber/cucumber");
const { faker } = require("@faker-js/faker");
const dataModule = require('./data_member.js');

const generatedData = dataModule.data();
  ///////////////////////////////////////////
 /* Pruebas de login con kraken - Members - Escenario 15  */
///////////////////////////////////////////

const fname = faker.person.firstName();
const lname = faker.person.lastName();
const name = fname +' '+ lname;
const email = fname.charAt(0)+lname+'@'+faker.internet.domainName(); 
const emailinvalida = fname.charAt(0)+'@'+lname+'@'+faker.internet.domainName(); 
const emailinvalidp = '.'+fname.charAt(0)+lname+'@'+faker.internet.domainName(); 
const emailinvalids = fname.charAt(0)+' '+lname+'@'+faker.internet.domainName(); 
const emailinvalidl = faker.string.alpha(198-email.length)+email;
const nameinvalid = faker.string.alpha(192);
const note = faker.lorem.sentence(20);
const noteinvalid = faker.lorem.sentence(200);
const prueba = email.length -71; 

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

When("I enter member valor email {kraken-string}", async function (valoremail) {
    let element = await this.driver.$("#member-email");
    return await element.setValue(generatedData[valoremail]);
  });

  When("I enter member valor email", async function () {
      let element = await this.driver.$("#member-email");
      return await element.setValue(email);
    });

    When("I enter member valor email invalid large", async function () {
        let element = await this.driver.$("#member-email");
        return await element.setValue(emailinvalidl);
      });
  

      When("I enter member valor email invalid arroba", async function () {
        let element = await this.driver.$("#member-email");
        return await element.setValue(emailinvalida);
      });

      When("I enter member valor email invalid espacio", async function () {
        let element = await this.driver.$("#member-email");
        return await element.setValue(emailinvalids);
      });

      When("I enter member valor email invalid point", async function () {
        let element = await this.driver.$("#member-email");
        return await element.setValue(emailinvalidp);
      });

  When("I click Save members", async function () {
    let element = await this.driver.$('[data-test-button="save"]');
    return await element.click();
  });

Then("I should have a saved member", async function () {       
    let element = await this.driver.$('[data-test-button="save"]').getText();
    if(element != "Saved" ){
        throw new Error("The mensaje is not correct");
      }
      return await element;

});


Then("I should have a error create member", async function () {       
    let element = await this.driver.$('[data-test-button="save"]').getText();
    if(element != "Retry" ){
        throw new Error("The mensaje is not correct");
      }
      return await element;

});

  
Then("I should have a mensaje invalid email member", async function () {       
    let element = await this.driver.$(`.form-group.max-width.error .response`).getText(focused=true);
    if(element != "Invalid Email." ){
        throw new Error("The mensaje is not correct");
      }
      return await element;

});


Then("I should have a mensaje invalid name member", async function () {       
    let element = await this.driver.$(`.form-group.max-width .response`).getText(focused=true);
    if(element != "Name cannot be longer than 191 characters." ){
        throw new Error("The mensaje is not correct");
      }
      return await element;

});
  

  
When("I enter member valor name", async function () {
    let element = await this.driver.$("#member-name");
    return await element.setValue(name);
  });

  
  
When("I enter member name invalid", async function () {
    let element = await this.driver.$("#member-name");
    return await element.setValue(nameinvalid);
  });

When("I enter member valor name {kraken-string}", async function (valorname) {
    let element = await this.driver.$("#member-name");
    return await element.setValue(generatedData[valorname]);
  });

  
When("I enter member valor note {kraken-string}", async function (valornote) {
    let element = await this.driver.$("#member-note");
    return await element.setValue(generatedData[valornote]);
  });

  
  When("I enter member valor note", async function () {
    let element = await this.driver.$("#member-note");
    return await element.setValue(note);
  });

  When("I enter member note invalid", async function () {
    let element = await this.driver.$("#member-note");
    return await element.setValue(noteinvalid);
  });

  Then("I should have a mensaje invalid note member", async function () {       
    let element = await this.driver.$(`.form-group.mb0.gh-member-note.error .response`).getText(focused=true);
    console.log(element);
    if(element != "Note is too long." ){
        throw new Error("The mensaje is not correct");
      }
      return await element;

});


When("I click on the members exist button", async function () {
    let element = await this.driver.$(`a.ember-view.gh-list-data`);
    // console.log("Element found:", element); // Agrega este log
    return await element.click();
  });