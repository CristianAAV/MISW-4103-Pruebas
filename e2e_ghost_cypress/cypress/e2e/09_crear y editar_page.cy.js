describe('Crear y editar pages', () => {
    const seccion = 'pages';
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
    });
    
    it('Escenario 9: Crear y editar pages', () => {    
      const ESCENARIO = 'escenario9'
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
        // Confirmar que aparezca el texto que se ha publicado
      cy.get('[data-test-publish-flow="complete"]').contains('has been published');
      cy.screenshot(`${ESCENARIO}_step_3`); 
        //click button editar
      cy.get('[data-test-button="close-publish-flow"]').click();
        // editar informacion
      cy.get('.kg-prose').click().type('+ información');
      cy.screenshot(`${ESCENARIO}_step_4`); 
        // click en update
      cy.get('[data-test-button="publish-save"]').click();  
      cy.screenshot(`${ESCENARIO}_step_5`); 
      
    }); 
  })