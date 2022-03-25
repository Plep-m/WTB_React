import './App.css';
import './pbox.css';
import React, { Component } from 'react'
import Listing from './listing'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Listing />
      </div>
    );
  }
}

export default App;