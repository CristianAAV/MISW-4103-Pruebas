const time = 1000;
describe('editar draft  y crear pages sin titulo y cuerpo menor 255 caracteres', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario32'
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
    
    it('Escenario 32:editar draft  y crear pages sin titulo y cuerpo menor 255 caracteres', () => {    
      
      
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
      cy.get('a[data-test-link="pages"]').click();
       

      //seleccionar item draf o actualizar
       //seleccionar item draf o actualizar
       cy.get('a.ember-view.gh-btn-editor.gh-editor-back-button').first().click();    
            
        cy.screenshot(`${ESCENARIO}_step03`);  

        //llenar datos sin titulo y cuerpo  menor 256 caracteres
        cy.get('.gh-editor-title-container .gh-editor-title').click().type(titulo);
        cy.screenshot(`${ESCENARIO}_step06`); 

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