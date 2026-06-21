describe ('Rooms',() =>{
 
    const link = 'https://automationintesting.online'

  beforeEach(() => {
    cy.visit(link)
    
  })

  it ('Verificacion del boton "Today" en single room', () => {
     cy.navigate()
     cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)').should('be.visible').and('contain', 'Today').click()
  })
  
  it('Verificacion del boton "Back" en single room', () => {
    cy.navigate()
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(2)').should('be.visible').and('contain', 'Back').click()  
 })

  it('Verificacion del boton "Next" en single room',() => {
    cy.navigate()
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(3)').should('be.visible').and('contain', 'Next').click()
  })
  
  it('Verificacion de reserva fallida de single rooms, mes anterior',()=>{
    cy.navigate()
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(2)').should('be.visible').and('contain', 'Back').click()
    cy.get('.rbc-calendar')
    cy.get('.rbc-day-bg')
    cy.reserveOk('2026-05-01', '2026-05-07')
    cy.get('.btn-primary')
    .should('be.visible')
    .and('contain','Reserve Now')
    .click()
    
    
  })
  
  it('Verificacion de reserva fallida de single rooms en dias pasados',()=> {
    cy.navigate()
    cy.get('.rbc-day-bg')
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)')
    .and('contain','Today')
    .click()
    cy.reserveOk('2026-06-01', '2026-06-07')
    cy.get('.btn-primary')
    .should('be.visible')
    .and('contain','Reserve Now')
    .click()
    
    
  })

  it('Verificacion de reserva exitosa',()=> {
    cy.navigate()
    cy.get('.rbc-day-bg')
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)')
    .and('contain','Today')
    .click()
    cy.reserveOk('2026-06-29', '2026-07-08')
    cy.get('.btn-primary')
    .should('be.visible')
    .and('contain','Reserve Now')
    .click()
    
    
  })

   it('Verificacion de reserva fallida con datos invalidos',()=> {
    cy.navigate()
    cy.get('.rbc-day-bg').scrollIntoView()
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)').scrollIntoView()
    .and('contain','Today').scrollIntoView()
    .click()
    cy.reserveDateFail('2026-06-29', '2026-07-08')
    cy.get('.btn-primary')
    .should('be.visible')
    .and('contain','Reserve Now')
    .click()

  })

it ('Verificacion de seleccion de otras alternativas de rooms', () => {
     cy.navigate()
     cy.get('.container > .fs-4').scrollIntoView()
     .and('contain','Similar Rooms You Might Like')
     cy.get(':nth-child(1) > .card > .card-body > .card-title')
     .and('contain','Double')
     cy.get(':nth-child(1) > .card > .card-body > .btn')
     .and('contain','View Details')
     .click()
  })


    
     
  



})