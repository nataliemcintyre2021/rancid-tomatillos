import React from 'react'

function Row(props) {
  console.log(props)
  return (


    <div>
      <h1>{props.title}</h1>
      <img
        key={props.movieData[0].id}
        src={props.movieData[0].poster_path}
        />
    </div>

  )
}

export default Row
