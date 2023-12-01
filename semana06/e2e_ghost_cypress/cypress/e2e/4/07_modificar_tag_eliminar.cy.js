import { faker } from '@faker-js/faker';

describe('Funcionalidad de modificar tags', () => {
  const ESCENARIO = 'escenario07'
  const seccion = 'tags';
  let tagName = '';
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });
  
  it('Escenario 7: Modificar tag, eliminar tag', () => {    
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

    //Seleccionar el tag creado
    cy.get(`a[href='#/tags/${tagName}/']`).first().click();
    cy.screenshot(`${ESCENARIO}_step06`);
    
    //Click en borrar
    cy.contains(`Delete tag`).first().click();
    cy.wait(1000);
    cy.screenshot(`${ESCENARIO}_step07`);

    //confirmar
    cy.wait(1000);
    cy.once('uncaught:exception', () => false);
    cy.get('.modal-footer .gh-btn.gh-btn-red').first().click();
    cy.screenshot(`${ESCENARIO}_step08`);
    cy.wait(1000);

    //Verificar que no existe
    cy.get(`a[href='#/tags/${tagName}/']`).should('not.exist');
    cy.screenshot(`${ESCENARIO}_step09`);
  });  
})
