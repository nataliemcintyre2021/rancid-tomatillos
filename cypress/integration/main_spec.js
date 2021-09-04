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

  it('Should render a header component', () => {
    cy.get('header').find('nav').contains('Nav goes here')
  })

  it('Should render a component that displays all the movie cards', () => {
    cy.get('main div:first').find('h2').contains('All Movies')
    cy.get('main').find('.row-of-posters')
  })

  it('Should display the correct elements on page load', () => {


    cy.get('.list-wrapper').find('h2').contains('Movies by Ratings')
    cy.get('ul').find('li').should('have.length', 40)
    cy.get('footer').contains('Footer goes here')
  });

  it('Should display 40 movie cards', () => {
    cy.get('main').find('a').should('have.length', 40)
  });

  it('Should fecth data for the 2 stubbed movies cards', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies'}).as('movies')
    cy.visit('http://localhost:3000/movies')
    cy.wait('@movies').then((interception) => {
      'response.ok'
    })
    cy.get('main div:first').find('h2').contains('All Movies')
    cy.get('main').find('a').should('have.length', 2)
    cy.get('.list-wrapper').find('h2').contains('Movies by Ratings')
    cy.get('ul').find('li').should('have.length', 2)
  })

})// End describe block
