const { Given, When, Then } = require("@cucumber/cucumber");


  /////////////////////////////////
 /* Pruebas de login con kraken */
////////////////////////////////





  ///////////////////////////////////////////
 /* Pruebas de login con kraken - Members - Escenario 17  */
///////////////////////////////////////////
Then("I should have a error in email repet", async function () {
    let text ="Member already exists. Attempting to add member with existing email address"
    let Telement = await this.driver.$(".form-group.max-width.error .response").getText();
    if(Telement != text ){
        throw new Error("The mensaje is not correct");
      }
      return await Telement;
      
  });


Then("I should have a color red in Retry Botton", async function () {
    let color='rgb(212,9,29)';

    let Celement = await this.driver.$("section.view-actions button").getCSSProperty('background-color');
    console.log(Celement.value);
    if(Celement.value != color ){
      throw new Error("The color is not red");
    }
    return await Celement;
});
  