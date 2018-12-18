import React from 'react';
import { FeedContext } from './context/feed';
import * as classes from './AuthorBlock.module.css';

const AuthorBlock = ({ authorId }) => {
  return (
    <FeedContext.Consumer>
      {({ authors }) => (
        <div className={classes.AuthorBlock}>
          <div className={classes.AuthorImage}></div>
          <div className={classes.AuthorInfo}>
            <div className={classes.AuthorName}>{ authors[authorId].name }</div>
            <div className={classes.AuthorEmail}>{ authors[authorId].email }</div>
          </div>
        </div>
      )}
    </FeedContext.Consumer>
  );
}

export default AuthorBlock;