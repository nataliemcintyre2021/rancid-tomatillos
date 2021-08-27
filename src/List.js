import './List.css'

const List = (props) => {

const list = props.movieData.map(movie =>
  <ul>
    <li>
      <p className='list-title'>{movie.title}</p>
      <p className='list-rating'>{movie.rating}</p>
    </li>
  </ul>
)

  return (
    <section className='list-container'>
      { list }
    </section>
  )
}

export default List
//section element with an ordered List
// each list item will be a Movie title and a rating percetage
// will need to iterate through movieData array and look at the rating
//push each rating value to a new array and sort from high to low
// for each sorted rating, display on screen next to title with emojie
// Need:
// li = parent
// two h's = siblings
