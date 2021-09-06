beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

describe('Main movie cards display of App', () => {

  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  })

  it('Should show a loading message while the movie data is being fetched', () => {
    cy.get('p').contains('Loading... 😎')
  })

  it('Should render a header component', () => {
    cy.get('header').find('nav').contains('Rancid Tomatillos')
  })

  it('Should render a search bar input and a label', () => {
    cy.get('input')
    cy.get('label').contains('Search By Title')
  })

  it('Should render a component that displays all the movie cards', () => {
    cy.get('.posters-container').find('h2').contains('All Movies')
    cy.get('main').find('.row-of-posters')
  })

  it('Should display 40 movie cards', () => {
    cy.get('main').find('a').should('have.length', 40)
  });

  it('Should render a list that ranks movies from highest to lowest rating', () => {
    cy.get('.list-wrapper').find('h2').contains('Movies by Ratings')
    cy.get('ul').find('li').should('have.length', 40)
  })

  it('Should render a footer component', () => {
    cy.get('footer').contains('Project Developers:')
  });

  it('Should fecth data for the 2 stubbed movies cards and render the correpsonding elements', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies'}).as('movies')
    cy.visit('http://localhost:3000/')
    cy.wait('@movies').then((interception) => {
      'response.ok'
    })
    cy.get('main').find('h2').contains('All Movies')
    cy.get('main').find('a').should('have.length', 2)
    cy.get('.list-wrapper').find('h2').contains('Movies by Ratings')
    cy.get('ul').find('li').should('have.length', 2)
  })

  it('Should be able to search for movies by title', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies'}).as('movies')
    cy.visit('http://localhost:3000/')
    cy.wait('@movies').then((interception) => {
      'response.ok'
    })
    cy.get('input').type('Mon')
    cy.get('main').find('a').should('have.length', 1)
  })

  it('Should be able to visit the found movie\'s info page', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', { fixture: 'movies'}).as('movies')
    cy.visit('http://localhost:3000/')
    cy.wait('@movies').then((interception) => {
      'response.ok'
    })
    cy.get('input').type('Mon')
    cy.get('main').find('a').click()
    cy.url().should('include', '/694919')
  })


})// End describe block
