import { FETCH_POSTS_TYPE } from "../actionCreators";
const postsReducer = function (state = [], action) {
	switch (action.type) {
		case FETCH_POSTS_TYPE: {
			return action.payload.posts;
		}
		default:
			return state;
	}
};

export { postsReducer };
