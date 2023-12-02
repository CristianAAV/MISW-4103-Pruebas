const time = 1000;
describe('editar draft  y crear pages con titulo mayor 256 caracteres', () => {
    const seccion = 'pages';
    const ESCENARIO = '13-draft-con-titulo-mayor-255-caracteres'
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
    
    it('Escenario 31:editar draft  y crear pages con titulo mayor 256 caracteres', () => {  
    //Ingresar datos principales del nuevo pages
    const informacion = dataPool.caracteres256;  
    const titulo = dataPool.caracteres; 
    
      
      // Add an event listener to handle uncaught exceptions
      cy.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
      });
      

      //when clic en nuevo pages
      cy.navegarSeccion(seccion);
      cy.screenshot(`${ESCENARIO}_step02`); 
      cy.get(`a[href="#/editor/page/"]`).first().click();
     
      //llenar datos de titulos y presionar atras para crear el draft
      cy.get('.gh-editor-title-container .gh-editor-title').click().type(titulo);
      cy.wait(2000);
      cy.screenshot(`${ESCENARIO}_step02`);
      cy.get('a[href="#/pages/"]').click({force : true});
      cy.wait(2000);
      cy.get('a[href="#/pages/"]').click({force : true});
       
      cy.wait(1000);

      //seleccionar item draf o actualizar
      cy.get('li.gh-list-row.gh-posts-list-item.gh-post-list-plain-status').first().click();    
            
        

        //llenar datos title mayor 256 caracteres
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