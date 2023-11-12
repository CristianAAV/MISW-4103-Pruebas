import { Params } from '../e2e_ghost_cypress/params';
import { faker } from '@faker-js/faker';

describe('Funcionalidad de modificar tags', () => {
  const seccion = 'tags';
  let tagName = '';
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 5: Modificar el titulo de un tag', () => {    
    const ESCENARIO = 'escenario5'
    cy.navegarSeccion(seccion);
    //tagName = 'news'
    
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

    //Seleccionar el tag creado
    cy.get(`a[href='#/tags/${tagName}/']`).first().click();
    cy.screenshot(`${ESCENARIO}_step_5`);

    //modificar el tag creado
    const newtagText =  `_modificado`
    cy.get('input[name="name"]').type(newtagText);  
    cy.screenshot(`${ESCENARIO}_step_6`);

    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_7`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step_4`);

    //Verificar que el nuevo tag existe
    cy.get(`h3`).contains(`${tagName}${newtagText}`).should('exist');    
  });
})
