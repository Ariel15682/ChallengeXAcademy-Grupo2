describe ('Rooms',() =>{
 
    const link = 'https://automationintesting.online'

  beforeEach(() => {
    cy.visit(link)
    
  })

  it ('Verificacion del boton "Today" en single room', () => {
     cy.navigate()
     cy.get('.rbc-toolbar')
     cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)').should('be.visible').and('contain', 'Today').click()
  })
  
  it('Verificacion del boton "Back" en single room', () => {
    cy.navigate()
    cy.get('.rbc-toolbar')
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(2)').should('be.visible').and('contain', 'Back').click()  
 })

  it('Verificacion del boton "Next" en single room',() => {
    cy.navigate()
    cy.get('.rbc-toolbar')
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(3)').should('be.visible').and('contain', 'Next').click()
  })
  
  it('Verificacion de reserva fallida de single rooms',()=>{
    cy.navigate()
    cy.get('.rbc-toolbar')
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(2)').should('be.visible').and('contain', 'Back').click()
    cy.get('.rbc-calendar')
    cy.get('.rbc-day-bg')
    cy.contains('.rbc-button-link', '01')
    cy.get('.rbc-day-bg')
    cy.contains('.rbc-button-link', '07')
    cy.get('.rbc-month-row')
  
    
  })
  
  it('Verificacion de reserva fallida de single rooms')
    
    cy.navigate()
    cy.get('.rbc-toolbar')
    cy.get('.rbc-calendar')
    cy.get('.rbc-day-bg')
    cy.contains('.rbc-button-link', '01')
    cy.get('.rbc-day-bg')
    cy.contains('.rbc-button-link', '07')
    cy.get('.rbc-month-row')
  
  



})