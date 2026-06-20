Cypress.Commands.add('accederPaginaAdmin', () => {
  cy.visit('https://automationintesting.online/admin/')
})

Cypress.Commands.add('navigate', () => {
  cy.get('.nav-link')
    .contains('Rooms')
    .click()

  cy.get('.card-title')
    .contains('Single')
    .should('be.visible')

  cy.contains('button, a', 'Book Now')
    .click()
})