import { faker } from '@faker-js/faker';

describe('Funcionalidad de modificar tags', () => {
  const ESCENARIO = 'escenario06'
  const seccion = 'tags';
  let tagName = '';
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
  
  it('Escenario 6: Modifcar tag, Modificar con descripcion invalida', () => {    
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step03`);

    const descriptionText = faker.string.alpha(100);
    cy.get('textarea[name="description"]').type(descriptionText);  
    cy.screenshot(`${ESCENARIO}_step04`);

    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step05`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step06`);

    //Debe existir el tag en la lista.
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');

    //Seleccionar el tag creado
    cy.get(`a[href='#/tags/${tagName}/']`).first().click();
    cy.screenshot(`${ESCENARIO}_step07`);

    //modificar la descripcion
    const largeDescriptionText = faker.string.alpha(600);
    cy.get('textarea[name="description"]').type(largeDescriptionText);  
    cy.screenshot(`${ESCENARIO}_step08`);

    //guardar
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step09`);
    
    //verificar
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step10`);
  });
})
