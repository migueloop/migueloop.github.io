import React, { Component } from 'react';
import './App.css';
import PostsList from './components/posts-list.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> @migueloop </h1>
        </header>
        <p className="App-intro">
          <PostsList title="hola" summary="hola1" tags="test test2 test3"/>
        </p>
      </div>
    );
  }
}

export default App;
