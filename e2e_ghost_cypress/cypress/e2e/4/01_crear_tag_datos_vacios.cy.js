describe('Crear tags', () => {
  const seccion = 'tags';
  const ESCENARIO = 'escenario01'

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
  
  it('Escenario 1: Crear tag con datos vacios', () => {    
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //guardar con datos vacios
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step03`);

    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step04`);
  }); 
})
