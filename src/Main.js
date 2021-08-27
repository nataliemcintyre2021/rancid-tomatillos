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
      isExtendedView: false,
      clickedPosterID: null
    }
  }

  changeExtendedState = () => {
    if (this.state.isExtendedView) {
      this.setState({isExtendedView: false})
    }
    if (!this.state.isExtendedView) {
      this.setState({isExtendedView: true})
    }
  }

  handlePosterClick = (event) => {
    this.setState({clickedPosterID: event.target.id})
  }

  render() {
    return !this.state.isExtendedView ? (
      <main className='main-section'>
        <div className='all-movies-container'>
          <Posters title='All Movies' movieData={this.state.movieData} changeExtendedState={this.changeExtendedState} onClick={event => this.handlePosterClick(event)} />
          <Posters title='More Movies' movieData={this.state.movieData} changeExtendedState={this.changeExtendedState} />
          <Posters title='Even More Movies' movieData={this.state.movieData} changeExtendedState={this.changeExtendedState} />
        </div>
        <List movieData={this.state.movieData}/>
      </main>
    ) : (
      <main className='main-section'>
        <div className='single-movie-container'>
          <ExtendedView
            singleMovieData={this.state.movieData}
            id='726739'
            changeExtendedState={this.changeExtendedState}
            />
        </div>
      </main>
    )
  }
}

export default Main
