describe('eliminar pages o draft page', () => {
    const seccion = 'pages';
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
    });
    
    it('Escenario 10: Eliminar pages o draft page', () => {    
      const ESCENARIO = 'escenario10'
      cy.navegarSeccion(seccion);
      cy.screenshot(`${ESCENARIO}_step_1`);  

      //seleccionar item a eliminar
      cy.get('.gh-posts-list-item')
        .contains('.gh-post-list-cta', 'Go to Editor')
        .click();
        cy.screenshot(`${ESCENARIO}_step_2`);  

      // presionamos menu setting
      cy.get('.settings-menu-toggle[title="Settings"]').click(); 
      cy.screenshot(`${ESCENARIO}_step_3`);  
      //Escogemos eliminar
      cy.get('.gh-btn-outline:contains("Delete page")').click();
      // Encuentra el botón por el atributo data-test
      cy.get('[data-test-task-button-state="idle"]').click();
      cy.screenshot(`${ESCENARIO}_step_4`);  


    
     
    }); 
  })