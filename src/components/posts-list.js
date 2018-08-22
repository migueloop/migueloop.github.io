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
        fetch('https://dev.to/api/articles?username=saltyshiomix')
        .then(res => res.json())
        .then(posts => {
            let htmlPosts = posts.map(p => <Post title={p.title} summary={p.description} tags={p.tag_list} url={p.url}/>)
            this.setState({"posts" : htmlPosts})
        })}

    render() {
        const { posts } = this.state;
        console.log(posts)
        return (
            <div className="posts-list">
                {
                posts.length > 0 ? posts : 'Sorry no posts yet'
                }
            </div>
        )
    }
}

export default PostsList;
