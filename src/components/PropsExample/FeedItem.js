import React from 'react';
import AuthorBlock from './AuthorBlock';
import LikeBar from './LikeBar';
import * as classes from './FeedItem.module.css';

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

export default FeedItem;