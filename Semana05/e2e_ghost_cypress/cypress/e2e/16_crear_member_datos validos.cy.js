describe('Funcionalidad de crear members', () => {
  const seccion = 'members';
  let membersName = '';
  let membersEmail = '';

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 16: Crear Member con  valores validos', () => {    
    const ESCENARIO = 'escenario16'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);


    membersEmail = "newmember@uniandes.edu.co";
    cy.get('#member-email').type(membersEmail);  
    cy.screenshot(`${ESCENARIO}_step_3`);

    //Ingreso del nombre del member
    membersName = "new member";
    cy.get('#member-name').type(membersName);  
    cy.screenshot(`${ESCENARIO}_step_2`);
    

    cy.get('[data-test-button="save"]').click();
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_4`);

    cy.get(`h3.ma0.pa0.gh-members-list-name`).should('include.text', membersName);
    cy.screenshot(`${ESCENARIO}_step_5`);

  });

})
