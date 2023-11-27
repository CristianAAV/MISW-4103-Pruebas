describe('Crear pages cuerpo mayor 1000 caracteres', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario29'
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
    
    it('Escenario 29: Crear pages cuerpo mayor 1000 caracteres', () => {    
      //when
     //Ingresar datos principales del nuevo pages
      const informacion = dataPool.caracteres1000;
      cy.navegarSeccion(seccion);
      cy.screenshot(`${ESCENARIO}_step02`); 
      cy.get(`a[href="#/editor/page/"]`).first().click();
      cy.screenshot(`${ESCENARIO}_step03`);   

        //llenar datos cuerpo
      cy.get('.kg-prose').click().type(informacion);;
      cy.screenshot(`${ESCENARIO}_step05`); 
        // Click en publicar
      cy.get('[data-test-button="publish-flow"]').click();
      cy.screenshot(`${ESCENARIO}_step06`); 
      cy.get('[data-test-button="continue"]').click();
      cy.screenshot(`${ESCENARIO}_step07`); 
      cy.get('[data-test-button="confirm-publish"]').click();
      cy.screenshot(`${ESCENARIO}_step08`); 
      //then
        // Confirmar que aparezca el texto que se ha publicado
      cy.get('[data-test-publish-flow="complete"]').contains('has been published');
      cy.screenshot(`${ESCENARIO}_step09`); 
      
    }); 
  })