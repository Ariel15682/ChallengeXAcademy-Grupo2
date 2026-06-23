Cypress.Commands.add('navigateSingle', () => {
  cy.visit('https://automationintesting.online/')
  cy.get(':nth-child(1) > .nav-link').click()
  cy.get('.row > :nth-child(1) > .card > .card-body > .card-title')
    .should('be.visible')
    .and('contain', 'Single')
  cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
  cy.get('.rbc-calendar')
  
})

Cypress.Commands.add('navigateDouble', () => {
  cy.visit('https://automationintesting.online/')
  cy.get(':nth-child(1) > .nav-link').click()
  cy.get(':nth-child(2) > .card > .card-body > .card-title')
    .should('be.visible')
    .and('contain', 'Double')
  cy.get(':nth-child(2) > .card > .card-footer > .btn').click()
  cy.get('.rbc-calendar')
  
})

Cypress.Commands.add('navigateSuite', () => {
  cy.visit('https://automationintesting.online/')
  cy.get(':nth-child(1) > .nav-link').click()
  cy.get(':nth-child(3) > .card > .card-body > .card-title')
    .should('be.visible')
    .and('contain', 'Suite')
  cy.get(':nth-child(3) > .card > .card-footer > .btn').click()
  cy.get('.rbc-calendar')
  
})

Cypress.Commands.add('reserveOk', (roomId, checkin, checkout) => {

  cy.fixture('registerNewReservation').then((data) => {

    cy.visit(`https://automationintesting.online/reservation/${roomId}?checkin=${checkin}&checkout=${checkout}`)

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


Cypress.Commands.add('reserveDateFail', (roomId, checkin, checkout) => {

  cy.fixture('registerNewReservation').then((data) => {

    cy.visit(`https://automationintesting.online/reservation/${roomId}?checkin=${checkin}&checkout=${checkout}`)

    cy.get('#doReservation')
      .should('be.visible')
      .and('contain', 'Reserve Now')
      .click()

    cy.get('[name="firstname"]')
      .clear()
      .type(data.reservationRegisterError.Name)

    cy.get('[name="lastname"]')
      .clear()
      .type(data.reservationRegisterError.LastName)

    cy.get('[name="email"]')
      .clear()
      .type(data.reservationRegisterError.email)

    cy.get('[name="phone"]')
      .clear()
      .type(data.reservationRegisterError.phone)
  })
})

Cypress.Commands.add('reserveDateEmpty', (roomId, checkin, checkout) => {

  cy.fixture('registerNewReservation').then((data) => {

    cy.visit(`https://automationintesting.online/reservation/${roomId}?checkin=${checkin}&checkout=${checkout}`)

    cy.get('#doReservation')
      .should('be.visible')
      .and('contain', 'Reserve Now')
      .click()
  })
})