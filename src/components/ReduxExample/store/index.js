import { createStore, applyMiddleware, compose } from 'redux';
// Redux thunk allows us to dispatch actions and receive a promise instead of an object
import reduxThunk from 'redux-thunk';

import reducers from '../modules';

// Config for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore( 
	reducers, 
	// Second parameter is an "enhancer".  Middlewares can be passed as a comma list
	composeEnhancers( applyMiddleware( reduxThunk ) ) // Invoke middleware as it's passed in
);
