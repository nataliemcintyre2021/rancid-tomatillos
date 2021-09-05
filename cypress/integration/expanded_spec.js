// beforeEach(() => {
//   cy.visit('http://localhost:3000/')
//   // cy.fixture('../fixtures/singleMovies.json')
//   // cy.intercept("GET", 'http://localhost:3000/dashboard', {fixture: })
// });

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
        .contains('2020-09-29')

      .get(".genre")
        .contains('Action')

       .get(".runtime")
          .contains("82 minutes")

       // .get(".tagline")
       //    .contains("")

       .get(".overview")
         .contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")

  })

  // it('Should fetch data for the 2 stubbed movies cards and render the correpsonding elements', () => {
  //   cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'moneyplane'}).as('moneyplane')
  //   cy.wait('@moneyplane').then((interception) => {
  //     'response.ok'
  //   })
  //   cy.visit('http://localhost:3000/694919')
  //   cy.get('main div:first').find('h2').contains('All Movies')
  //   cy.get('main').find('a').should('have.class', 'single-poster')
  //
  // })

})// End describe block

// describe('Intercepting and stubbing fetched movie data', () => {
//   it('Should fetch data for first movie card and render the correpsonding elements', () => {
//     cy.visit('http://localhost:3000/694919')
//     cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919', { fixture: 'moneyplane'}).as('moneyplane')
//     cy.wait('@moneyplane').then((interception) => {
//       'response.ok'
//     })
//
//       .get(".movie-image")
//         .should('have.attr', 'style')
//         .and('equal', 'background-image: url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"); background-size: cover; height: 75vh;')
//
//       .get(".title")
//         .contains('Money Plane')
//
//       .get(".release-date")
//         .contains('2020-09-29')
//
//       .get(".genre")
//         .contains('Action')
//
//        .get(".runtime")
//           .contains("82 minutes")
//
//        // .get(".tagline")
//        //    .contains("")
//
//        .get(".overview")
//          .contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
//
//   })
// })



//it should update url and show expanded view of movie upon user click of specific movie poster
//it should render a header
//it should render a footer
//it should show a loading message while the movie data is being fetched
//it should fetch data for the movie card and render corresponding elements
//it should fetch data for the stubbed movie card and show movie posters
//it should fetch data for the stubbed movie card and show movie titles
//it should fetch data for the stubbed movie card and show movie ratings
//it should fetch data for the stubbed movie card and show movie release dates
//it should fetch data for the stubbed movie card and show movie genres
//it should fetch data for the stubbed movie card and show movie runtimes
//it should fetch data for the stubbed movie card and show movie overviews
//it should fetch data for the stubbed movie card and show movie tag lines






// =================== old code ==========

// it('Should get expanded view', () => {
//   cy.get(".single-poster").first().click()
//   cy.intercept('http://localhost:3000/dashboard', fixture: "singlemovies.json")
// })
// it('Should be able to click on movie poster and see expanded view of single movie poster', () => {
//   cy.fixture('../fixtures/singleMovies.json').then((data) => {
//     const title = data.singleMovies[0].title
//     cy.intercept('GET', 'http://localhost:3000/dashboard', {
//       statusCode: 200,
//       body: title
//     })
//   })
//   cy.get(".single-poster").first().click()
//   cy.get(".movie-image")
//     .should('have.attr', 'style')
//     .and('equal', 'background-image: url("https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"); background-size: cover; height: 75vh;')
//
// })
//
// // it('Should be able to see title of expanded movie', () => {
// //   cy.get(".single-poster").first().click()
// //   cy.get(".title")
// //     .contains('Money Plane')
// // })
// it('Should be able to see title of expanded movie', () => {
//   cy.fixture('../fixtures/singleMovies.json').then((data) => {
//     const title = data.singleMovies[0].title
//     cy.intercept('GET', 'http://localhost:3000/dashboard', {
//       statusCode: 200,
//       body: title
//     })
//   })
//   cy.get(".single-poster").first().click()
//   cy.get(".title")
//     .contains('Money Plane')
// })
//
//
// // it('Should be able to see rating of expanded movie', () => {
// //   cy.get(".rating")
// // })
// it('Should be able to see release date of expanded movie', () => {
//   cy.get(".single-poster").first().click()
//   cy.get(".release-date")
//     .contains('2020-09-29')
// })
//
// it('Should be able to see genres of expanded movie', () => {
//   cy.get(".single-poster").first().click()
//   cy.get(".genre")
//     .contains('Action')
// })
//
// it('Should be able to see runtime of expanded movie', () => {
//   cy.get(".single-poster").first().click()
//   cy.get(".runtime")
//     .contains("82 minutes")
// })
//
// // it('Should be able to see tagline of expanded movie', () => {
// //   cy.get(".single-poster").first().click()
// //   cy.get(".tagline")
// //     .contains()
// // })
//
// it('Should be able to see overview of expanded movie', () => {
//   cy.get(".single-poster").first().click()
//   cy.get(".overview")
//     .contains("A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.")
// })
//
//
// it('Should render a header', () => {
//   cy.get(".single-poster").first().click()
//   cy.get('header')
//     .contains('Nav goes here')
// })
//
// it('Should render a footer', () => {
//   cy.get(".single-poster").first().click()
//   cy.get('footer')
//     .contains('Footer goes here')
// })
