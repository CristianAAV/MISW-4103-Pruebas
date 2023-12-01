describe('Crear y editar pages', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario09'
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.screenshot(`${ESCENARIO}_step01`); 
    });
    
    it('Escenario 9: Crear y editar pages', () => {    
      
      cy.navegarSeccion(seccion);
      cy.screenshot(`${ESCENARIO}_step02`); 
      cy.get(`a[href="#/editor/page/"]`).first().click();
      cy.screenshot(`${ESCENARIO}_step03`); 

        //llenar datos title
      cy.get('.gh-editor-title-container .gh-editor-title').click().type('New pages');
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
        //click button editar
      cy.get('[data-test-button="close-publish-flow"]').click();
      cy.screenshot(`${ESCENARIO}_step10`); 
        // editar informacion
      cy.get('.kg-prose').click().type('+ información');
      cy.screenshot(`${ESCENARIO}_step11`);  
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