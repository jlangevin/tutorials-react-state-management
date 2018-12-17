import React from 'react';
import FeedItem from './FeedItem';

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

export default Feed;