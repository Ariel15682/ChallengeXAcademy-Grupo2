// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('NavigateToLocationModule', ()=> {
    cy.visit('https://automationintesting.online/')
    cy.contains('a', 'Location').click()
})

Cypress.Commands.add('NavigateToContactInformacion', ()=> {
    cy.contains('h3','Contact Information').scrollIntoView().should('be.visible')
})

Cypress.Commands.add('VerifyTitleAndSubtitleLocationModuleIsVisible',() => {
    cy.get('.pigeon-tiles-box').should('be.visible')
    cy.get('.pigeon-click-block svg').should('exist').and('be.visible')   
    cy.contains('h3', 'Contact Information').should('be.visible')
})

Cypress.Commands.add('VerifyMapIsVisible',() => {
    cy.contains('h2', 'Our Location').should('be.visible')
    cy.contains('p', 'Find us in the beautiful Newingtonfordburyshire countryside').should('be.visible')
})

Cypress.Commands.add('VerifyAddressInformacion',() => {
    cy.get('i.bi-geo-alt').should('be.visible');
    cy.contains('h5', 'Address').should('be.visible')
    cy.get('.mb-0').should('be.visible').contains('Shady Meadows B&B, Shadows valley, Newingtonfordburyshire, Dilbery, N1 1AA')
})

Cypress.Commands.add('VerifyPhoneInformacion',() => {
    cy.get('.bi-telephone').should('be.visible')
    cy.contains('h5', 'Phone').should('be.visible')
    cy.contains('p', '012345678901').should('be.visible')
})

Cypress.Commands.add('VerifyEmailInformacion',() => {
    cy.get('.bi-envelope').should('be.visible')
    cy.contains('h5', 'Email').should('be.visible')
    cy.get('.mb-0').should('be.visible').contains('fake@fakeemail.com')
})

Cypress.Commands.add('VerifyGettingHereInformacion',() => {
    cy.contains('h4', 'Getting Here').should('be.visible')
    cy.contains('p', 'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.').should('be.visible')
})

Cypress.Commands.add('verifyPigeonLinkIsVisibleAndRedirects', () => {
    cy.get('.pigeon-attribution').should('be.visible')
    cy.contains('a', 'Pigeon')  .should('have.attr', 'href', 'https://pigeon-maps.js.org/')
})

Cypress.Commands.add('verifyOpenStreetMapLinkIsVisibleAndRedirects', () => {
    cy.get('.pigeon-attribution').should('be.visible')
    cy.contains('a', 'OpenStreetMap')
      .should('be.visible')
      .and('have.attr', 'target', '_blank')
      .and('have.attr', 'rel', 'noreferrer noopener')
      .and('have.attr', 'href', 'https://www.openstreetmap.org/copyright')
  })
  

