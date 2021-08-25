import React from 'react'
import './App.css';
import movieData from './mockData'
import Row from './Row'

function App() {
  //console.log(movieData.movies[0], 'movieData<><><>')
  return (
    <div className="App">
      <Row title='All Movies' movieData={movieData.movies} />
      <Row title='More Movies' movieData={movieData.movies} />
    </div>
  );
}

export default App;
