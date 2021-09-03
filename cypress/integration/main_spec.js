beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('Main movie cards display of App', () => {

  it('Should confirm that true is equal to be true', () => {
    expect(true).to.equal(true)
  })

  it('Should display the correct elements on page load', () => {
    cy.get('main').find('div')

  });

  it('Should display 40 movie cards', () => {
    cy.get('main').find('a').should('have.length', 40)
  });

  it('Should fecth data for the 40 movies cards', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixtures: 'movies.json'}).as('moviesRoute')
    cy.visit('http://localhost:3000')
    cy.wait('@moviesRoute').then((interception) => {
      'response.ok'
    })
  })

})// End describe block
