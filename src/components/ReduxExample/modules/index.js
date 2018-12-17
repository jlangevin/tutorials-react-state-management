import { combineReducers } from 'redux';
import { reducer as authorReducer } from './author';
import { reducer as feedReducer } from './feed';
import { reducer as userReducer } from './user';

export default combineReducers({
	authors: authorReducer,
	feed: feedReducer,
	user: userReducer,
});