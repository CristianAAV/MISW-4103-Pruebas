const { Given, When, Then } = require("@cucumber/cucumber");


  /////////////////////////////////
 /* Pruebas de login con kraken */
////////////////////////////////





  ///////////////////////////////////////////
 /* Pruebas de login con kraken - Members - Escenario 20 */
///////////////////////////////////////////






When("I enter member delete Email", async function () {
    let randomEmail = 'membersdelete@uniandes.edu.co';
    let element = await this.driver.$("#member-email");
    return await element.setValue(randomEmail);
  });
  
  When("I enter member delete name", async function () {
    const randomName = "members delete";
    let element = await this.driver.$("#member-name");
    return await element.setValue(randomName);
  });

      
  When("I click config members exits", async function () {
    let element = await this.driver.$('[data-test-button="member-actions"]');
    return await element.click();
  });
   
      
  When("I click config exits members", async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-icon.icon-only');
    return await element.click();
  });
   


  When("I click delete members exits", async function () {
    let element = await this.driver.$('button[data-test-button="delete-member"]');
    return await element.click();
  });


  When("I click delete exits members", async function () {
    let element = await this.driver.$('li button.mr2 span.red');
    return await element.click();
  });


  When("I click delete members confirm exits", async function () {
    let element = await this.driver.$('[data-test-button="confirm"]');
    return await element.click();
  });
  
  When("I click delete members exits confirm", async function () {
    let element = await this.driver.$('.gh-btn.gh-btn-red.gh-btn-icon.ember-view');
    return await element.click();
  });
  

  Then ("I member delete", async function () {

    const randomName = "members exits";
    // let Nelement = await this.driver.$('h3.gh-members-list-name');
    let Naelement =  await this.driver.$('h3.gh-members-list-name').getText();;
    console.log(Naelement);
    if (Naelement == randomName){
      return "The member is not deleted correctly."
    }
     return await Naelement;
  });