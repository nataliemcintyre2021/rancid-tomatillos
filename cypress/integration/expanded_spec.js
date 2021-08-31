beforeEach(() => {
  cy.visit('http://localhost:3000/dashboard');
});

describe('Expanded single movie poster view flow', () => {
  it('Should be able to click on movie poster and see expanded view of single movie', () => {
    cy.get(".single-poster").first().click()
    cy.get(".movie-image")
      .should('have.attr', 'style')
      .and('equal', 'background-image: url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"); background-size: cover; height: 75vh;')
  //   cy.intercept()
})

  it('Should be able to see title of expanded movie', () => {
    cy.get(".single-poster").first().click()
    cy.get(".title")
      .contains('Money Plane')
  })
    //do intercept and stub here and check to see if new movie loaded and new URL from router


  it('Should render a header', () => {
    cy.get('header')
      .contains('Nav goes here')
  })

})
