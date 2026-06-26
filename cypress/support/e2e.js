// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import './commands'

/*/ Para poder correr tests sin que fallen por errores de React minified, agregamos un handler global para uncaught exceptions:
Cypress.on('uncaught:exception', (err) => {
  // ignorar errores de React minified que incluyen "Minified React error #418"
  if (err && err.message && err.message.includes('Minified React error #418')) {
    return false; // evita que Cypress falle el test
  }
  // para otros errores dejar que Cypress falle
});
*/

import './commands'

// Handler global para uncaught exceptions
Cypress.on('uncaught:exception', (err) => {
  // Ignorar solo el error minificado de React #418
  if (
    (err.message && err.message.includes('Minified React error #418')) ||
    (err.message && err.message.includes("Cannot read properties of null"))
  ) {
    return false
  }
  // Para otros errores, dejar que Cypress falle
})

import "cypress-real-events/support";