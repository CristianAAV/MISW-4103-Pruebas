describe('update pages titulo mayor a 255 ', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario27'
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
    
    it('Escenario 27: update page mayor 255', () => {  
      //pseudoAleatorio
      
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
      cy.get('.gh-editor-title-container .gh-editor-title').click().type(informacion);
      cy.screenshot(`${ESCENARIO}_step04`); 
      cy.get('.kg-prose').click().type('New pages + datosss');;
      cy.screenshot(`${ESCENARIO}_step05`); 
         // click en update
      cy.get('[data-test-button="publish-save"]').click();  
      cy.screenshot(`${ESCENARIO}_step12`); 

    // Verificar la existencia del mensaje de error
      cy.get('.gh-alerts .gh-alert-content')
      .should('exist')
      .and('contain', 'Title cannot be longer than 255 characters');
            
      
    }); 
  })  