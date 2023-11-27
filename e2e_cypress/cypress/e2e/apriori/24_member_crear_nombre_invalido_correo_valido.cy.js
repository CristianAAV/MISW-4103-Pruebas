describe('Funcionalidad de crear member', () => {
  const ESCENARIO = 'member_crear_nombre_invalido_correo_valido'
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

  // tiene nombre invalido excede el nunmero de caracteres y correo valido.
  it('Escenario # apriori: Crear member nombre invalido y correo valido', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos
    const email = dataPool.email;
    const name = dataPool.nameinvalid;
    cy.get('#member-name').type(name);  
    cy.get('#member-email').type(email);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.finalizarPaso(`${ESCENARIO}_step04`);
    cy.wait(500)
    
    //Se verifica que los datos son invalidos

    cy.get('[data-test-button="save"]').should('include.text', 'Retry');
    cy.get('.form-group.max-width .response').should('include.text', 'Name cannot be longer than 191 characters.');
    cy.finalizarPaso(`${ESCENARIO}_step05`);
  });
})