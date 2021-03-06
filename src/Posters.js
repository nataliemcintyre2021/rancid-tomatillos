import React from 'react'
import './Posters.css'
import { Link } from 'react-router-dom';

function Posters(props) {
  const movies = props.movieData.map(movie => (
    <Link to={`/${movie.id}`}>
      <img className="single-poster" key={movie.id} src={movie.poster_path} alt={movie.title}/>
    </Link>
    )
  )

  return (
    <div className='posters-container' key={Date.now() * 10}>
      <h2 className='posters-title'>{props.title}</h2>
      <div className="row-of-posters">
        {movies}
      </div>
    </div>
  )
}

export default Posters
