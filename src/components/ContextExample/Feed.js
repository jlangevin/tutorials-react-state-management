import React from 'react';
import { FeedContext } from './context/feed';
import FeedItem from './FeedItem';

const Feed = () => {
  return (
    <FeedContext.Consumer>
      {({ feed }) => (
        <div>
          {Object.keys(feed).map(key => {
            const feedItemId = feed[key].id;
            return (
              <FeedItem
                key={key}
                feedItemId={feedItemId}
              />
            )
          })}
        </div>
      )}
    </FeedContext.Consumer>
  );
}

export default Feed;