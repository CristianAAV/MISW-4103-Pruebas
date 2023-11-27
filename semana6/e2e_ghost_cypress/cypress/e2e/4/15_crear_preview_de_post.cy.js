import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear posts', () => {
    const seccion = 'posts';
    let tagName = '';
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
  });
  
  it('Escenario 15: Crear posts y preview', () => {    
    const ESCENARIO = 'escenario15'
    cy.navegarSeccion(seccion);
    //tagName = 'news'
    
    cy.get(`a[href="#/editor/post/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step01`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get('.gh-editor-title').clear().type('News');
    cy.screenshot(`${ESCENARIO}_step02`);

    cy.get(`.koenig-editor__editor-wrapper`).first().click();
    cy.screenshot(`${ESCENARIO}_step03`);

    cy.get('button.gh-btn.gh-editor-preview-trigger').click();
    cy.screenshot(`${ESCENARIO}_step04`);
   
    cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.green.gh-publishmenu-trigger').click();
    cy.screenshot(`${ESCENARIO}_step05`);

    cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.screenshot(`${ESCENARIO}_step06`);

    cy.get('button.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
    cy.screenshot(`${ESCENARIO}_step07`);
   
  });
})
