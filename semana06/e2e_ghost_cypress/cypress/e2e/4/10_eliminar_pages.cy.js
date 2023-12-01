const time = 1000;
describe('eliminar pages o draft page', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario10'
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.screenshot(`${ESCENARIO}_step01`); 
    });
    
    it('Escenario 10: Eliminar pages o draft page', () => {    
      
      // Add an event listener to handle uncaught exceptions
      cy.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
      });
      
      cy.navegarSeccion(seccion);
      cy.screenshot(`${ESCENARIO}_step02`); 
     
      
      //validamos que exista un item en la lista
      cy.get('.gh-list-row.gh-posts-list-item').should('have.length.greaterThan', 0);
      cy.screenshot(`${ESCENARIO}_step03`); 

      //seleccionar item a eliminar
      cy.get('.gh-list-row.gh-posts-list-item:first').click();
      cy.screenshot(`${ESCENARIO}_step04`);  

      // presionamos menu setting
      cy.get('.settings-menu-toggle[title="Settings"]').click(); 
      cy.screenshot(`${ESCENARIO}_step05`); 
      cy.wait(time)
      //Escogemos eliminar
      cy.get('.gh-btn-hover-red.settings-menu-delete-button').click();
      cy.screenshot(`${ESCENARIO}_step06`); 
      // Encuentra el botón por el atributo eliminar
      cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
      cy.screenshot(`${ESCENARIO}_step07`); 

      //para validar la eliminacion, no redirige a la pagina que lista las pages existentes
      cy.get('.gh-canvas-title a').should('have.text', 'Pages');
      cy.screenshot(`${ESCENARIO}_step08`); 



    }); 
  })