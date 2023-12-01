import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear tags', () => {
  const ESCENARIO = 'escenario04'
  const seccion = 'tags';
  let tagName = '';
  
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
  
  it('Escenario 4: Crear tag con datos vacios', () => {    
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step03`);


    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step04`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step05`);

    //Debe existir el tag en la lista.
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');
  });
})
