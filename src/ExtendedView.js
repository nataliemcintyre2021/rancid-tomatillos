import './ExtendedView.css'

function ExtendedView(props) {
  const singleMovie = props.singleMovieData.find(movie => movie.id === parseInt(props.id))
  console.log(singleMovie)

  return(
    <div className="extended-view">
      <img
        className="expanded-movie"
        key={singleMovie.id}
        src={singleMovie.backdrop_path}
      />
      <button onClick={() => props.changeExtendedState()}>BACK</button>
    </div>
  )
}

export default ExtendedView
