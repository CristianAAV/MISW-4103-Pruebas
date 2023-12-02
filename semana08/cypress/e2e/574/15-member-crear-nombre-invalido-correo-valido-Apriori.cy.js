describe('Funcionalidad de crear member', () => {
  const ESCENARIO = '15-member-crear-nombre-invalido-correo-valido-Apriori'
  const SECCION = 'members';
  let dataPool = {}

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);

  
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
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingresar datos
    const email = dataPool.email;
    const name = dataPool.nameinvalid;
    cy.get('#member-email').type(email);  
    cy.wait(1000)
    cy.get('#member-name').type(name);  
    cy.wait(1000)
    cy.screenshot(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.screenshot(`${ESCENARIO}_step04`);
    cy.wait(500)
    
    //Se verifica que los datos son invalidos

    cy.get('[data-test-button="save"]').should('include.text', 'Retry');
    cy.get('.form-group.max-width .response').should('include.text', 'Name cannot be longer than 191 characters.');
    cy.screenshot(`${ESCENARIO}_step05`);
  });
})