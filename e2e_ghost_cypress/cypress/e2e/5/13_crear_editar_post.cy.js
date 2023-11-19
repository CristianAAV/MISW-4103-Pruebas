import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear posts', () => {
    const seccion = 'posts';
    let tagName = '';
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
  });
  
  it('Escenario 13: Crear posts y editar', () => {    
    const ESCENARIO = 'escenario13'
    cy.navegarSeccion(seccion);
    //tagName = 'news'
    
    cy.get(`a[href="#/editor/post/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step01`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('[data-test-editor-title-input]').clear().type('News');
    cy.screenshot(`${ESCENARIO}_step02`);

    cy.get(`.kg-prose`).first().click();
    cy.screenshot(`${ESCENARIO}_step03`);

    cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
    cy.screenshot(`${ESCENARIO}_step04`);
  
    cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click();
    cy.screenshot(`${ESCENARIO}_step05`);

    cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click();
    cy.screenshot(`${ESCENARIO}_step06`);

    cy.get('button.gh-btn-editor.gh-publish-back-button').click();
    cy.screenshot(`${ESCENARIO}_step07`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get(`.kg-prose`).clear().type('News');
    cy.screenshot(`${ESCENARIO}_step08`);

   
  });
})
