describe('Crear pages', () => {
    const seccion = 'pages';
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
    });
    
    it('Escenario 8: Crear page completo', () => {    
      const ESCENARIO = 'escenario8'
      cy.navegarSeccion(seccion);
      cy.get(`a[href="#/editor/page/"]`).first().click();
      cy.screenshot(`${ESCENARIO}_step_1`);  

        //llenar datos title
      cy.get('.gh-editor-title-container .gh-editor-title').click().type('New pages');
      cy.get('.kg-prose').click();
      cy.screenshot(`${ESCENARIO}_step_2`); 
        // Click en publicar
      cy.get('[data-test-button="publish-flow"]').click();
      cy.get('[data-test-button="continue"]').click();
      cy.get('[data-test-button="confirm-publish"]').click();
      cy.screenshot(`${ESCENARIO}_step_3`); 
        // Confirmar que aparezca el texto que se ha publicado
      cy.get('[data-test-publish-flow="complete"]').contains('has been published');
      
    }); 
  })