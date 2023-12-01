describe('Crear tags', () => {
  const seccion = 'tags';

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 1: Crear tag con datos vacios', () => {    
    const ESCENARIO = 'escenario1'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    //guardar con datos vacios
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_2`);


    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step_3`);
  }); 
})
