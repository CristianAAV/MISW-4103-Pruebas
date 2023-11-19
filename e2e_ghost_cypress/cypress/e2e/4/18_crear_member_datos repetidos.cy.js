describe('Funcionalidad de crear members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = '';
  const ESCENARIO = 'Escenario18'

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
   
  it('Escenario 18: Crear Member con  valores repetidos', () => {    
    
    // Add an event listener to handle uncaught exceptions
    cy.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    });
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingreso del nombre del member
    membersEmail = "newmember@uniandes.edu.co";
    cy.get('#member-email').type(membersEmail);  
    cy.screenshot(`${ESCENARIO}_step03`);

    membersName = "new member";
    cy.get('#member-name').type(membersName);  
    cy.screenshot(`${ESCENARIO}_step04`);
    

    cy.get('.gh-btn-primary').click();
    cy.screenshot(`${ESCENARIO}_step05`);

    cy.get('.gh-alert-content').should('include.text', 'Validation error, cannot save member.');    
    cy.screenshot(`${ESCENARIO}_step06`);

    
  });

})
