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
      <section>
        <p className="title">{singleMovie.title}</p>
        <p className="title">{singleMovie.release_date}</p>
        <p className="title">{singleMovie.overview}</p>
      </section>
    </div>
  )
}

export default ExtendedView
//backdrop image, cover, release data, description
