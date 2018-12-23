describe('Test for support of Images', () => {
    it('Must find an image imported via JS "import" declaration', () => {
        cy.get('#image-via-js')
    })

    it('Must find an image import as a background-image url() function', () => {
        cy.get('#image-via-css')
        .should('have.css', 'background-image')
    })
})