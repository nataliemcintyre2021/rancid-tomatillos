beforeEach(() => {
  cy.visit('http://localhost:3000/dashboard');
});

describe('Expanded single movie poster view flow', () => {
  it('Should be able to click on movie poster and see expanded view of single movie', () => {
    cy.get(".single-poster").first().click()
    // cy.intercept({
    //   method: 'GET',
    //   url: '',
    // })
    cy.get(".movie-image")
      .should('have.attr', 'style')
      .and('equal', 'background-image: url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"); background-size: cover; height: 75vh;')
  //   cy.intercept()
  //do intercept and stub here and check to see if new movie loaded and new URL from router
})

  it('Should be able to see title of expanded movie', () => {
    cy.get(".single-poster").first().click()
    cy.get(".title")
      .contains('Money Plane')
  })

  // it('Should be able to see rating of expanded movie', () => {
  //   cy.get(".rating")
  // })
  it('Should be able to see release date of expanded movie', () => {
    cy.get(".single-poster").first().click()
    cy.get(".release-date")
      .contains('2020-09-29')
  })

  it('Should be able to see genres of expanded movie', () => {
    cy.get(".single-poster").first().click()
    cy.get(".genre")
      .contains('Action')
  })

  it('Should be able to see runtime of expanded movie', () => {
    cy.get(".single-poster").first().click()
    cy.get(".runtime")
      .contains("82 minutes")
  })

  // it('Should be able to see tagline of expanded movie', () => {
  //   cy.get(".single-poster").first().click()
  //   cy.get(".tagline")
  //     .contains()
  // })

  it('Should be able to see overview of expanded movie', () => {
    cy.get(".single-poster").first().click()
    cy.get(".overview")
      .contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
  })


  it('Should render a header', () => {
    cy.get(".single-poster").first().click()
    cy.get('header')
      .contains('Nav goes here')
  })

  it('Should render a footer', () => {
    cy.get(".single-poster").first().click()
    cy.get('footer')
      .contains('Footer goes here')
  })

})
