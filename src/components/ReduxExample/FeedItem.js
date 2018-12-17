import React from 'react';
import { connect } from 'react-redux';
import * as classes from './FeedItem.module.css';
import AuthorBlock from './AuthorBlock';
import LikeBar from './LikeBar';

const FeedItem = (props) => {
  let feedItem = props.feed[props.id];
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
        feedItemId={feedItem.id}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  feed: state.feed
});

export default connect(mapStateToProps, null)(FeedItem);