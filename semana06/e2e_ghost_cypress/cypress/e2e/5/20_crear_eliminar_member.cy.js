describe('Funcionalidad de crear eliminar members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = ''; 
  const ESCENARIO = 'escenario20'

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
  
  it('Escenario 20: Crear eliminar Member', () => {   
    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step02`);

    cy.get(`h3.ma0.pa0.gh-members-list-name`).first().click();
    cy.screenshot(`${ESCENARIO}_step03`);

   
    cy.get('[data-test-button="member-actions"]').click();        
    cy.screenshot(`${ESCENARIO}_step04`);

    
    cy.get('button[data-test-button="delete-member"]').click();      
    cy.screenshot(`${ESCENARIO}_step05`);

    cy.get('[data-test-button="confirm"]').click();      
    cy.screenshot(`${ESCENARIO}_step06`);
    cy.navegarSeccion(seccion);
    
  });

})
