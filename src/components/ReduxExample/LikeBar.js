import React from 'react';
import { connect } from 'react-redux';
import * as classes from './LikeBar.module.css';
import { toggleLike } from './modules/feed';

const LikeBar = ({ authors, feedItemId, likes, toggleLike, userId }) => {
  return (
    <div className={classes.LikeBar}>
      <button className={classes.LikeButton} onClick={() => toggleLike(feedItemId, userId)}>
        { likes.indexOf(userId) > -1 ? 'Unlike' : 'Like' }
      </button>
      <div className={classes.LikedBy}>
        <div>Liked by:</div>
        {likes.map(authorId => (
          <div key={authorId}>{authors[authorId].name}</div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  authors: state.authors,
  userId: state.user.id
});

const mapDispatchToProps = {
  toggleLike
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeBar);