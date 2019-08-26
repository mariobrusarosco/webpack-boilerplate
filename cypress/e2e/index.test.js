// E2E Data
const APP = require('../../src/app-configuration.json')
const { E2E, ROOT_URL } = APP

describe('Initial Fetch', () => {
  it('Must verify if the App was bootstraped', () => {
    cy.visit('/')

    console.log(E2E.HOME)
    // Check if Home Component was loaded
    cy.get(`[data-id=${E2E.HOME}]`)
  })

  // it('Must go to Viva Real Route', () => {
  //   // Go to Viva Real Route
  //   cy.get(`a[href="/viva"]`).click()

  //   // Check the correct window location Hash
  //   cy.url().should('include', '/viva')

  //   // Check if the VIVA REAL Page Component was correctly loaded
  //   cy.get(`[data-id="${E2E.VIVA_REAL_PAGE}"]`)
  // })

  // it('Must go back to Home Page', () => {
  //   // Select the Header
  //   cy.get(`[data-id=${E2E.HEADER}]`)
  //     // Find a link that redirects to the ROOT URL
  //     .find(`a[href="${ROOT_URL}"]`)
  //     .click()
  // })

  // it('Must go to Zap Route', () => {
  //   // Go to Viva Real Route
  //   cy.get(`a[href="/zap"]`).click()

  //   // Check the correct window location Hash
  //   cy.url().should('include', '/zap')

  //   // Check if the VIVA REAL Page Component was correctly loaded
  //   cy.get(`[data-id="${E2E.ZAP_PAGE}"]`)
  // })
})
