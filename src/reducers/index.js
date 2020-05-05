import { combineReducers } from "redux";
import { INIT_BLOGS_TYPE } from "../actionCreators";

const blogListReducer = function (state = [], action) {
	switch (action.type) {
		case INIT_BLOGS_TYPE: {
			console.log("blogListReducer: case > INIT_BLOGS_TYPE ");
			return action.payload;
		}
		default:
			return state;
	}
};

const reducers = combineReducers({
	posts: blogListReducer,
});

export { reducers };
