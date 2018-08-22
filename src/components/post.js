import React, { Component } from 'react';
import './post.css';

import {
    Button,
    Container,
    Divider,
    Header,
    Segment,
    Label,
  } from 'semantic-ui-react'

class Post extends Component {

  render() {

    const { tags, summary, title, url } = this.props;

    return (
        <Segment className='segment' vertical>
          <Container text>
            <Header className='header' as='h2'>
              <a href={url} target="_BLANK"> {title} </a>
            </Header>
            <p className='text'>
              {summary}
            </p>
            <a href={url} target="_BLANK">
            <Button inverted color='blue'>
              Read more
            </Button>
            </a>
            <Divider
              as='h4'
              className='divider'
              horizontal
            >
              {
                tags 
                ? tags.map(t => 
                  (
                    <Label as='a' color='orange'> <a href={`https://dev.to/t/${t}`} target="_BLANK"> {t} </a> </Label>)
                  )
                : ''
              }
            </Divider>
          </Container>
      </Segment>
    );
  }
}

export default Post;
