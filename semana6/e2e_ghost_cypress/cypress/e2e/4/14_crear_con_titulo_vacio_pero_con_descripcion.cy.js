import { faker } from '@faker-js/faker';

describe('Funcionalidad de crear posts', () => {
    const seccion = 'posts';
    let tagName = '';
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
  });
  
  it('Escenario 14: Crear con titulo vacio pero con descripcion', () => {    
    const ESCENARIO = 'escenario14'
    cy.navegarSeccion(seccion);
    //tagName = 'news'
    
    cy.get(`a[href="#/editor/post/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step01`);

    cy.get('.gh-editor-title').first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    tagName = faker.string.alpha(10).toLowerCase();
    cy.get(`.koenig-editor__editor-wrapper`).clear().type('News');
    cy.screenshot(`${ESCENARIO}_step03`);

    cy.get('div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger').click();
    cy.screenshot(`${ESCENARIO}_step04`);

    cy.get('button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view').click();
    cy.screenshot(`${ESCENARIO}_step05`);

    cy.get('button.gh-btn.gh-btn-black.gh-btn-icon.ember-view').click();
    cy.screenshot(`${ESCENARIO}_step06`);
   
  });
})
