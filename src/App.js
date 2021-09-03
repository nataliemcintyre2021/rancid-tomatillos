import React from 'react'
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { Route, Redirect } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Route to="/movies">
        <Header />
        <Main />
        <Footer />
      </Route>
    </div>
  );
}

export default App;


//<Redirect to="/movies"/>
