describe('Actualizar pages', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario26'
    let dataPool = {}
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.screenshot(`${ESCENARIO}_step01`); 

       //Recuperar datos desde la URL correspondiente
    const urlDataPool = Cypress.env('dataPoolPseudoAleatorio')["pages"];
    cy.request(urlDataPool).then((response) => {
      dataPool = response.body;
    });

    });
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Evitar que Cypress falle la prueba en caso de uncaught exception
      return false;
    });
    
    it('Escenario 26: Actualizar page completo', () => {   
      const titulo = dataPool.caracteres;
      const informacion = dataPool.caracteres256;
      //when seeleccionar solo paginas publicadas 
      cy.navegarSeccion(seccion);
      cy.get('span.ember-power-select-selected-item:contains("All pages")').click();
      cy.get('li.ember-power-select-option:contains("Published pages")').click();

      //seleccionar item de paginas publicadas
      cy.get('.gh-posts-list-item')
        .contains('.gh-post-list-cta', 'Go to Editor')
        .click();
        cy.screenshot(`${ESCENARIO}_step03`);  

       
        //llenar datos title
      cy.get('.gh-editor-title-container .gh-editor-title').click().clear().type(titulo);
      cy.screenshot(`${ESCENARIO}_step04`); 
      cy.get('.kg-prose').click().type(informacion);;
      cy.screenshot(`${ESCENARIO}_step05`); 
         // click en update
      cy.get('[data-test-button="publish-save"]').click();  
      cy.screenshot(`${ESCENARIO}_step12`); 
     // vlaidar notificacion de actualizacion
       // Espera a que la notificación esté presente
       cy.get('.gh-notification').should('exist');
       cy.screenshot(`${ESCENARIO}_step13`); 
       // Obtén el título de la notificación
       cy.get('.gh-notification-title').invoke('text').should('eq', 'Updated');
       cy.screenshot(`${ESCENARIO}_step14`); 
            
      
    }); 
  })