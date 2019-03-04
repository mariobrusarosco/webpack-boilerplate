describe('ES New Features', () => {
  before(function() {
    cy.visit('/')
  })

  describe('Optional Chaining Operator Support', () => {
    it('must render a template literal made with optional chaining operators', () => {
      cy.get(`[data-info='optional-chaining-operator-success']`)
        .contains('Walter Heisenberg White')
    })

    it(`must render 'no undefined errors here' to prove that previous errors caused by accessing a 'method of undefined' are prevent with 'optional-chaining-operator'`, () => {
      cy.get(`[data-info='optional-chaining-operator-success-fallback']`)
        .contains('no undefined errors here')
    })
  })

  describe('Class Properties Proposal', () => {
    it(`must render a class made with 'Class Properties Proposal' syntax`, () => {
      cy.get(`[data-info='transform-class-proposal']`)
        .contains(`This text was created inside a Class, without a constructor, unsing '@babel/plugin-proposal-class-properties'`)
    })
  })

})

