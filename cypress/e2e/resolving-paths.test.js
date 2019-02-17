
describe('Testing if this build supports webpack custom path resolution', () => {
	it('Must find a specific text rendered via webpack custom path resolution', () => {
		cy.visit('/')

		cy.get('.resolving-paths')
			.contains('This is some text')
	})
})
