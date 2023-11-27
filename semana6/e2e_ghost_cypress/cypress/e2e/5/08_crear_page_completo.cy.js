describe('Crear pages', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario08'
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.screenshot(`${ESCENARIO}_step01`); 
    });
    
    it('Escenario 8: Crear page completo', () => {    
      
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
      
    }); 
  })