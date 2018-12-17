/**
 * Action Constants/Types
 */
// None at this time
// const SOME_AUTHOR_ACTION = 'SOME_AUTHOR_ACTION';

// Configure initial state
const INITIAL_STATE = {
  // Normalized author info
  'a': {
    id: 'a',
    name: 'Marv',
    email: 'mar@v.com'
  },
  'b': {
    id: 'b',
    name: 'Carol',
    email: 'car@ol.com'
  },
  'c': {
    id: 'c',
    name: 'Stella',
    email: 'stel@la.com'
  }
};

/**
 * Actions
 */
// None at this time
// export doSomeAuthorAction = (arg1, arg2) => dispatch => {
//   dispatch({
//     type: SOME_AUTHOR_ACTION,
//     payload: { arg1, arg2 }
//   });
// }

/**
 * Reducer
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // If we had actions related to our authors, we'd add them here
    // case SOME_AUTHOR_ACTION: {
    //   ... logic to create a new state object ...
    // }
   
    default: 
      return state;
  }
}
