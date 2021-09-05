describe('Expanded single movie poster view flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Should confirm true to be true', () => {
    expect(true).to.equal(true)
  })

  it('Should update url to expanded view page of movie upon user click of specific movie poster', () => {
    cy.get('.single-poster').first().click()
    cy.url().should('include', '/694919')
  })

  it('Should render a header', () => {
    cy.get('.single-poster').first().click()
    cy.get('header')
      .contains('Nav goes here')
  })

  it('Should render a footer', () => {
    cy.get('.single-poster').first().click()
    cy.get('footer')
      .contains('Footer goes here')
  })

  it('Should fetch data for first movie card and render the correpsonding elements', () => {
    cy.visit('http://localhost:3000/694919')
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'moneyplane'}).as('moneyplane')
    cy.wait('@moneyplane').then((interception) => {
      'response.ok'
    })

      .get(".movie-image")
        .should('have.attr', 'style')
        .and('equal', 'background-image: url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"); background-size: cover; height: 75vh;')

      .get(".title")
        .contains('Money Plane')

      .get(".release-date")
        .contains('2020')

      .get(".genre")
        .contains('Action')

       .get(".runtime")
          .contains("82 minutes")

       .get(".overview")
         .contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
  })

  it('Should show error page if bad url typed in', () => {
      cy.visit('http://localhost:3000/694')
      cy.get('.no-page')
        .find('p')
        .contains('404 No page found.')
  })
})
