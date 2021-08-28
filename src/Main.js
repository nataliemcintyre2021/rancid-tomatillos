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
      movieData: [],
      isExtendedView: false,
      clickedPosterID: null,
      loading: false
    }
  }

  componentDidMount() {
    console.log("did mount")
    this.setState({loading: true})
    // const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
       .then(response => response.json())
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
    }

  }

  handlePosterClick = (id) => {
    this.setState({clickedPosterID: id})
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
              singleMovieData={this.state.movieData}
              id={this.state.clickedPosterID}
              changeExtendedState={this.changeExtendedState}
              />
          </div>
        </main>
      )
    }
  }
}


export default Main
