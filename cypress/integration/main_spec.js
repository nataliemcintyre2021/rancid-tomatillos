beforeEach(() => {
  cy.visit('http://localhost:3000/movies')
})

describe('Main movie cards display of App', () => {

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should show a loading message while the movie data is being fetched', () => {
    cy.get('p').contains('Loading...')
  })

  it('Should display the correct elements on page load', () => {
    cy.get('header').find('nav').contains('Nav goes here')
    cy.get('main div:first').find('h2').contains('All Movies')
    cy.get('main').find('.row-of-posters')
    cy.get('ul').find('li').should('have.length', 40)

  });

  it('Should display 40 movie cards', () => {
    cy.get('main').find('a').should('have.length', 40)
  });

  it('Should fecth data for the 40 movies cards', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixtures: 'movies.json'}).as('moviesRoute')
    cy.wait('@moviesRoute').then((interception) => {
      'response.ok'
    })
  })

  it('Should')

})// End describe block
