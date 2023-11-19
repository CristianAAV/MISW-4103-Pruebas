describe('Funcionalidad de crear members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = ''; 
  const ESCENARIO = 'Escenario17'

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
  
  it('Escenario 17: Crear Member con  valores vacios', () => {    
   
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingreso del nombre del member vacio no se ingresa nada.

    cy.get('.gh-btn-primary').click();
    cy.screenshot(`${ESCENARIO}_step03`);


    cy.get(`.form-group.max-width.error .response`).should('include.text', 'Please enter an email');    
    cy.screenshot(`${ESCENARIO}_step04`);
  });

})
