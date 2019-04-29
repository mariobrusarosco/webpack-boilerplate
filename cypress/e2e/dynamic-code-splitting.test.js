describe('Testing Code Splitting using import()', () => {
  it('Must check a string rendered by a chunk. Which is loaded via a click()', () => {
    cy.visit('/')

    cy.get('.code-splitting-btn').click()

    cy.contains('This is some text within a chunk')
  })
})
