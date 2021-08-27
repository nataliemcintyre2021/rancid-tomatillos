import './ExtendedView.css'

function ExtendedView(props) {
  //create variable assigned to find method
  //when we click on an individual movie poster it will match the id
  //it target has a key that matches any of the ids in the movie data, we want to take that and do something with it's data
  const singleMovie = props.singleMovieData.find(movie => movie.id === parseInt(props.id))
  console.log(singleMovie)

  return(
    <div className="extended-view">
      <img
        className="expanded-movie"
        key={singleMovie.id}
        src={singleMovie.backdrop_path}
      />
      <button onClick={props.changeExtendedState}>BACK</button>
    </div>
  )
}

export default ExtendedView
