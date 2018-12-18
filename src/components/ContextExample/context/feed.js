
import React, { Component } from 'react';

export const FeedContext = React.createContext();

export class FeedContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

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
    const { children } = this.props;

    return (
      <FeedContext.Provider
        value={{
          user: this.state.user,
          authors: this.state.authors,
          feed: this.state.feedItems,
          toggleLike: this.toggleLike,
        }}
      >
        {children}
      </FeedContext.Provider>
    );
  }
}
