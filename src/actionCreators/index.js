import { axiosJsonP } from "../api/axios/JsonPlaceholder";

const INIT_BLOGS_TYPE = "INIT_BLOGS";
const GET_AUTHOR_TYPE = "GET_AUTHOR";

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
					type: GET_AUTHOR_TYPE,
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
		type: INIT_BLOGS_TYPE,
		payload: {
			posts: posts,
			authors: authors,
		},
	};
};

export { fetchBlogsAction, fetchUserAction, GET_AUTHOR_TYPE, INIT_BLOGS_TYPE };

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
