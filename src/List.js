import React from 'react'
import {getAllMovies} from './apiCalls'
import './List.css'

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      error: '',
      clickedSort: 0
    }
  }

  componentDidMount() {
    getAllMovies()
    .then(data => {
      this.setState({
        listData: data.movies
      })
    })
    .catch(error => this.setState({error: error.message}))
  }

  updateSort = () => {
    this.setState({clickedSort: [parseInt(this.state.clickedSort) + 1] })
  }


  render() {
    let sortedByRating = this.state.listData.sort((a, b) => b.average_rating - a.average_rating)
    const list = sortedByRating.map(movie => {
      return (
        <li>
          <p className='list-title'>{movie.title}</p>
          <p className='list-rating'>{(movie.average_rating.toFixed(1) * 10) + '%'}</p>
        </li>
      )
    })
    let reSortedByRating = this.state.listData.sort((a, b) => a.average_rating - b.average_rating)
    const reSortedList = reSortedByRating.map(movie => {
      return (
        <li>
          <p className='list-title'>{movie.title}</p>
          <p className='list-rating'>{(movie.average_rating.toFixed(1) * 10) + '%'}</p>
        </li>
      )
    })
    if (this.state.clickedSort % 2 == 0)  {
      return (
        <div className='list-wrapper'>
          <h2 className='rating-header'>Movies by Ratings</h2>
          <button className='sort-button' onClick={() => this.updateSort()}>📈 SORT ALL</button>
          <ul className='list'>
            { list }
          </ul>
        </div>
      )
    } else {
      return (
        <div className='list-wrapper'>
          <h2 className='rating-header'>Movies by Ratings</h2>
          <button className='sort-button' onClick={() => this.updateSort()}>📈 SORT ALL</button>
          <ul className='list'>
            { reSortedList }
          </ul>
        </div>
      )
    }
  }
}

export default List
