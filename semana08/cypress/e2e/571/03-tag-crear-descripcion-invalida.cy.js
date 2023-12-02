import { faker } from '@faker-js/faker';

describe('Crear tags', () => {
  const SECCION = 'tags';
  const ESCENARIO = '03-tag-crear-descripcion-invalida'

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });  

  it('Escenario 03: Crear tag con descripcion invalida', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = faker.string.alpha(10);
    const tagDescription = faker.string.alpha(501);
    cy.get('input[name="name"]').type(tagName);  
    cy.get('#tag-description').type(tagDescription);
    cy.screenshot(`${ESCENARIO}_step03`);
    
    //Guardar el tag
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step04`);

    //Se verifica que los datos son invalidos
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step05`);    
  });
})
