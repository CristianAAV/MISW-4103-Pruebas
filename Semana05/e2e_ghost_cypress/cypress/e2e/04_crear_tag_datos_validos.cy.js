import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear tags', () => {
  const seccion = 'tags';
  let tagName = '';
  
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 4: Crear tag con datos vacios', () => {    
    const ESCENARIO = 'escenario4'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step_2`);


    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_4`);

    //Debe existir el tag en la lista.
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');
  });
})
