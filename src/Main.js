import React from 'react'
import Posters from './Posters'
import ExtendedView from './ExtendedView'
// import List from './List'
import movieData from './mockData'
import './Main.css'

// 👇 hide - show using state and re-rendering completely
class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData.movies,
      //classes: true
    }
  }


  // hidePostersView(event) {
  //
  //     this.setState({ classes: })
  //     event.target.parentElement.parentNode.classList.add('hidden')
  //     //show specific ExtendedView
  //
  //
  // }

  // render() {
  //       if(this.state.classes) {
  //           return (
  //             <Header />
  //             <Posters />
  //             <Footer />
  //           )
  //       } else {
  //           return (
  //             <Header />
  //             <ExtendedView id={event.target.id}/>
  //             <Footer />
  //           )
  //       }
  //   }
//state starts out true (only render Posters component)
//on poster click, changes state property to false

//first function: hideShow() - this will toggle the hidden class

//second function: showExtendedMovieView() -
//1. invoked when user clicks on movie
//2. grabs id of event.target
//2. this will fire hideShow()


//findMovieById():
//1. will need to find the movie by event target id (use find, event.target.id === movie.id)
//2. return movie data


    render() {
      return (
        <main className='main-section'>
          <div className='all-movies-container hidden'>
            <Posters title='All Movies' movieData={this.state.movieData} /* hidePostersView={this.hidePostersView} */ />
            <Posters title='All Movies' movieData={this.state.movieData} /* hidePostersView={this.hidePostersView} */ />
            <Posters title='All Movies' movieData={this.state.movieData} /* hidePostersView={this.hidePostersView} */ />
          </div>

          <div className='single-movie-container'>
            <ExtendedView singleMovieData={this.state.movieData} id={'1'} />
          </div>
        </main>
      )
    }
}
// function Main() {
//   return (
//     <main className='main-section'>
//       <Posters title='All Movies' movieData={movieData.movies} />
//       <ExtendedView />
//     </main>
//   )
// }


export default Main
