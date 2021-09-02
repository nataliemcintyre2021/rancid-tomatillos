beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('Main movie cards display of App', () => {

  it('Should confirmt that true is equal to be true', () => {
    expect(true).to.equal(true)
  })

  it('Should display the correct elements on page load', () => {
    cy.get('main').find('div')

  });

  it('Should display 40 movie cards', () => {
    cy.get('main').find('div').find('div').find('div').should('have.length', 40)
  });

  it('Should fecth data for the 40 movies cards', () => {

  })

})// End describe block
