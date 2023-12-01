describe('Crear pages titulo mayor a 255 caracteres', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario28'
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
    
    it('Escenario 28:Crear pages titulo mayor a 255 caracteres', () => {    
      const informacion = dataPool.caracteres256;  
      const titulo = dataPool.caracteres;  
      //when
      cy.navegarSeccion(seccion);
      cy.screenshot(`${ESCENARIO}_step02`); 
      cy.get(`a[href="#/editor/page/"]`).first().click();
      cy.screenshot(`${ESCENARIO}_step03`);   

      //llenar datos title mayor 256 caracteres
     
      cy.get('.gh-editor-title-container .gh-editor-title').click().type(titulo);
      cy.screenshot(`${ESCENARIO}_step04`); 
      cy.get('.kg-prose').click();
      cy.screenshot(`${ESCENARIO}_step05`); 
      cy.get('.gh-editor-title-container .gh-editor-title').click().type(informacion);
      cy.screenshot(`${ESCENARIO}_step06`); 
      //publicamos
      cy.get('[data-test-button="publish-flow"]').click();
      cy.screenshot(`${ESCENARIO}_step07`); 
      cy.screenshot(`${ESCENARIO}_step08`); 
      //validamos la alerta y que contenta el mensaje de no superar 255 caractreres
      cy.get('.gh-alert-content')
      .should('be.visible')
      .and('contain.text', 'cannot be longer than 255 characters');
      cy.screenshot(`${ESCENARIO}_step09`); 
      
    }); 
  })