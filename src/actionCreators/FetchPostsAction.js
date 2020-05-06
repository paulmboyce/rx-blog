import _ from "lodash";

import { axiosJsonP } from "../api/axios/JsonPlaceholder";
import { fetchUserAction } from "./FetchUserAction";

const FETCH_POSTS_TYPE = "FETCH_POSTS";

const fetchPostsAction = function () {
	return (dispatch, getState) => {
		axiosJsonP
			.get("/posts")
			.then(function sendToRedux(results) {
				dispatch({
					type: FETCH_POSTS_TYPE,
					payload: {
						posts: results.data,
					},
				});
			})
			.then(function getSendUsersForPostsToRedux() {
				const posts = getState().posts;
				const userIds = _.uniq(_.map(posts, "userId"));
				userIds.forEach(function (id) {
					dispatch(fetchUserAction(id));
				});
			})
			.catch(function (err) {
				console.log("HOUSTON, we have a problem... ", err);
			});
	};
};

export { fetchPostsAction, FETCH_POSTS_TYPE };
