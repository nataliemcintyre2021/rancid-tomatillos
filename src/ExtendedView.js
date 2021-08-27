import './ExtendedView.css'

function ExtendedView(props) {
  //create variable assigned to find method
  //when we click on an individual movie poster it will match the id
  //it target has a key that matches any of the ids in the movie data, we want to take that and do something with it's data
  const singleMovie = props.singleMovieData.find(movie => movie.id === parseInt(props.id))
  console.log(singleMovie)

  return(
    <div className="extended-view">
    <button>BACK</button>
      <div
        className="movie-image"
        style={{backgroundImage: `url(${singleMovie.backdrop_path})`, backgroundSize: "cover", height: "75vh", backgroundColor: 'rgba(0, 0, 0, .5)'}}>
        <p className="title">{singleMovie.title}</p>
      </div>
        <section className="movie-info">
          <div className="date-time">
            <p className="release-date">{singleMovie.release_date}</p>
            <p className="runtime">{singleMovie.runtime} minutes</p>
          </div>
          <p className="rating">Average Rating: {singleMovie.average_rating}</p>
          <p className="genre">Genre(s): {singleMovie.genres}</p>
          <p className="overview">{singleMovie.overview}</p>
        </section>
    </div>
  )
}

export default ExtendedView
//backdrop image, cover, release data, description
