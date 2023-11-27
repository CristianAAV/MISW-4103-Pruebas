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
      cy.screenshot(`${ESCENARIO}_step08`); 
      // Confirmar que aparezca el texto que se ha publicado
      cy.get('.gh-notification-content')
        .should('contain', 'Published');
      cy.screenshot(`${ESCENARIO}_step09`); 
      // actualizamos datos
      cy.get('.koenig-editor__editor').click().type('datos actualizado');
      cy.screenshot(`${ESCENARIO}_step10`); 
      cy.screenshot(`${ESCENARIO}_step11`); 
      //presionamos actualizar
      cy.get('.gh-btn-editor.green.gh-publishmenu-trigger').click();
      cy.screenshot(`${ESCENARIO}_step12`); 
      //confirmamos actualizacion
      cy.get('.gh-btn-black.gh-publishmenu-button.gh-btn-icon').click();
      cy.screenshot(`${ESCENARIO}_step13`); 
      //verificamos el mensaje de confirmacion de update
      cy.get('.gh-notification-title')
      .should('contain', 'Updated');
      cy.screenshot(`${ESCENARIO}_step14`); 

          
       }); 
      })