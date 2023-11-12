describe('Funcionalidad de crear members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = '';

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 19: editar Member existente', () => {    
    
    // Add an event listener to handle uncaught exceptions
    cy.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    });
    const ESCENARIO = 'escenario19'
    cy.navegarSeccion(seccion);
    cy.get(`a.ember-view.gh-list-data`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    //Ingreso del nombre del member
    membersName = "member exist";
    cy.get('#member-name').clear().type(membersName);  
    cy.screenshot(`${ESCENARIO}_step_2`);

    membersEmail = "memberexist@uniandes.edu.co";
    cy.get('#member-email').clear().type(membersEmail);  
    cy.screenshot(`${ESCENARIO}_step_3`);
    

    cy.get('[data-test-button="save"]').click();
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_4`);

    cy.get(`h3.ma0.pa0.gh-members-list-name`).should('include.text', membersName);
    cy.screenshot(`${ESCENARIO}_step_5`);

    
  });

})
