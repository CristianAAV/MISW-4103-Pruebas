import { faker } from '@faker-js/faker';

describe('Funcionalidad de modificar tags', () => {
  const seccion = 'tags';
  let tagName = '';
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 7: Modificar tag, eliminar tag', () => {    
    const ESCENARIO = 'escenario7'
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

    //Seleccionar el tag creado
    cy.get(`a[href='#/tags/${tagName}/']`).first().click();
    cy.screenshot(`${ESCENARIO}_step_5`);
    
    //Click en borrar
    cy.contains(`Delete tag`).first().click();
    cy.wait(1000);
    cy.screenshot(`${ESCENARIO}_step_6`);

    //confirmar
    cy.wait(1000);
    cy.once('uncaught:exception', () => false);
    cy.get('.modal-footer .gh-btn.gh-btn-red').first().click();
    cy.screenshot(`${ESCENARIO}_step_7`);
    cy.wait(1000);

    //Verificar que no existe
    cy.get(`a[href='#/tags/${tagName}/']`).should('not.exist');
    cy.screenshot(`${ESCENARIO}_step_8`);
  });  
})
