import './ExtendedView.css'

function ExtendedView(props) {
  const singleMovie = props.singleMovieData.find(movie => movie.id === parseInt(props.id))
  console.log(singleMovie)

  return(
    <div className="extended-page">
      <button className="back" onClick={() => props.changeExtendedState()}>BACK</button>
        <div className="movie-poster">
          <div
            className="movie-image"
            style={{backgroundImage: `url(${singleMovie.backdrop_path})`, backgroundSize: "cover", height: "75vh"}}>
            <p className="title">{singleMovie.title}</p>
            <button className="rating">Rating: {((singleMovie.average_rating/10)*100).toFixed(0)}%</button>
          </div>
        </div>
          <section className="movie-info">
            <div className="date-time">
              <p className="release-date">{singleMovie.release_date.split("").slice(0, 4).join("")}</p>
              <p className="genre">{singleMovie.genres}</p>
              <p className="runtime">{singleMovie.runtime} minutes</p>
            </div>
            <p className="tagline">{singleMovie.tagline}</p>
            <p className="overview">{singleMovie.overview}</p>
          </section>
      </div>
  )
}

export default ExtendedView
