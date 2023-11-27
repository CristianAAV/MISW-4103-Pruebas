const { Given, When, Then } = require("@cucumber/cucumber");


  /////////////////////////////////
 /* Pruebas de login con kraken */
////////////////////////////////





  ///////////////////////////////////////////
 /* Pruebas de login con kraken - Members - Escenario 18 */
///////////////////////////////////////////


When("I enter member exist Email", async function () {
    let randomEmail = 'membersexits@uniandes.edu.co';
    let element = await this.driver.$("#member-email");
    return await element.setValue(randomEmail);
  });
  
  When("I enter member exist name", async function () {
    const randomName = "members exits";
    let element = await this.driver.$("#member-name");
    return await element.setValue(randomName);
  });
  
  Then("I should have a members exist button", async function () {
    let element = await this.driver.$("a.ember-view.gh-list-data");
    return await element;
  });
  
  When("I click on the members exist button", async function () {
    let element = await this.driver.$("a.ember-view.gh-list-data");
    return await element.click();
  });
  
  
  When("I click Save members exits", async function () {
    let element = await this.driver.$("section.view-actions button");
    return await element.click();
  });
  
  Then("I should have a members exits on the list", async function () {
    let element = await this.driver.$("a[href='#/members/']");
    return await element;
  });

