import { faker } from '@faker-js/faker';

describe('Crear tags', () => {
  const SECCION = 'tags';
  const ESCENARIO = '04-tag-crear-slug-invalido'

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });  

  it('Escenario 04: Crear tag con slug invalido', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = faker.string.alpha(10);
    const tagDescription = faker.string.alpha(10);
    const tagSlug = faker.string.alpha(192);

    cy.get('#tag-description').type(tagDescription);
    cy.get('input[name="name"]').type(tagName);  
    cy.get('input[name="slug"]').type(tagSlug);
    cy.screenshot(`${ESCENARIO}_step03`);
    
    //Guardar el tag
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step04`);

    //Se verifica que los datos son invalidos
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step05`);    
  });
})
