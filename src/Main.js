import React from 'react'
import Posters from './Posters'
import ExtendedView from './ExtendedView'
import List from './List'
import Error from './Error'
import NoMatch from './NoMatch'
import './Main.css'
import {getAllMovies} from './apiCalls'
import { Route } from 'react-router-dom';


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      filteredMovies: [],
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
        movieData: data.movies,
      })
    })
    .catch(error => this.setState({error: error.message}))
  }

  handlePosterClick = (id) => {
    this.setState({clickedPosterID: id})
  }

  searchMovies = (event) => {
    const { value } = event.target
    const foundMovies = this.state.movieData.filter(movie => {
      if(movie.title.toLowerCase.includes(value.toLowerCase())) {
        return movie
      }
    })
    this.setState({ filteredMovies: foundMovies})
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
          <Route exact path="/" render={() => {
            return (
              <main className='main-section'>
                <input
                className='search-bar'
                type='text'
                placeholder='Search by title'
                name='search'
                value=''
                onChange={this.searchMovies}
                />
                <Posters title='All Movies' movieData={!this.state.filteredMovies.length ? this.state.movieData : this.state.filteredMovies} key={(Date.now() + 1)}/>
                <List key={Date.now()}/>
              </main> )
            }
          }/>
          <Route exact path="/:id" render={({ match }) => {
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
