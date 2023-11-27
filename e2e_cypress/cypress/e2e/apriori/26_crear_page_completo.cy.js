describe('Crear pages con titulo', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario26'
    let dataPool = {};
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.screenshot(`${ESCENARIO}_step01`); 

        //Escoger el archivo de pruebas
    const archivoDatosPrueba = 'pages_pool_apriori.json';
    cy.fixture(archivoDatosPrueba).then((datosCargados) => {
      dataPool = datosCargados;
    });  

    });
    
      

    it('Escenario 26: Crear page completo con titulo', () => {    

       //Ingresar datos principales del nuevo pages
    const titulo = dataPool.caracteres;
    
      //when clic en nuevo pages
      cy.navegarSeccion(seccion);
      cy.screenshot(`${ESCENARIO}_step02`); 
      cy.get(`a[href="#/editor/page/"]`).first().click();
      cy.screenshot(`${ESCENARIO}_step03`);   

        //llenar datos title apriori
      cy.get('.gh-editor-title-container .gh-editor-title').click().type(titulo);
      cy.screenshot(`${ESCENARIO}_step04`); 
      cy.get('.kg-prose').click();
      cy.screenshot(`${ESCENARIO}_step05`); 
        // Click en publicar
      cy.get('[data-test-button="publish-flow"]').click();
      cy.screenshot(`${ESCENARIO}_step06`); 
      cy.get('[data-test-button="continue"]').click();
      cy.screenshot(`${ESCENARIO}_step07`); 
      cy.get('[data-test-button="confirm-publish"]').click();
      cy.screenshot(`${ESCENARIO}_step08`); 
        // Confirmar que aparezca el texto que se ha publicado
      cy.get('[data-test-publish-flow="complete"]').contains('has been published');
      cy.screenshot(`${ESCENARIO}_step09`); 
      
    }); 
  })