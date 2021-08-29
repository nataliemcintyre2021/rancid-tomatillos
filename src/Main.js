import React from 'react'
import Posters from './Posters'
import ExtendedView from './ExtendedView'
import List from './List'
import movieData from './mockData'
import './Main.css'
import {getAllMovies, fetchSingleMoviePoster} from './apiCalls'

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      singleMovie: [],
      isExtendedView: false,
      clickedPosterID: null,
      loading: false,
      error: ''
    }
  }

  componentDidMount() {
    console.log("did mount")
    this.setState({loading: true})
    getAllMovies()
    .then(data => {
      this.setState({
        loading: false,
        movieData: data.movies
      })
    })
       .catch(error => console.log("error"))
  }

  changeExtendedState = (id) => {
    this.handlePosterClick(id)

    if (this.state.isExtendedView) {
      this.setState({isExtendedView: false})
    }
    if (!this.state.isExtendedView) {
      this.setState({isExtendedView: true})
      this.getSingleMoviePoster(id)
    }

  }

  handlePosterClick = (id) => {
    this.setState({clickedPosterID: id})
  }

  getSingleMoviePoster = (id) => {
    fetchSingleMoviePoster(id)
     .then(data => {
       this.setState({
         singleMovie: data.movie
       })
     })
     .catch(error => console.log("error"))
  }

  render() {
    console.log("render")
    if (this.state.loading) {
      console.log("movie data", this.state.movieData)
      console.log("loading status", this.state.loading)
      return (
        <p>'Loading...'</p>
      )
    }
    if (!this.state.loading) {
      console.log("movie data", this.state.movieData)
      console.log("loading status", this.state.loading)
      return !this.state.isExtendedView ? (
        <main className='main-section'>
          <div className='all-movies-container'>
            <Posters title='All Movies' movieData={this.state.movieData} changeExtendedState={this.changeExtendedState} />
            <Posters title='More Movies' movieData={this.state.movieData} changeExtendedState={this.changeExtendedState} />
            <Posters title='Even More Movies' movieData={this.state.movieData} changeExtendedState={this.changeExtendedState} />
          </div>
          <List movieData={this.state.movieData}/>
        </main>
      ) : (
        <main className='main-section'>
          <div className='single-movie-container'>
            <ExtendedView
              singleMovie={this.state.singleMovie}
              id={this.state.clickedPosterID}
              changeExtendedState={this.changeExtendedState}
              getSingleMoviePoster={this.getSingleMoviePoster}
              />
          </div>
        </main>
      )
    }
  }
}


export default Main
