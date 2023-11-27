describe('Funcionalidad de editar member', () => {
  const ESCENARIO = 'member_editar_sin_nombre_correo_valido'
  const SECCION = 'members';
  let dataPool = {}

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.finalizarPaso(`${ESCENARIO}_step01`);

  
    //Recuperar datos desde la URL correspondiente
    const urlDataPool = Cypress.env('dataPoolPseudoAleatorio')["member"];
    cy.request(urlDataPool).then((response) => {
      dataPool = response.body;
    });
  });
  
  // se edita sin nombre y con correo valido.
  it('Escenario # apriori: Editar member sin nombre y correo valido', () => {    
    cy.navegarSeccion(SECCION);
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos
    cy.get(`a.ember-view.gh-list-data`).first().click({force: true});
    const name = dataPool.name;
    const email = dataPool.email;
    cy.get('#member-name').clear().type(name); ;  
    cy.get('#member-email').clear().type(email);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.finalizarPaso(`${ESCENARIO}_step04`);
    cy.wait(500)
    
    //Se verifica que los datos son validos
    cy.get('[data-test-button="save"] span[data-test-task-button-state="success"]').should('include.text', 'Saved');
    cy.finalizarPaso(`${ESCENARIO}_step05`);
  });
})