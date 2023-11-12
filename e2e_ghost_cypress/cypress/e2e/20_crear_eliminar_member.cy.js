import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear eliminar members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = '';

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 20: Crear eliminar Member', () => {    
    const ESCENARIO = 'escenario16'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    //Ingreso del nombre del member
    membersName = "member delate";
    cy.get('#member-name').type(membersName);  
    cy.screenshot(`${ESCENARIO}_step_2`);

    membersEmail = "memberdelate@uniandes.edu.co";
    cy.get('#member-email').type(membersEmail);  
    cy.screenshot(`${ESCENARIO}_step_3`);
    

    cy.get('[data-test-button="save"]').click();

    cy.navegarSeccion(seccion);

    cy.get(`h3.ma0.pa0.gh-members-list-name`).should('include.text', membersName).first().click();
    cy.screenshot(`${ESCENARIO}_step_3`);


    
    cy.get('[data-test-button="member-actions"]').click();        
    cy.screenshot(`${ESCENARIO}_step_4`);

    
    cy.get('button[data-test-button="delete-member"]').click();      
    cy.screenshot(`${ESCENARIO}_step_5`);

    cy.get('[data-test-button="confirm"]').click();      
    cy.screenshot(`${ESCENARIO}_step_6`);
    cy.navegarSeccion(seccion);
    
  });

})
