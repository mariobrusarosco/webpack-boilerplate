describe('', () => {
	it('', () => {
		cy.visit('/')

		cy.get('.code-splitting-btn')
			.click()

		cy.contains('This is some text within a chunk')
	})
})
