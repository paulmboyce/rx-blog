import { combineReducers } from "redux";
import { FETCH_POSTS_TYPE, FETCH_USER_TYPE } from "../actionCreators";

const userReducer = function (state = [], action) {
	switch (action.type) {
		case FETCH_USER_TYPE: {
			return [...state, action.payload.user];
		}
		default:
			return state;
	}
};

const postsReducer = function (state = [], action) {
	switch (action.type) {
		case FETCH_POSTS_TYPE: {
			return action.payload.posts;
		}
		default:
			return state;
	}
};

const reducers = combineReducers({
	posts: postsReducer,
	users: userReducer,
});

export { reducers };
