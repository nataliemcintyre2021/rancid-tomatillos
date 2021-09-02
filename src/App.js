import React from 'react'
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { Route } from 'react-router-dom';
// import ExtendedView from './ExtendedView'
// import { Link } from 'react-router-dom';
// import Banner from '.Banner'

function App() {
  //console.log(movieData.movies[0], 'movieData<><><>')

  return (
    <div className="App">
      <Route to="/">
        <Header />
        <Main />
        <Footer />
      </Route>
    </div>
  );
}

export default App;

//decide which data set to use for dummy data
//finish creating structure (header, footer, main)
//refactor app to class component

//create method that will show new image on click
  //css class hidden, display none; html element onClick
