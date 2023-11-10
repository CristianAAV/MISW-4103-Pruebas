import { Params } from '../../params';

describe('Como administrador, quiero crear TAGS', () => {
  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
  });

  //Escenario 1
  /**/
  it('tag-escenario 1', () => {    
    const seccion = 'tags';
    cy.navegarSeccion(seccion);

    cy.get(`a[href="#/${seccion}/new/"]`).first().click();

    cy.screenshot(`control-1`);

    const tagName = 'news'
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`control-2`);


    cy.get('section .view-actions button').click();
    cy.screenshot(`control-3`);

    cy.navegarSeccion(seccion);
    cy.screenshot(`control-4`);
    //Debe existir el tag en ela lista.
    cy.get(`a[href='#/tags/${tagName}/']`).should('exist');
  });
})


