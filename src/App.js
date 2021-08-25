import React from 'react'
import './App.css';
import movieData from './mockData'
import Row from './Row'

function App() {
  //console.log(movieData.movies[0], 'movieData<><><>')
  return (
    <div className="App">
      <Row />
    </div>
  );
}

export default App;
