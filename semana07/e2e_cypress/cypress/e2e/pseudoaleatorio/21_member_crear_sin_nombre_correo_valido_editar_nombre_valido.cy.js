describe('Funcionalidad de crear member editar member', () => {
  const ESCENARIO = 'member_crear_sin_nombre_correo_valido_editar_nombre_valido'
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
  
  // se crea sin nombre y correo valido se edita y se pone nombre valido.
  it('Escenario # apriori: Crear member sin nombre y correo valido editar nombre valido', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos
    const email = dataPool.email;
    cy.get('#member-email').type(email);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.finalizarPaso(`${ESCENARIO}_step04`);
    cy.wait(500)
    
    //Se verifica que los datos son validos
    cy.get('[data-test-button="save"] span[data-test-task-button-state="success"]').should('include.text', 'Saved');
    cy.finalizarPaso(`${ESCENARIO}_step05`);
        
    cy.navegarSeccion(SECCION);
    cy.get(`a.ember-view.gh-list-data`).first().click({force: true});
    cy.finalizarPaso(`${ESCENARIO}_step06`);

    //Ingresar datos
    const name = dataPool.name;
    cy.get('#member-name').type(name);  
    cy.finalizarPaso(`${ESCENARIO}_step07`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.finalizarPaso(`${ESCENARIO}_step08`);
    cy.wait(500)
    
    //Se verifica que los datos son validos
    cy.get('[data-test-button="save"] span[data-test-task-button-state="success"]').should('include.text', 'Saved');
    cy.finalizarPaso(`${ESCENARIO}_step09`);


  });
})