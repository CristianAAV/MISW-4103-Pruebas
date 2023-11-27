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
    const email = dataPool.emailinvalidl;
    cy.get('#member-name').clear();  
    cy.get('#member-email').clear().type(email);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click({force: true});
    cy.finalizarPaso(`${ESCENARIO}_step04`);
    cy.wait(500)
    
    //Se verifica que los datos son invalidos    
    cy.get('[data-test-button="save"]').should('include.text', 'Retry');
    cy.finalizarPaso(`${ESCENARIO}_step05`);
  });
})