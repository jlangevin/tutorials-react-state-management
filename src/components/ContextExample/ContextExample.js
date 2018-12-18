import React from 'react';
import { FeedContextProvider, FeedContext } from './context/feed';
import Feed from './Feed';
import * as classes from './ContextExample.module.css';

const ContextExample = () => {
  return (
    <FeedContextProvider>
      <FeedContext.Consumer>
        {( context ) => (
          <div className={classes.Page}>
            <h1>Context Example</h1>
            <div>Hello: {context.user.name}</div>
            <Feed />
          </div>
        )}
      </FeedContext.Consumer>
    </FeedContextProvider>
  );
}

export default ContextExample;
