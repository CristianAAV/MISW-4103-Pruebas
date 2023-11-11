import { faker } from '@faker-js/faker';

describe('Funcionalidad de modificar tags', () => {
  const seccion = 'tags';
  let tagName = '';
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 6: Modifcar tag, Modificar con descripcion invalida', () => {    
    const ESCENARIO = 'escenario6'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step_2`);

    const descriptionText = faker.string.alpha(100);
    cy.get('textarea[name="description"]').type(descriptionText);  
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_4`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_5`);

    //Debe existir el tag en la lista.
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');

    //Seleccionar el tag creado
    cy.get(`a[href='#/tags/${tagName}/']`).first().click();
    cy.screenshot(`${ESCENARIO}_step_6`);

    //modificar la descripcion
    const largeDescriptionText = faker.string.alpha(600);
    cy.get('textarea[name="description"]').type(largeDescriptionText);  
    cy.screenshot(`${ESCENARIO}_step_7`);

    //guardar
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_4`);
    
    //verificar
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step_5`);
  });
})
