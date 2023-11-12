import { faker } from '@faker-js/faker';

describe('Crear pages title mayor 256 caracteres', () => {
    const seccion = 'pages';
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
    });
    
    it('Escenario 11: Crear pages title mayor 256 caracteres', () => {    
      const ESCENARIO = 'escenario11'
      cy.navegarSeccion(seccion);
      cy.get(`a[href="#/editor/page/"]`).first().click();
      cy.screenshot(`${ESCENARIO}_step_1`);  

        //llenar datos title mayor 256 caracteres
        const largeText = faker.string.alpha(256);
      cy.get('.gh-editor-title-container .gh-editor-title').click().type('New pages');
      cy.get('.kg-prose').click();
      cy.get('.gh-editor-title-container .gh-editor-title').click().type(largeText);
      cy.screenshot(`${ESCENARIO}_step_2`); 
      //publicamos
      cy.get('[data-test-button="publish-flow"]').click();
      cy.screenshot(`${ESCENARIO}_step_3`); 
      //validamos la alerta
      cy.get('.gh-alert').should('be.visible');
      cy.screenshot(`${ESCENARIO}_step_4`); 
 
    
      
    }); 
  })