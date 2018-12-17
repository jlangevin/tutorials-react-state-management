/**
 * Action Constants/Types
 */
// None at this time
// const SOME_USER_ACTION = 'SOME_USER_ACTION';

// Configure initial state
const INITIAL_STATE = {
  // Logged in user
  id: 'c',
  name: 'Stella',
  email: 'stel@la.com'
};

/**
 * Actions
 */
// None at this time
// export doSomeUserAction = (arg1, arg2) => dispatch => {
//   dispatch({
//     type: SOME_USER_ACTION,
//     payload: { arg1, arg2 }
//   });
// }

/**
 * Reducer
 */
export const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    // If we had actions related to our user, we'd add them here
    // case SOME_USER_ACTION: {
    //   ... logic to create a new state object ...
    // }
   
    default: 
      return state;
  }
}
