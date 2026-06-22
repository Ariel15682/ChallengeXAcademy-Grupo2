/// <reference types="cypress" />

// myTestRestfulBooker.cy.js
// Flujos requeridos por la consigna (punto 3) del Challenge
// Web bajo prueba: https://automationintesting.online/


describe('Restful Booker - Flujos principales', () => {
  beforeEach(() => {
    // Cada test arranca de cero en la Home, así son independientes entre sí.
    cy.visit('/')
  })

  // ------------------------------------------------------------------
  // 3.1-Reserva exitosa como usuario invitado
  // ------------------------------------------------------------------
  it('Permite reservar una habitación como invitado con datos válidos', () => {
    cy.fixture('bookingData').then((data) => {
      const guest = data.guest

      // 1. Se muestran habitaciones disponibles en la página principal.
      //    Cada habitación ofrece un botón para reservar.
      cy.contains(/book now/i).should('be.visible') // [CONFIRMAR] texto del botón de la habitación

      // 2. Seleccionar una habitación y abrir el formulario de reserva.
      //    "Book now" navega a /reservation/{id} usando las fechas por defecto del Home.
      cy.contains(/book now/i).first().click()
      cy.contains('button', 'Reserve Now').click() // [CONFIRMAR] abre el formulario de reserva

      // 3. Completar el formulario con datos válidos.
      cy.get('input[placeholder="Firstname"]').type(guest.firstname) // [CONFIRMAR] selectores del form
      cy.get('input[placeholder="Lastname"]').type(guest.lastname)
      cy.get('input[placeholder="Email"]').type(guest.email)
      cy.get('input[placeholder="Phone"]').type(guest.phone)

      // 4. Confirmar la reserva y validar el mensaje de éxito.
      cy.contains('button', 'Reserve Now').click() // [CONFIRMAR] botón de envío
      cy.contains('Booking Confirmed').should('be.visible') // [CONFIRMAR] texto de éxito
    })
  })

  // ------------------------------------------------------------------
  // 3.2-Validaciones del formulario de reserva
  // ------------------------------------------------------------------
  it('Muestra errores al enviar el formulario de reserva vacío', () => {
    // Llegar al formulario de reserva.
    cy.contains(/book now/i).first().click()
    cy.contains('button', 'Reserve Now').click() // abre el formulario

    // 1. Intentar enviar el formulario sin completar ningún campo.
    cy.contains('button', 'Reserve Now').click()

    // 2. Aparecen los mensajes de error correspondientes.
    cy.contains(/must not be empty|size must be|well-formed/i).should('be.visible') // [CONFIRMAR]

    // 3. No se realizó ninguna reserva (no aparece la confirmación).
    cy.contains('Booking Confirmed').should('not.exist')
  })

  // ------------------------------------------------------------------
  // 3.3-Formulario de contacto
  // ------------------------------------------------------------------
  it('Permite enviar el formulario de contacto con datos válidos', () => {
    cy.fixture('bookingData').then((data) => {
      const contact = data.contact

      // 1. Completar el formulario de contacto con datos válidos.
      cy.get('#name').type(contact.name) // [CONFIRMAR] ids del form de contacto
      cy.get('#email').type(contact.email)
      cy.get('#phone').type(contact.phone)
      cy.get('#subject').type(contact.subject)
      cy.get('#description').type(contact.message)

      // 2. Enviar el mensaje y validar que se muestra la confirmación.
      cy.contains('button', 'Submit').click() // [CONFIRMAR] botón de envío
      cy.contains('Thanks for getting in touch').should('be.visible') // [CONFIRMAR] confirmación
    })
  })
})
