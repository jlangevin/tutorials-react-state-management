import React from 'react';
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

export default Feed;