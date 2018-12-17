import React from 'react';
import * as classes from './LikeBar.module.css';

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

export default LikeBar;