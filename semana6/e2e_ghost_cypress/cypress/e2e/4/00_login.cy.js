describe('Como administrador quiero hacer login con credenciales correctas', () => {
  it('Hacer login con las credenciales correctas', () => {
    const ESCENARIO =  `escenario00`;
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`, {onAfterScreenshot($el, props){
      console.log(props);      
    }});    
  });
})