describe('Code Splitting Support', () => {
	it('Must click a link and import a JS Chunk', () => {
		cy.visit('/')

		cy.get('.code-splitting-btn')
			.click()

		cy.contains('This is some text within a chunk')
	})
})
