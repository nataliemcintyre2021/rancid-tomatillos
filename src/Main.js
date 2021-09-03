import React from 'react'
import Posters from './Posters'
import ExtendedView from './ExtendedView'
import List from './List'
import Error from './Error'
import NoMatch from './NoMatch'
import './Main.css'
import {getAllMovies} from './apiCalls'
import { Route, Switch, Component, Redirect } from 'react-router-dom';


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

        <>
          <Route exact path="/movies" render={() => {
            return (
              <main className='main-section'>
                <Posters title='All Movies' movieData={this.state.movieData} changeExtendedState={this.changeExtendedState} key={(Date.now() + 5)}/>
                <List movieData={this.state.movieData} key={Date.now()}/>
              </main> )
            }
          }/>
          <Route exact path="/movies/:id" render={({ match }) => {
            const { params } = match
            return (
              <main className='main-section'>
                  <ExtendedView
                    id={parseInt(params.id)}
                    key={parseInt(params.id)}
                  />
              </main>
            )
          }
          }/>
        </>

      )
    }
  }
}


export default Main

//<Route path="/movies/*" component={ NoMatch }/>
