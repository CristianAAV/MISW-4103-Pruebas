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

    cy.get(`.ember-view.gh-list-data`).first().click();
    cy.screenshot(`${ESCENARIO}_step03`);

   
    cy.get('.gh-btn.gh-btn-icon.icon-only').click();        
    cy.screenshot(`${ESCENARIO}_step04`);

    
    cy.get('li button.mr2 span.red').click();      
    cy.screenshot(`${ESCENARIO}_step05`);

  
    cy.get('.gh-btn.gh-btn-red.gh-btn-icon.ember-view').first().click();
    cy.screenshot(`${ESCENARIO}_step06`);
    cy.navegarSeccion(seccion);
    
  });

})
