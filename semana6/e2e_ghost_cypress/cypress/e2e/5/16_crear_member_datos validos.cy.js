describe('Funcionalidad de crear members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = '';
  const ESCENARIO = 'escenario16'

  
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
  
  it('Escenario 16: Crear Member con  valores validos', () => {    

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step02`);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step03`);


    membersEmail = "newmember@uniandes.edu.co";
    cy.get('#member-email').type(membersEmail);  
    cy.screenshot(`${ESCENARIO}_step04`);

    //Ingreso del nombre del member
    membersName = "new member";
    cy.get('#member-name').type(membersName);  
    cy.screenshot(`${ESCENARIO}_step05`);
    

    cy.get('[data-test-button="save"]').click();
    cy.screenshot(`${ESCENARIO}_step06`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step07`);

    cy.get(`h3.ma0.pa0.gh-members-list-name`).should('include.text', membersName);
    cy.screenshot(`${ESCENARIO}_step08`);

  });

})
