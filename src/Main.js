import React from 'react'
import Posters from './Posters'
import ExtendedView from './ExtendedView'
import movieData from './mockData'
import './Main.css'

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies
    }
  }

  hidePostersView(event) {
    if (event.target.classList.includes('hidden')) {
      event.target.classList.remove('hidden')
    }
  }

  back

//first function: hideShow() - this will toggle the hidden class

//second function: showExtendedMovieView() -
//1. invoked when user clicks on movie
//2. grabs id of event.target
//2. this will fire hideShow()


//findMovieById():
//1. will need to find the movie by event target id (use find, event.target.id === movie.id)
//2. return movie data

    render() {
      return (
        <main className='main-section'>
          <div className='all-movies-container'>
            <Posters title='All Movies' movieData={this.state.movieData} />
          </div>
          <div className='single-movie-container hidden'>
            <ExtendedView singleMovieData={this.state.movieData} id={'337401'}/>
          </div>
        </main>
      )
    }
}
// function Main() {
//   return (
//     <main className='main-section'>
//       <Posters title='All Movies' movieData={movieData.movies} />
//       <ExtendedView />
//     </main>
//   )
// }

export default Main
