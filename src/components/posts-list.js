import React, { Component } from 'react';
import './post.css';

import Post from './post.js';


class PostsList extends Component {
constructor(){
    super();
    this.state = {
        posts : []
    }
}
componentDidMount() {
    // fetch('')
    // .then(results => {
    //     console.log("RESULT", results)
    //     return results.json();
    // })
    // .then(data => {
    //     let thing = data.thing
    //     return(
    //     <Post title="hola" summary="hola1" tags="test test2 test3"></Post>
    //     )
    // })
} 
  render() {
    return (
        <div className="posts-list">
            {/* {this.state.posts} */}
            <Post title="test 1" summary="this is a test text" tags="test test2 test3"></Post>
            <Post title="test 2" summary="this is another test text" tags="test test2 test3"></Post>
        </div>
    );
  }
}

export default PostsList;
