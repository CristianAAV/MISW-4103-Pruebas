import { faker } from '@faker-js/faker';

describe('Funcionalidad de publicar posts', () => {
    const SECCION = 'posts';
    const ESCENARIO = '07-post-con-solo-descripcion'
  
    beforeEach('Realizar Login', () => {
      cy.hacerLoginCorrecto();
      cy.screenshot(`${ESCENARIO}_step01`);  
    });

    it('Escenario 13: Crear post con solo descripcion y sin titulo', () => {    
        cy.navegarSeccion(SECCION);
        cy.get(`a[href="#/editor/post/"]`).first().click({ force: true });
        cy.screenshot(`${ESCENARIO}_step02`);

        cy.get('[data-test-editor-title-input]').first().click({ force: true });
        cy.screenshot(`${ESCENARIO}_step03`);

        const postDescription = faker.string.alpha(150).toLocaleLowerCase();
        cy.get(`.kg-prose`).type(postDescription);
        cy.screenshot(`${ESCENARIO}_step04`);

        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click({ force: true });
        cy.screenshot(`${ESCENARIO}_step05`);
    
        cy.get('button.gh-btn.gh-btn-black.gh-btn-large').click({ force: true });
        cy.screenshot(`${ESCENARIO}_step06`);

        cy.get('button.gh-btn.gh-btn-large.gh-btn-pulse.ember-view').click({ force: true });
        cy.screenshot(`${ESCENARIO}_step07`);
    
    });
})

    
    