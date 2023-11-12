const { Given, When, Then } = require("@cucumber/cucumber");


  /////////////////////////////////
 /* Pruebas de login con kraken */
////////////////////////////////





  ///////////////////////////////////////////
 /* Pruebas de login con kraken - Members - Escenario 16  */
///////////////////////////////////////////
Then("I should have a error in email", async function () {
    let text ="Please enter an email."
    let Telement = await this.driver.$(".form-group.max-width.error .response").getText();
    if(Telement != text ){
        throw new Error("The mensaje is not correct");
      }
      return await Telement;
      
  });


Then("I should have a color red in save Botton", async function () {

    let Celement = await this.driver.$("section.view-actions button").getCSSProperty('background-color');
    let color="rgb(212,9,29)";
    console.log(Celement.value);
    if(Celement.value == color ){
      throw new Error("The color is not red");
    }
    return await Celement;
});
  