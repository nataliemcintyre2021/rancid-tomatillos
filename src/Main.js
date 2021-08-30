import React from 'react'
import Posters from './Posters'
import ExtendedView from './ExtendedView'
import List from './List'
import Error from './Error'
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
    .catch(error => this.setState({error: error.message}))
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
     .catch(error => this.setState({error: error}))
  }

  render() {
    console.log("render")
    if (this.state.loading) {
      return (
        <p>'Loading...'</p>
      )
    }
    if(this.state.error) {
      return (
        <Error errorMessage={this.state.error}/>
      )
    }
    if (!this.state.loading && !this.state.error) {
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
