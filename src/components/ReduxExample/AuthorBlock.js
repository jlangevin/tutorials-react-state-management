import React from 'react';
import { connect } from 'react-redux';
import * as classes from './AuthorBlock.module.css';

const AuthorBlock = ({authorId, authors}) => {
  let author = authors[authorId];
  return (
    <div className={classes.AuthorBlock}>
      <div className={classes.AuthorImage}></div>
      <div className={classes.AuthorInfo}>
        <div className={classes.AuthorName}>{ author.name }</div>
        <div className={classes.AuthorEmail}>{ author.email }</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  authors: state.authors
});

export default connect(mapStateToProps, null)(AuthorBlock);