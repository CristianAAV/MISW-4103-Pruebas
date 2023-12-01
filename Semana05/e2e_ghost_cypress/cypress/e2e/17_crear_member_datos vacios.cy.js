describe('Funcionalidad de crear members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = '';

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 17: Crear Member con  valores vacios', () => {    
    const ESCENARIO = 'escenario17'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    //Ingreso del nombre del member vacio no se ingresa nada.

    cy.get('[data-test-button="save"]').click();
    cy.screenshot(`${ESCENARIO}_step_3`);


    cy.get(`.form-group.max-width.error .response`).should('include.text', 'Please enter an email');    
    cy.screenshot(`${ESCENARIO}_step_5`);
  });

})
