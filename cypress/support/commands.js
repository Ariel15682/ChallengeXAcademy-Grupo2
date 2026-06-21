Cypress.Commands.add('navigate', () => {
  cy.visit('https://automationintesting.online')
  cy.get(':nth-child(1) > .nav-link').click()

  cy.get('.row > :nth-child(1) > .card > .card-body > .card-title')
    .should('be.visible')
    .and('contain', 'Single')

  cy.get(':nth-child(1) > .card > .card-footer > .btn')
    .click()
  cy.get('.rbc-calendar')
})

Cypress.Commands.add('reserveOk', (checkin, checkout) => {

  cy.fixture('registerNewReservation').then((data) => {

    cy.visit(
      `https://automationintesting.online/reservation/1?checkin=${checkin}&checkout=${checkout}`
    )

    cy.get('#doReservation')
      .should('be.visible')
      .and('contain', 'Reserve Now')
      .click()

    cy.get('[name="firstname"]')
      .clear()
      .type(data.reservationRegisterOk.Name)

    cy.get('[name="lastname"]')
      .clear()
      .type(data.reservationRegisterOk.LastName)

    cy.get('[name="email"]')
      .clear()
      .type(data.reservationRegisterOk.email)

    cy.get('[name="phone"]')
      .clear()
      .type(data.reservationRegisterOk.phone)
  })
})
