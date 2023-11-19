import { faker } from '@faker-js/faker';

describe('Funcionalidad de modificar tags', () => {
  const ESCENARIO = 'escenario05'
  const seccion = 'tags';
  let tagName = '';
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
  
  it('Escenario 5: Modificar el titulo de un tag', () => {    
    cy.navegarSeccion(seccion);
    //tagName = 'news'
    
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

    //Seleccionar el tag creado
    cy.get(`a[href='#/tags/${tagName}/']`).first().click();
    cy.screenshot(`${ESCENARIO}_step06`);

    //modificar el tag creado
    const newtagText =  `_modificado`
    cy.get('input[name="name"]').type(newtagText);  
    cy.screenshot(`${ESCENARIO}_step07`);

    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step08`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`${ESCENARIO}_step09`);

    //Verificar que el nuevo tag existe
    cy.get(`h3`).contains(`${tagName}${newtagText}`).should('exist');    
  });
})
