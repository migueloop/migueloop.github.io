import React, { Component } from 'react';
import './post.css';

import {
    Button,
    Container,
    Divider,
    Header,
    Segment,
  } from 'semantic-ui-react'

class Post extends Component {
  render() {
    return (
        <Segment className='segment' vertical>
          <Container text>
            <Header className='header' as='h3'>
              {this.props.title}
            </Header>
            <p className='text'>
              {this.props.summary}
            </p>
            <Button as='a' size='large'>
              Read More
            </Button>
            <Divider
              as='h4'
              className='divider'
              horizontal
            >
              <a href='#'> {this.props.tags}</a>
            </Divider>
          </Container>
      </Segment>
    );
  }
}

export default Post;
