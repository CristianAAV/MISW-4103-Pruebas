describe('Funcionalidad de crear tags', () => {
  const ESCENARIO = '06-tag-apriori-fb-title-invalido'
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
  
  it('Escenario 06 apriori: Crear tag cuyo titulo en la seccion Facebook es invalido', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = dataPool.name;
    const tagDescription = dataPool.description;
    cy.get('input[name="name"]').type(tagName);  
    cy.get('#tag-description').type(tagDescription);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);

    //Ingresar datos en la seccion Meta
    cy.get('.gh-btn.gh-btn-expand').eq(0).click()
    const tagMetaTitle = dataPool.fb_title_invalid;
    cy.get('#meta-title').type(tagMetaTitle);
    cy.finalizarPaso(`${ESCENARIO}_step04`);

    //Guardar
    cy.get('section .view-actions button').click();
    cy.finalizarPaso(`${ESCENARIO}_step05`);
    
    //Se verifica que los datos son invalidos
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.finalizarPaso(`${ESCENARIO}_step06`);
  });
})