describe('Funcionalidad de crear member', () => {
  const ESCENARIO = 'member_crear_nombre_correo_note_validos'
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
  
  // el nombre el correo y la nota son correctos
  it('Escenario # apriori: Crear member nombre, correo y note validos', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos
    const email = dataPool.email;
    const name = dataPool.name;
    const note = dataPool.note;
    cy.get('#member-name').type(name);  
    cy.get('#member-email').type(email);  
    cy.get('#member-note').type(note);  
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