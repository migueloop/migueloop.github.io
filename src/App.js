import React, { Component } from 'react';
import './App.css';
import PostsList from './components/posts-list.js';

import {
  Header,
  Image,
} from 'semantic-ui-react'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Image size='medium' centered src='http://24.media.tumblr.com/tumblr_m1ct4xH8Iy1qhbesbo1_500.gif' />  
            <h1 className="title"> <a href="https://github.com/migueloop" target="_BLANK"> @migueloop </a> </h1>
        </header>
        <p className="App-intro">
          <PostsList/>
        </p>
      </div>
    );
  }
}

export default App;
