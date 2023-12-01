import { faker } from '@faker-js/faker';

describe('Crear pages title mayor 256 caracteres', () => {
    const seccion = 'pages';
    const ESCENARIO = 'escenario11'
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.screenshot(`${ESCENARIO}_step01`); 
    });
    
    it('Escenario 11: Crear pages title mayor 256 caracteres', () => {    
      
      cy.navegarSeccion(seccion);
      cy.screenshot(`${ESCENARIO}_step02`); 
      cy.get(`a[href="#/editor/page/"]`).first().click();
      cy.screenshot(`${ESCENARIO}_step03`);  

        //llenar datos title mayor 256 caracteres
        const largeText = faker.string.alpha(256);
      cy.get('.gh-editor-title-container .gh-editor-title').click().type('New pages');
      cy.screenshot(`${ESCENARIO}_step04`); 
      cy.get('.kg-prose').click();
      cy.screenshot(`${ESCENARIO}_step05`); 
      cy.get('.gh-editor-title-container .gh-editor-title').click().type(largeText);
      cy.screenshot(`${ESCENARIO}_step06`); 
      //publicamos
      cy.get('[data-test-button="publish-flow"]').click();
      cy.screenshot(`${ESCENARIO}_step07`); 
      cy.screenshot(`${ESCENARIO}_step08`); 
      //validamos la alerta y que contenta el mensaje de no superar 255 caractreres
      cy.get('.gh-alert-content')
      .should('be.visible')
      .and('contain.text', 'cannot be longer than 255 characters');
      cy.screenshot(`${ESCENARIO}_step09`); 
      

 
    
      
    }); 
  })