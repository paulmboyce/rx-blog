import { axiosJsonP } from "../api/axios/JsonPlaceholder";
import _ from "lodash";

const FETCH_POSTS_TYPE = "FETCH_POSTS";
const FETCH_USER_TYPE = "FETCH_USER";

const fetchUserAction = function (userId) {
	return function (dispatch) {
		axiosJsonP
			.get(`/users/${userId}`)
			.then(function (result) {
				dispatch({
					type: FETCH_USER_TYPE,
					payload: { user: result.data },
				});
			})
			.catch(function (err) {
				console.log("HOUSTON: we have an: ", err);
			});
	};
};

const fetchBlogsAction = function () {
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

export { fetchBlogsAction, fetchUserAction, FETCH_USER_TYPE, FETCH_POSTS_TYPE };

/** ASYNC / AWAIT Implementation:
 * ==============================
const initBlogsAction2 = function () {
	return async function (dispatch) {
		let data = [];
		try {
			const response = await axiosJsonP.get("/posts");
			data = response.data;
		} catch (err) {
			console.log("HOUSTON ... We have a problem... ==> ", err);
		} finally {
			dispatch(initBlogsActionPojo(data));
		}
	};
};

 */
