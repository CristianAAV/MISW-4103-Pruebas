describe('Funcionalidad de crear tags', () => {
  const ESCENARIO = '04-tag-apriori-slug-invalido';
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
  
  it('Escenario 04 apriori: Crear tag con un slug invalido', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = dataPool.name;
    const tagSlug = dataPool.slug_invalid;
    cy.get('input[name="name"]').type(tagName);  
    cy.get('input[name="slug"]').type(tagSlug);
    cy.finalizarPaso(`${ESCENARIO}_step03`);
    
    //Guardar
    cy.get('section .view-actions button').click();
    cy.finalizarPaso(`${ESCENARIO}_step04`);
    
    //Se verifica que los datos son invalidos
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.finalizarPaso(`${ESCENARIO}_step05`);
  });
})