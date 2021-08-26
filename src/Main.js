import Posters from './Posters'
import ExtendedView from './ExtendedView'
import movieData from './mockData'

function Main() {
  return (
    <main className='main-section'>
      <Posters title='All Movies' movieData={movieData.movies} />
      <ExtendedView />
    </main>
  )
}

export default Main
