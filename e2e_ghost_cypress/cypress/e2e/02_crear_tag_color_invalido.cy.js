import { Params } from '../../params';
import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear tags', () => {
  const seccion = 'tags';
  let tagName = '';

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });
  
  it('Escenario 2: Crear tag con un color invalido', () => {    
    const ESCENARIO = 'escenario2'
    cy.navegarSeccion(seccion);
    cy.get(`a[href="#/${seccion}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    //Ingreso del nombre del tag
    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step_2`);
    
    //Ingrsar color invalido
    cy.get('input[name="accent-color"]').first().type('xxxxxx');  
    cy.screenshot(`${ESCENARIO}_step_3`);

    //guardar
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step_4`);
    
    //verificar
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step_5`);
  });

})
