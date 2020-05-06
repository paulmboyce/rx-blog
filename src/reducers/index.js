import { combineReducers } from "redux";
import { FETCH_POSTS_TYPE, FETCH_USER_TYPE } from "../actionCreators";

const userReducer = function (state = new Map(), action) {
	switch (action.type) {
		case FETCH_USER_TYPE:
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

const postsReducer = function (state = [], action) {
	switch (action.type) {
		case FETCH_POSTS_TYPE: {
			console.log("postsReducer: case > INIT_BLOGS_TYPE ");

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
	posts: postsReducer,
	authors: userReducer,
});

export { reducers };
