import React from 'react'
import './Posters.css'

function Posters(props) {
  const movies = props.movieData.map(movie => (
    <img className="single-poster" key={movie.id} onClick={(event) => props.hidePostersView(event)} src={movie.poster_path} alt={movie.title}
    />
  ))

  return (
    <div className="row-posters">
      {movies}
    </div>
  )
}

export default Posters
