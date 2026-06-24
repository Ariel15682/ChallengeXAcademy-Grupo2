// Comando para loguearse como admin
Cypress.Commands.add('loginAdmin', () => {
  const base = 'https://automationintesting.online/admin/'

  cy.visit(base)

  // esperar que el formulario esté visible
  cy.get('form').should('be.visible')

  cy.fixture('user_ok').then((user) => {
    cy.get('#username').should('be.visible').clear().type(user.Username)
    cy.get('#password').should('be.visible').clear().type(user.Password)
    cy.get('#doLogin').should('be.enabled').click()

    // Validación de redirección
    cy.url({ timeout: 10000 }).should('include', '/admin/rooms')
  })
})


// Abre la Home usando el baseUrl definido en cypress.config.js
Cypress.Commands.add('openHome', () => {
  cy.visit('/')
})


// Verifica el layout base del sitio
// El sitio usa una barra de navegación <nav class="navbar"> y no <header>
Cypress.Commands.add('verifyBaseLayout', () => {
  cy.get('body').should('be.visible').and('not.be.empty')
  cy.get('nav').should('be.visible')

  // El pie de página existe aunque esté debajo del fold
  cy.get('footer, .footer, [class*="footer" i]')
    .first()
    .should('exist')
})


// Hace click en un link del menú de navegación según su texto
// Los links del menú son <a class="nav-link" href="#..."> dentro del <nav>
Cypress.Commands.add('clickHeaderLink', (label) => {
  cy.get('nav')
    .contains('a', label)
    .should('be.visible')
    .click()
})


// Localiza el input asociado a un texto/label cercano y lo deja seleccionable
Cypress.Commands.add('getInputNearText', (text) => {
  cy.contains(text)
    .should('be.visible')
    .parent()
    .find('input')
    .first()
    .should('be.visible')
})
