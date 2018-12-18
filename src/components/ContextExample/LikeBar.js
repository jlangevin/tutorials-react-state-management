import React from 'react';
import { FeedContext } from './context/feed';
import * as classes from './LikeBar.module.css';

const LikeBar = ({ likes, feedItemId }) => {
  return (
    <FeedContext.Consumer>
      {({ authors, toggleLike, user }) => (
        <div className={classes.LikeBar}>
          <button className={classes.LikeButton} onClick={() => toggleLike(feedItemId)}>
            { likes.indexOf(user.id) > -1 ? 'Unlike' : 'Like' }
          </button>
          <div className={classes.LikedBy}>
            <div>Liked by:</div>
            {likes.map(authorId => (
              <div key={authorId}>{authors[authorId].name}</div>
              ))}
          </div>
        </div>
      )}
    </FeedContext.Consumer>
  );
}

export default LikeBar;