import React from 'react'
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { Route } from 'react-router-dom';

function App() {

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
