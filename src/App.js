import React from 'react'
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

function App() {
  //console.log(movieData.movies[0], 'movieData<><><>')

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

//decide which data set to use for dummy data
//finish creating structure (header, footer, main)
//refactor app to class component

//create method that will show new image on click
  //css class hidden, display none; html element onClick
