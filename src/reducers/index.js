import { combineReducers } from "redux";
import { INIT_BLOGS_TYPE } from "../actionCreators";

const blogListReducer = function (oldBlogList = [], action) {
	switch (action.type) {
		case INIT_BLOGS_TYPE: {
			console.log("blogListReducer: case > INIT_BLOGS_TYPE ");
			return action.payload.posts;
		}
		default:
			return oldBlogList;
	}
};

const reducers = combineReducers({
	posts: blogListReducer,
});

export { reducers };
