import { combineReducers } from "redux";
import { INIT_BLOGS_TYPE, GET_AUTHOR_TYPE } from "../actionCreators";

const authorReducer = function (state = new Map(), action) {
	switch (action.type) {
		case GET_AUTHOR_TYPE:
			// add new data
			if (!state.has(action.payload.author.id)) {
				const newState = new Map();
				// copy state:
				state.forEach((author, id) => {
					newState.set(id, author);
				});
				console.log("Adding AUTHOR: ", action.payload.author.name);
				newState.set(
					action.payload.author.id,
					action.payload.author.name
				);
				return newState;
			}
			return state;

		default:
			return state;
	}
};

const blogListReducer = function (state = [], action) {
	switch (action.type) {
		case INIT_BLOGS_TYPE: {
			console.log("blogListReducer: case > INIT_BLOGS_TYPE ");

			return action.payload.posts.map(function (post) {
				post["author"] =
					action.payload.authors[post.userId - 1]["name"];
				return post;
			});
		}
		default:
			return state;
	}
};

const reducers = combineReducers({
	posts: blogListReducer,
	authors: authorReducer,
});

export { reducers };
