describe('Funcionalidad de crear tags', () => {
  const ESCENARIO = '01-tag-apriori-crear-datos-validos';
  const SECCION = 'tags';
  let dataPool = {}

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.finalizarPaso(`${ESCENARIO}_step01`);

    //Escoger el archivo de pruebas
    const archivoDatosPrueba = 'tag_pool_apriori.json';
    cy.fixture(archivoDatosPrueba).then((datosCargados) => {
      dataPool = datosCargados;
    });    
  });
  
  it('Escenario 01 apriori: Crear tag con datos validos', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = dataPool.name;
    const tagDescription = dataPool.description;
    cy.get('input[name="name"]').type(tagName);  
    cy.get('#tag-description').type(tagDescription);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);
    
    //Guardar el tag
    cy.get('section .view-actions button').click();
    cy.finalizarPaso(`${ESCENARIO}_step04`);

    //Se verifica que el nuevo tag esta en la lista
    cy.navegarSeccion(SECCION);
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');
    cy.finalizarPaso(`${ESCENARIO}_step05`);
  });
})