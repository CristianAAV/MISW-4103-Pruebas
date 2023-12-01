const time = 1000;
describe('eliminar pages o draft page', () => {
    const seccion = 'pages';
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
    });
    
    it('Escenario 10: Eliminar pages o draft page', () => {    
      
      // Add an event listener to handle uncaught exceptions
      cy.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
      });
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
      cy.wait(time)
      //Escogemos eliminar
      cy.get('.gh-btn-outline:contains("Delete page")').click();
      // Encuentra el botón por el atributo data-test
      cy.get('.gh-btn-red').click();
      cy.screenshot(`${ESCENARIO}_step_4`);  
     
    }); 
  })