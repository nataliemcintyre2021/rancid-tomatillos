import React from 'react'
import './List.css'

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      listData: [],
      error: ''
    }
  }

  
}

export default List


// const List = (props) => {
//
// let sortedByRating = props.listData.sort((a, b) => b.average_rating - a.average_rating)
// // console.log(sortedByRating, '<><>')
// const list = sortedByRating.map(movie =>
//
//     <li>
//       <p className='list-title'>{movie.title}</p>
//       <p className='list-rating'>{(movie.average_rating.toFixed(1) * 10) + '%'}</p>
//     </li>
//
// )
//
//   return (
//     <div className='list-wrapper'>
//       <h2>Movies by Ratings 📈</h2>
//       <ul className='list'>
//         { list }
//       </ul>
//     </div>
//   )
// }
