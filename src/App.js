import React from 'react'
import './App.css';
import movieData from './mockData'
import Posters from './Posters'

function App() {
  //console.log(movieData.movies[0], 'movieData<><><>')

  return (
    <div className="App">
      <Posters title='All Movies' movieData={movieData.movies} />
    </div>
  );
}

export default App;
