describe('Rooms - Crear', () => {
  beforeEach(() => {
    cy.loginAdmin()   // reutiliza el comando
    cy.contains('Rooms').click()
  })

  it('Crear habitación válida', () => {
    cy.get('[data-testid="roomName"]').type('666')
    cy.get('#type').select('Twin')
    cy.get('#accessible').select('true')
    cy.get('#roomPrice').type('666')
    cy.get('#createRoom').click()

    cy.contains('666').should('be.visible')
  })
})

