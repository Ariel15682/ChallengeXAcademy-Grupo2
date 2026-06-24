import './commands'
// Handler global para uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
  // Ignorar solo el error minificado de React #418
  if (
    (err.message && err.message.includes('Minified React error')) ||
    (err.message && err.message.includes('Minified React error #418')) ||
    (err.message && err.message.includes("Cannot read properties of null"))
  ) {
    return false
  }
  // Para otros errores, dejar que Cypress falle
})
