describe('Funcionalidad de crear tags', () => {
  const ESCENARIO = '10-tag-pseudoaleatorio-fb-title-descripcion-invalidos';
  const SECCION = 'tags';
  let dataPool = {}

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.finalizarPaso(`${ESCENARIO}_step01`);
    
    //Recuperar datos desde la URL correspondiente
    const urlDataPool = Cypress.env('dataPoolPseudoAleatorio')["tag"];
    cy.request(urlDataPool).then((response) => {
      dataPool = response.body;
    });
  });
  
  it('Escenario 10 pseudoaleatorio: Crear tag con titulo y descripcion invalidos en la seccion facebook', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = dataPool.name;
    cy.get('input[name="name"]').type(tagName);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);
    
    //Ingresar datos en la seccion Meta
    cy.get('.gh-btn.gh-btn-expand').eq(0).click()
    const tagMetaTitle = dataPool.meta_title_invalid;
    cy.get('#meta-title').type(tagMetaTitle);  
    const tagMetaDescription = dataPool.meta_description_invalid;
    cy.get('#meta-description').type(tagMetaDescription);
    cy.finalizarPaso(`${ESCENARIO}_step04`);

    //Guardar
    cy.get('section .view-actions button').click();
    cy.finalizarPaso(`${ESCENARIO}_step05`);
    
    //Se verifica que los datos son invalidos
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.finalizarPaso(`${ESCENARIO}_step06`);
  });
})