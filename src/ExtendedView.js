
import React from 'react'
import {fetchSingleMoviePoster} from './apiCalls'
import './ExtendedView.css'

class ExtendedView extends React.Component {
  constructor() {
    super();
    this.state = {
      singleMovieData: {},
      error: ''
    }
  }

  componentDidMount() {
    fetchSingleMoviePoster(this.props.id)
      .then(data => {
        this.setState({
           singleMovieData: data.movie
        })
      })
      .catch(error => this.setState({error: error}))
  }

  render() {
    return(
      <div className="extended-page">
          <div className="movie-poster">
            <div
              className="movie-image"
              style={{backgroundImage: `url(${this.state.singleMovieData.backdrop_path})`, backgroundSize: "cover", height: "75vh"}}
            >
              <p className="title">{this.state.singleMovieData.title}</p>
              <div className="rating">Rating: {((this.state.singleMovieData.average_rating/10)*100).toFixed(0)}%</div>
            </div>
          </div>
          <section className="movie-info">
            <div className="date-time">
              <p className="release-date">{(this.state.singleMovieData.release_date)}</p>
              <p className="genre">{this.state.singleMovieData.genres}</p>
              <p className="runtime">{this.state.singleMovieData.runtime} minutes</p>
            </div>
            <p className="tagline">{this.state.singleMovieData.tagline}</p>
            <p className="overview">{this.state.singleMovieData.overview}</p>
          </section>
      </div>
    )
  }
}

export default ExtendedView
