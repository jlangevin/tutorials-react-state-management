/**
 * Action Constants/Types
 */
const SET_LIKE = 'SET_LIKE';

// Configure initial state
const INITIAL_STATE = {
  1: {
    id: 1,
    authorId: 'a',
    content: `Marv's marvelous musings. Marv's marvelous musings. Marv's marvelous musings. Marv's marvelous musings. Marv's marvelous musings.`,
    likes: [
      'a',
      'c'
    ]
  },
  2: {
    id: 2,
    authorId: 'b',
    content: `Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content. Carol's cool content.`,
    likes: []
  }
};

/**
 * Actions
 */
export const toggleLike = (feedItemId, userId) => dispatch => {
  dispatch({
    type: SET_LIKE,
    payload: { feedItemId, userId }
  });
}

/**
 * Reducer
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_LIKE: {
      const { feedItemId, userId } = action.payload;

      // Create a new feed items object from state via destructuring
      const newFeed = {
        ...state
      };

      // Create a new feed item object via destructuring
      const newFeedItem = {
        ...newFeed[action.payload.feedItemId]
      }
      
      // Create a new likes array for the feed item via destructuring
      const newLikes = [
        ...newFeedItem.likes
      ];

      // Add or remove our user id from the likes
      const index = newFeedItem.likes.indexOf(userId);
      if ( index > -1 ) {
        newLikes.splice(index, 1);
      } else {
        newLikes.push(userId);
      }
      
      // Update our new item with the new likes
      newFeedItem.likes = newLikes;
      // Update our new feed with our new feed item
      newFeed[feedItemId] = newFeedItem;
      // Lastly, update state by returning our new state object
      return newFeed;
    }
   
    default: 
      return state;
  }
}
