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
    cy.get('[data-test-editor-title-input]').clear().type('News');
    cy.screenshot(`${ESCENARIO}_step02`);

    cy.get(`.kg-prose`).first().click();
    cy.screenshot(`${ESCENARIO}_step03`);

    cy.get('button.gh-btn.gh-btn-editor.gh-editor-preview-trigger').click();
    cy.screenshot(`${ESCENARIO}_step04`);
   
  });
})
