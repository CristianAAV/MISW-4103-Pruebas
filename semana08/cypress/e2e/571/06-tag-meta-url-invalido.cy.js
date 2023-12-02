import { faker } from '@faker-js/faker';

describe('Crear tags', () => {
  const SECCION = 'tags';
  const ESCENARIO = '06-tag-meta-url-invalido'

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);
  });  

  it('Escenario 06: Crear tag cuya url en la seccion meta es invalido', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = faker.string.alpha(10);
    const tagDescription = faker.string.alpha(10);
    cy.get('#tag-description').type(tagDescription);
    cy.get('input[name="name"]').type(tagName);  
    cy.screenshot(`${ESCENARIO}_step03`);
    
    
    //Ingresar valores a la seccion Meta
    cy.get('.gh-btn.gh-btn-expand').eq(0).click()
    const tagMetaTitle = faker.string.alpha(10);
    cy.get('#meta-title').type(tagMetaTitle);  
    const tagMetaCanonicalUrl = faker.string.alpha(4);
    cy.get('#canonical-url').type(tagMetaCanonicalUrl);

    //Guardar el tag
    cy.get('section .view-actions button').click();
    cy.screenshot(`${ESCENARIO}_step04`);

    //Se verifica que los datos son invalidos
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.screenshot(`${ESCENARIO}_step05`);    
  });
})
