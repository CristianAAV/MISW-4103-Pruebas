describe('Funcionalidad de crear member', () => {
  const ESCENARIO = 'member_crear_sin_nombre_correo_invalido_arroba'
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
  
  // el correo contiene 2 arrobas
  it('Escenario # apriori: Crear member sin nombre y correo invalido arroba', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos
    const email = dataPool.emailinvalida;
    cy.get('#member-email').type(email);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.finalizarPaso(`${ESCENARIO}_step04`);
    
    //Se verifica que los datos son invalidos
    cy.get('[data-test-button="save"]').should('include.text', 'Retry');
    cy.get(`.form-group.max-width.error .response`).should('include.text', 'Invalid Email');
    cy.finalizarPaso(`${ESCENARIO}_step05`);
  });
})