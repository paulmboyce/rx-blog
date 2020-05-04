import { combineReducers } from "redux";
import { INIT_BLOGS_TYPE } from "../actionCreators";

const blogListReducer = function (oldBlogList = [], action) {
	console.log(`blogListReducer `, action);
	if (action.type === INIT_BLOGS_TYPE) {
		console.log(
			`BLOG LIST REDUCER: Returning: ${action.payload.posts.length} posts... `
		);
		return action.payload.posts;
	}

	return oldBlogList;
};

const reducers = combineReducers({
	posts: blogListReducer,
});

export { reducers };
