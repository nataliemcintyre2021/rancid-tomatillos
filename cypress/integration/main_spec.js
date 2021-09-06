beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

describe('Main movie cards display of App', () => {

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should show a loading message while the movie data is being fetched', () => {
    cy.get('p').contains('Loading...')
  })

  it('Should render a header component', () => {
    cy.get('header').find('nav').contains('Rancid Tomatillos')
  })

  it('Should render a component that displays all the movie cards', () => {
    cy.get('.main-section').children()
      .find('h2').contains('All Movies')
    cy.get('main').find('.row-of-posters')
  })

  it('Should display 40 movie cards', () => {
    cy.get('main').find('a').should('have.length', 40)
  });

  it('Should render a list that ranks movies from highest to lowest rating', () => {
    cy.get('.list-wrapper').find('h2').contains('Movies by Ratings')
    cy.get('ul').find('li').should('have.length', 40)
  })

  it('Should display render a footer component', () => {
    cy.get('footer').find('h4').contains('Project Developers')
  });

  it('Should fecth data for the 2 stubbed movies cards and render the correpsonding elements', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies'}).as('movies')
    cy.wait('@movies').then((interception) => {
      'response.ok'
    })
    cy.get('.main-section').children().find('h2').contains('All Movies')
    cy.get('.main-section').children().find('.search-bar').type('Money').get
    cy.get('main').find('a').should('have.length', 2)
    cy.get('.list-wrapper').find('h2').contains('Movies by Ratings')
    cy.get('ul').find('li').should('have.length', 2)
  })

})// End describe block
