import React from 'react'
import './Posters.css'

function Posters(props) {
  const movies = props.movieData.map(movie => (
    <img className="single-poster" key={movie.id} onClick={() => props.changeExtendedState()} src={movie.poster_path} alt={movie.title}
    />
    )
  )

  return (
    <div className='row-container'>
      <h2 className='row-title'>{props.title}</h2>
      <div className="row-posters">
        {movies}
      </div>
    </div>
  )
}

export default Posters
