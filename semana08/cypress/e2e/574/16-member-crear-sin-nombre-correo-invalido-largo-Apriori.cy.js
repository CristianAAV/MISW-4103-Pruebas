describe('Funcionalidad de crear member', () => {
  const ESCENARIO = '16-member-crear-sin-nombre-correo-invalido-largo-Apriori'
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
  // el correo excede el limite de caracteres
  it('Escenario # apriori: Crear member sin nombre y correo invalido largo', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingresar datos
    const email = dataPool.emailinvalidl;
    cy.get('#member-email').type(email);  
    cy.screenshot(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.screenshot(`${ESCENARIO}_step04`);
    
    //Se verifica que los datos son invalidos
    cy.get('[data-test-button="save"]').should('include.text', 'Retry');
    cy.screenshot(`${ESCENARIO}_step05`);
  });
})