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
      cy.get('.gh-editor-title').click().type("new pages")
      cy.screenshot(`${ESCENARIO}_step04`); 
      // click en el editor del body
      cy.get('.koenig-editor__editor').click();
      cy.screenshot(`${ESCENARIO}_step05`); 
        // Click en publicar
      cy.get('.gh-btn-editor.gh-publishmenu-trigger').click();
      cy.screenshot(`${ESCENARIO}_step06`); 
      cy.get('.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon').click();
      cy.screenshot(`${ESCENARIO}_step07`); 
      //cy.get('[data-test-button="confirm-publish"]').click();
      cy.screenshot(`${ESCENARIO}_step08`); 
        // Confirmar que aparezca el texto que se ha publicado
        cy.get('.gh-notification-content')
        .should('contain', 'Published');
      cy.screenshot(`${ESCENARIO}_step09`); 
      
    }); 
  })