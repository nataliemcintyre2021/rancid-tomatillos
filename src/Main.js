import React from 'react'
import Posters from './Posters'
import ExtendedView from './ExtendedView'
import List from './List'
import movieData from './mockData'
import './Main.css'

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies,
      isExtendedView: true
    }
  }

  render() {
    return !this.state.isExtendedView ? (
      <main className='main-section'>
        <div className='all-movies-container'>
          <Posters title='All Movies' movieData={this.state.movieData} />
          <Posters title='All Movies' movieData={this.state.movieData} />
          <Posters title='All Movies' movieData={this.state.movieData} />
        </div>
        <List movieData={this.state.movieData}/>
      </main>
    ) : (
      <main className='main-section'>
        <div className='single-movie-container'>
          <ExtendedView singleMovieData={this.state.movieData} id={'337401'} />
        </div>
      </main>
    )
  }
}

export default Main
// return (
//   <main className='main-section'>
//     <div className='all-movies-container'>
//       <Posters title='All Movies' movieData={this.state.movieData} /* hidePostersView={this.hidePostersView} */ />
//       <Posters title='All Movies' movieData={this.state.movieData} /* hidePostersView={this.hidePostersView} */ />
//       <Posters title='All Movies' movieData={this.state.movieData} /* hidePostersView={this.hidePostersView} */ />
//     </div>
//     <List movieData={this.state.movieData}/>
//     <div className='single-movie-container hidden'>
//       <ExtendedView singleMovieData={this.state.movieData} id={'337401'} />
//     </div>
//   </main>
// )
