import React from 'react';
import { connect } from 'react-redux';
import FeedItem from './FeedItem';

const Feed = ({feed}) => {
  return (
    <div>
      {Object.keys(feed).map(key => {
        const feedItem = feed[key];
        return (
          <FeedItem
            key={key}
            {...feedItem}
          />
        )
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  feed: state.feed
});

export default connect(mapStateToProps, null)(Feed);