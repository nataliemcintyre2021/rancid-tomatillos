import React from 'react'
import Posters from './Posters'
import ExtendedView from './ExtendedView'
import List from './List'
import Error from './Error'
import './Main.css'
import {getAllMovies, fetchSingleMoviePoster} from './apiCalls'
import { Route } from 'react-router-dom';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      singleMovie: {},
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

  handlePosterClick = (id) => {
    console.log('is this working??? 1')
    this.setState({clickedPosterID: id})
  }

  render() {
    if(this.state.error) {
      return (
        <Error errorMessage={this.state.error.message}/>
      )
    }
    if (this.state.loading) {
      return (
        <p>'Loading...'</p>
      )
    }
    if (!this.state.loading && !this.state.error) {
      return (
        <div>
          <Route exact path="/" render={() => {
            return (
              <main className='main-section'>
                <div className='all-movies-container'>
                  <div>
                    <Posters title='All Movies' movieData={this.state.movieData} changeExtendedState={this.changeExtendedState} />
                  </div>
                </div>
                <List movieData={this.state.movieData}/>
              </main> )
            }
          }/>

          <Route exact path="/:id" render={({ match }) => {
            const { params } = match
            return (
              <main className='main-section'>
                <div className='single-movie-container'>
                  <ExtendedView
                    singleMovie={this.state.singleMovie}
                    id={parseInt(params.id)}
                    changeExtendedState={this.changeExtendedState}
                  />
                </div>
              </main>
            )
          }
          }/>
        </div>
      )
    }
  }
}


export default Main
