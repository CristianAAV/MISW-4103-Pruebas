describe('Funcionalidad de crear tags', () => {
  const ESCENARIO = '09-tag-pseudoaleatorio-xcard-title-descripcion-invalidos'
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
  
  it('Escenario 09 pseudoaleatorio: Crear tag cuyo titulo y descripcion en la seccion x-card son invalidos', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.finalizarPaso(`${ESCENARIO}_step02`);

    //Ingresar datos principales del nuevo tag
    const tagName = dataPool.name;
    const tagDescription = dataPool.description;
    cy.get('input[name="name"]').type(tagName);  
    cy.get('#tag-description').type(tagDescription);  
    cy.finalizarPaso(`${ESCENARIO}_step03`);

    //Ingresar valores a la seccion Xcard
    cy.get('.gh-btn.gh-btn-expand').eq(1).click()
    const tagXcardTitle = dataPool.xcard_title_invalid;
    const tagXcardDescription = dataPool.xcard_description_invalid;
    cy.get('#twitter-title').type(tagXcardTitle);
    cy.get('#twitter-description').type(tagXcardDescription);  
    cy.finalizarPaso(`${ESCENARIO}_step04`);

    //Guardar
    cy.get('section .view-actions button').click();
    cy.finalizarPaso(`${ESCENARIO}_step05`);
    
    //Se verifica que los datos son invalidos
    cy.get(`span`).contains(`Retry`).should('exist');    
    cy.finalizarPaso(`${ESCENARIO}_step06`);
  });
})