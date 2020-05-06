import { axiosJsonP } from "../api/axios/JsonPlaceholder";

const FETCH_POSTS_TYPE = "FETCH_POSTS";
const FETCH_USER_TYPE = "FETCH_USER";

const userCache = [];
const fetchUserAction = function (userId) {
	return function (dispatch) {
		if (userCache.includes(userId)) {
			return { type: "NO_NEW_DATA" };
		}

		userCache.push(userId);
		axiosJsonP
			.get(`/users/${userId}`)
			.then(function (result) {
				dispatch({
					type: FETCH_USER_TYPE,
					payload: { author: result.data },
				});
			})
			.catch(function (err) {
				userCache.pop(userId);
				console.log("HOUSTON: we have an: ", err);
			});
	};
};

const fetchBlogsAction = function () {
	return (dispatch) => {
		Promise.all([axiosJsonP.get("/posts"), axiosJsonP.get("/users")])
			.then(function (results) {
				dispatch(blogsActionPojo(results[0].data, results[1].data));
			})
			.catch(function (err) {
				console.log("HOUSTON, we have a problem... ", err);
			});
	};
};

const blogsActionPojo = function (posts, authors) {
	return {
		type: FETCH_POSTS_TYPE,
		payload: {
			posts: posts,
			authors: authors,
		},
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
