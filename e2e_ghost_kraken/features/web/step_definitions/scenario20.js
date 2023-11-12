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
   
  When("I click delete members exits", async function () {
    let element = await this.driver.$('button[data-test-button="delete-member"]');
    return await element.click();
  });

  When("I click delete members confirm exits", async function () {
    let element = await this.driver.$('[data-test-button="confirm"]');
    return await element.click();
  });
  

  