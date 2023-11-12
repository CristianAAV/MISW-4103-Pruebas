import { Params } from '../../params';
import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear posts', () => {
    const seccion = 'posts';
    let tagName = '';
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
  });
  
  it('Escenario 14: Crear con titulo vacio pero con descripcion', () => {    
    const ESCENARIO = 'escenario'
    cy.navegarSeccion(seccion);
    //tagName = 'news'
    
    cy.get(`a[href="#/editor/post/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step_1`);

    cy.get('[data-test-editor-title-input]').first().click();
    cy.screenshot(`${ESCENARIO}_step_2`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get(`.kg-prose`).clear().type('News');
    cy.screenshot(`${ESCENARIO}_step_3`);

    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
    cy.screenshot(`${ESCENARIO}_step_4`);
  
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
    cy.screenshot(`${ESCENARIO}_step_5`);

    cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
    cy.screenshot(`${ESCENARIO}_step_6`);
   
  });
})
