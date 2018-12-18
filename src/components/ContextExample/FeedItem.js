import React from 'react';
import { FeedContext } from './context/feed';
import AuthorBlock from './AuthorBlock';
import LikeBar from './LikeBar';
import * as classes from './FeedItem.module.css';

const FeedItem = ({feedItemId}) => {
  return (
    <FeedContext.Consumer>
      {({ feed }) => {
        const feedItem = feed[feedItemId];
        return (
          <div className={classes.FeedItem}>
            <AuthorBlock
              authorId={feedItem.authorId}
            />
            <div className={classes.FeedContent}>
              {feedItem.content}
            </div>
            <LikeBar
              likes={feedItem.likes}
              feedItemId={feedItemId}
            />
          </div>
        )
      }}
    </FeedContext.Consumer>
  );
}

export default FeedItem;