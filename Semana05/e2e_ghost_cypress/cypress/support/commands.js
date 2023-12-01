// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { Params } from '../../params';
const { ghostUrl, email, password } = Params;  

const ingresarCredencialesPaginaLogin = (email, password, nextUrl, tagHtml) => {
  //Given the url  
  cy.visit(ghostUrl);  
  
  if (email)
    cy.get('input[name="identification"]').type(email);
  if (password)
    cy.get('input[name="password"]').type(password);  
  
  cy.get('button[type="submit"]').click(); 
  
  //Check the URL
  cy.url().should('equal', `${ghostUrl}/${nextUrl}` );

  //Then tagHtml should exist  
  cy.get(tagHtml).should('exist');
};

const seleccionarSeccion = (sectionName) => {
  cy.get(`a[href="#/${sectionName}/"]`).first().click();
  cy.wait(1000);    
  cy.url().should('equal', `${ghostUrl}/#/${sectionName}` );
  cy.screenshot(`${sectionName}_selection`);
}

Cypress.Commands.add('hacerLoginIncorrecto',  (email, password) => {
  return ingresarCredencialesPaginaLogin(email, password, '#/signin', '.main-error');
});

Cypress.Commands.add('hacerLoginCorrecto', ()=>{
  return ingresarCredencialesPaginaLogin(email, password, '#/dashboard', '.gh-canvas-title');  
});


Cypress.Commands.add('navegarSeccion', seleccionarSeccion);
