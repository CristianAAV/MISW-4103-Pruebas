describe('Funcionalidad de crear member', () => {
  const ESCENARIO = '14-member-crear-nombre-correo-validos-Pseudo-Aleatorio'
  const SECCION = 'members';
  let dataPool = {}

  beforeEach('Realizar Login', () => {
    cy.hacerLoginCorrecto();
    cy.screenshot(`${ESCENARIO}_step01`);

  
    //Recuperar datos desde la URL correspondiente
    const urlDataPool = Cypress.env('dataPoolPseudoAleatorio')["member"];
    cy.request(urlDataPool).then((response) => {
      dataPool = response.body;
    });
  });
  
  // el correo es correcto y no se tiene nombre
  it('Escenario # apriori: Crear member nombre y correo validos', () => {    
    cy.navegarSeccion(SECCION);
    cy.get(`a[href="#/${SECCION}/new/"]`).first().click();
    cy.screenshot(`${ESCENARIO}_step02`);

    //Ingresar datos
    const email = dataPool.email;
    const name = dataPool.name;
    cy.get('#member-name').type(name);  
    cy.get('#member-email').type(email);  
    cy.screenshot(`${ESCENARIO}_step03`);

    //Guardar
    cy.get('[data-test-button="save"]').click();
    cy.screenshot(`${ESCENARIO}_step04`);
    cy.wait(500)
    
    //Se verifica que los datos son validos
    cy.get('[data-test-button="save"] span[data-test-task-button-state="success"]').should('include.text', 'Saved');
    cy.screenshot(`${ESCENARIO}_step05`);
  });
})