import React, { Component } from 'react';
import * as classes from './PropsExample.module.css';

const AuthorBlock = (props) => {
  return (
    <div className={classes.AuthorBlock}>
      <div className={classes.AuthorImage}></div>
      <div className={classes.AuthorInfo}>
        <div className={classes.AuthorName}>{ props.name }</div>
        <div className={classes.AuthorEmail}>{ props.email }</div>
      </div>
    </div>
  );
}

const LikeBar = (props) => {
  return (
    <div className={classes.LikeBar}>
      <button className={classes.LikeButton} onClick={() => props.toggleLike(props.feedItemId)}>
        { props.likes.indexOf(props.userId) > -1 ? 'Unlike' : 'Like' }
      </button>
      <div className={classes.LikedBy}>
        <div>Liked by:</div>
        {props.likes.map(authorId => (
          <div key={authorId}>{props.authors[authorId].name}</div>
        ))}
      </div>
    </div>
  );
}

const FeedItem = (props) => {
  return (
    <div className={classes.FeedItem}>
      <AuthorBlock
        {...props.authors[props.authorId]}
      />
      <div className={classes.FeedContent}>
        {props.content}
      </div>
      <LikeBar
        authors={props.authors}
        likes={props.likes}
        userId={props.userId}
        feedItemId={props.id}
        toggleLike={props.toggleLike}
      />
    </div>
  );
}

const Feed = (props) => {
  return (
    <div>
      {Object.keys(props.feedItems).map(key => {
        const feedItem = props.feedItems[key];
        return (
          <FeedItem
            key={key}
            {...feedItem}
            authors={props.authors}
            userId={props.userId}
            toggleLike={props.toggleLike}
          />
        )
      })}
    </div>
  );
}

class Props extends Component {
  state = {
    // Logged in user
    user: {
      id: 'c',
      name: 'Stella',
      email: 'stel@la.com'
    },
    // Normalized author info
    authors: {
      'a': {
        id: 'a',
        name: 'Marv',
        email: 'mar@v.com'
      },
      'b': {
        id: 'b',
        name: 'Carol',
        email: 'car@ol.com'
      },
      'c': {
        id: 'c',
        name: 'Stella',
        email: 'stel@la.com'
      }
    },
    feedItems: {
      1: {
        id: 1,
        authorId: 'a',
        content: `Marv's marvelous musings. Marv's marvelous musings. Marv's marvelous musings. Marv's marvelous musings. Marv's marvelous musings.`,
        likes: [
          'a',
          'c'
        ]
      },
      2: {
        id: 2,
        authorId: 'b',
        content: `Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content.`,
        likes: []
      }
    }
  };

  toggleLike = (feedItemId) => {
    let userId = this.state.user.id;
    
    // Create a new feed items object from state via destructuring
    const newFeedItems = {
      ...this.state.feedItems
    };

    // Create a new feed item object via destructuring
    const newFeedItem = {
      ...newFeedItems[feedItemId]
    }
    
    // Create a new likes array for the feed item via destructuring
    const newLikes = [
      ...newFeedItem.likes
    ];

    // Add or remove our user id from the likes
    const index = newFeedItem.likes.indexOf(userId);
    if ( index > -1 ) {
      newLikes.splice(index, 1);
    } else {
      newLikes.push(userId);
    }
   
    // Update our new item with the new likes
    newFeedItem.likes = newLikes;
    // Update our new feed with our new feed item
    newFeedItems[feedItemId] = newFeedItem;
    // Lastly, update state
    this.setState({feedItems: newFeedItems});
  }

  render() {
    return (
      <div>
        <h1>Props Example</h1>
        <div>Hello: {this.state.user.name}</div>
        <Feed
          feedItems={this.state.feedItems}
          authors={this.state.authors}
          userId={this.state.user.id}
          toggleLike={this.toggleLike}
        />
      </div>
    );
  }
}

export default Props;