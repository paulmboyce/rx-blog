import { axiosJsonP } from "../api/axios/JsonPlaceholder";

const INIT_BLOGS_TYPE = "INIT_BLOGS";

const initBlogsAction = function () {
	return (dispatch) => {
		Promise.all([axiosJsonP.get("/posts"), axiosJsonP.get("/users")])
			.then(function (results) {
				dispatch(initBlogsActionPojo(results[0].data, results[1].data));
			})
			.catch(function (err) {
				console.log("HOUSTON, we have a problem... ", err);
			});
	};
};

const initBlogsActionPojo = function (posts, authors) {
	return {
		type: INIT_BLOGS_TYPE,
		payload: {
			posts: posts,
			authors: authors,
		},
	};
};

export { initBlogsAction, INIT_BLOGS_TYPE };

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
