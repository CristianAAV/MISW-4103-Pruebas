import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = '';

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 18: Crear Member con  valores repetidos', () => {    
    
    // Add an event listener to handle uncaught exceptions
    cy.on('uncaught:exception', (err, runnable) => {
      // Return false to prevent Cypress from failing the test
      return false;
    });
    const ESCENARIO = 'escenario18'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    //Ingreso del nombre del member
    membersName = "new member";
    cy.get('#member-name').type(membersName);  
    cy.screenshot(`${ESCENARIO}_step_2`);

    membersEmail = "newmember@uniandes.edu.co";
    cy.get('#member-email').type(membersEmail);  
    cy.screenshot(`${ESCENARIO}_step_3`);
    

    cy.get('[data-test-button="save"]').click();
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.get(`.form-group.max-width.error .response`).should('include.text', 'Member already exists. Attempting to add member with existing email address');    
    cy.screenshot(`${ESCENARIO}_step_5`);

    
  });

})
