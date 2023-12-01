describe('Funcionalidad de crear member', () => {
  const ESCENARIO = 'member_crear_nombre_valido_correo_invalido'
  const SECCION = 'members';
  let dataPool = {}

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.finalizarPaso(`${ESCENARIO}_step01`);

  
    //Escoger el archivo de pruebas
    const archivoDatosPrueba = 'member_pool_apriori.json';
    cy.fixture(archivoDatosPrueba).then((datosCargados) => {
      dataPool = datosCargados;
    });
  });  
  
  // tiene nombre valido y correo invalido.
  it('Escenario # apriori: Crear member nombre valido y correo invalido', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos
    const email = dataPool.emailinvalidl;
    const name = dataPool.name;
    cy.get('#member-name').type(name);  
    cy.get('#member-email').type(email);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.finalizarPaso(`${ESCENARIO}_step04`);
    cy.wait(500)
    
    //Se verifica que los datos son invalidos

    cy.get('[data-test-button="save"]').should('include.text', 'Retry');
    cy.get(`.form-group.max-width.error .response`).should('include.text', 'Invalid Email');
    cy.finalizarPaso(`${ESCENARIO}_step05`);
  });
})