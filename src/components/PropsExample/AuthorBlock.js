import React from 'react';
import * as classes from './AuthorBlock.module.css';

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

export default AuthorBlock;