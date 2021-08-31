import './ExtendedView.css'

function ExtendedView(props) {


  return(
    <div className="extended-page">
      <button className="back" onClick={() => props.changeExtendedState()}>BACK</button>
        <div className="movie-poster">
          <div
            className="movie-image"
            style={{backgroundImage: `url(${props.singleMovie.backdrop_path})`, backgroundSize: "cover", height: "75vh"}}>
            <p className="title">{props.singleMovie.title}</p>
            <button className="rating">Rating: {props.singleMovie.average_rating}</button>
          </div>
        </div>
          <section className="movie-info">
            <div className="date-time">
              <p className="release-date">{props.singleMovie.release_date}</p>
              <p className="genre">{props.singleMovie.genres}</p>
              <p className="runtime">{props.singleMovie.runtime} minutes</p>
            </div>
            <p className="tagline">{props.singleMovie.tagline}</p>
            <p className="overview">{props.singleMovie.overview}</p>
          </section>
      </div>
  )
}

export default ExtendedView
