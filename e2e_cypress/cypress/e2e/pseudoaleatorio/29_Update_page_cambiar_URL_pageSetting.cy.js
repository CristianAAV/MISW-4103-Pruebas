describe('actualizar pages y url de pagasetting', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario29'
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
    
    it('Escenario 29: ctualizar pages y url de pagasetting', () => {  
            //pseudoAleatorio
      const informacion = dataPool.caracteres;
     //when seeleccionar solo paginas publicadas 
    //when seeleccionar solo paginas publicadas 
    cy.navegarSeccion(seccion);
    cy.get('span.ember-power-select-selected-item:contains("All pages")').click();
    cy.get('li.ember-power-select-option:contains("Published pages")').click();

    //seleccionar item de paginas publicadas
    cy.get('.gh-posts-list-item')
      .contains('.gh-post-list-cta', 'Go to Editor')
      .click();
    cy.screenshot(`${ESCENARIO}_step03`);  

      // Presionar el menú de configuración
    cy.get('.settings-menu-toggle[title="Settings"]').click(); 
    cy.screenshot(`${ESCENARIO}_step05`);

    // cambiamos datos de url
    cy.get('input#url.post-setting-slug')
      .clear()
  .   type(informacion, { force: true });

  // Presionar el menú de configuración para cerrarlo
  cy.get('.settings-menu-toggle[title="Settings"]').click(); 
  cy.screenshot(`${ESCENARIO}_step05`);

    //llenar datos cuerpo
    cy.get('p[data-koenig-dnd-droppable="true"] > span[data-lexical-text="true"]').first().click().type(informacion);
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