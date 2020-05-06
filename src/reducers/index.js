import { combineReducers } from "redux";

import { userReducer } from "./UserReducer";
import { postsReducer } from "./PostsReducer";

const reducers = combineReducers({
	posts: postsReducer,
	users: userReducer,
});

export { reducers };
