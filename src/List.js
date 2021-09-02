import './List.css'

const List = (props) => {

let sortedByRating = props.movieData.sort((a, b) => b.average_rating - a.average_rating)
// console.log(sortedByRating, '<><>')
const list = sortedByRating.map(movie =>

    <li>
      <p className='list-title'>{movie.title}</p>
      <p className='list-rating'>{(movie.average_rating.toFixed(1) * 10) + '%'}</p>
    </li>

)

  return (
    <div className='list-wrapper'>
      <h2>Movies by Ratings 📈</h2>
      <ul className='list'>
        { list }
      </ul>
    </div>
  )
}

export default List
//section element with an ordered List
// each list item will be a Movie title and a rating perce  tage
// will need to iterate through movieData array and look at the rating
//push each rating value to a new array and sort from high to low
// for each sorted rating, display on screen next to title with emojie
// Need:
// li = parent
// two h's = siblings
