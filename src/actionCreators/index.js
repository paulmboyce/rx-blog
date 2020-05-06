import { fetchUserAction, FETCH_USER_TYPE } from "./FetchUserAction";
import { fetchPostsAction, FETCH_POSTS_TYPE } from "./FetchPostsAction";

export { fetchPostsAction, fetchUserAction, FETCH_USER_TYPE, FETCH_POSTS_TYPE };

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
