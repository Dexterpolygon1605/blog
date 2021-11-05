import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Cards from './Components/Cards/Cards';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Cards />
      </div>
    );
  }
}

export default App;
