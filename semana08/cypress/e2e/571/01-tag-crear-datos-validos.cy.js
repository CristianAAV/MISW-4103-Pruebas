import { faker } from '@faker-js/faker';

describe('Crear tags', () => {
  const SECCION = 'tags';
  const ESCENARIO = '01-tag-crear-datos-validos'

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });  

  it('Escenario 01: Crear tag con datos validos', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = faker.string.alpha(10).toLocaleLowerCase();
    const tagDescription = faker.string.alpha(100).toLocaleLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.get('#tag-description').type(tagDescription);  
    cy.screenshot(`${ESCENARIO}_step03`);
    
    //Guardar el tag
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step04`);

    //Se verifica que el nuevo tag esta en la lista
    cy.navegarSeccion(SECCION);
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');
    cy.screenshot(`${ESCENARIO}_step05`);
  });
})
