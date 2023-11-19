import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear tags', () => {
  const ESCENARIO = 'escenario02'
  const seccion = 'tags';
  let tagName = '';

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);

  });
  
  it('Escenario 2: Crear tag con un color invalido', () => {    
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingreso del nombre del tag
    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step03`);
    
    //Ingrsar color invalido
    cy.get('input[name="accent-color"]').first().type('xxxxxx');  
    cy.screenshot(`${ESCENARIO}_step04`);

    //guardar
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step05`);
    
    //verificar
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step06`);
  });

})
