describe('Webpack Test', () => {
    it('Plain CSS support', () => {
        cy.visit('/')
            .get('.text-styled')
            .should('have.css','color','rgb(0, 0, 255)',)
    })
})