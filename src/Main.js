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
        filteredMovies: [],
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
      if(movie.title.toLowerCase().includes(value.toLowerCase())) {
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

    if(this.state.filteredMovies.length) {
      return (
        <main className='main-section'>

          <Posters
          title='All Movies'
          movieData={this.state.movieData}
          key={(Date.now() + 1)}
          />
          <input
          className='search-bar'
          type='text'
          placeholder='Search by title'
          name='search'
          onChange={event => this.searchMovies(event)}
          />
          <Posters
          title='Your Searched Movies'
          movieData={this.state.filteredMovies}
          key={(Date.now() + 3)}
          />
          <List key={Date.now()}/>

        </main>
      )
    }


    return (
      <>
        <Route exact path="/" render={() => {
          return (
            <main className='main-section'>

              <Posters
              title='Movies'
              movieData={this.state.movieData}
              key={(Date.now() + 1)}
              />
              <input
              className='search-bar'
              type='text'
              placeholder='Search by title'
              name='search'
              onChange={event => this.searchMovies(event)}
              />
              <List key={Date.now()}/>

            </main>
          )
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

export default Main
