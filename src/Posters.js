import React from 'react'
import './Posters.css'
import { Link } from 'react-router-dom';

function Posters(props) {
  const movies = props.movieData.map(movie => (
    <Link to={`/${movie.id}`}>
      <img className="single-poster" key={movie.id} onClick={() => props.changeExtendedState(movie.id)} src={movie.poster_path} alt={movie.title}/>
    </Link>
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
