import { axiosJsonP } from "../api/axios/JsonPlaceholder";

const INIT_BLOGS_TYPE = "INIT_BLOGS";

const initBlogsAction = function () {
	return (dispatch) => {
		axiosJsonP
			.get("/posts")
			.then(function (response) {
				dispatch(initBlogsActionPojo(response.data));
			})
			.catch(function (err) {
				console.log("HOUSTON, we have a problem... ", err);
			});
	};
};

const initBlogsActionPojo = function (data) {
	return {
		type: INIT_BLOGS_TYPE,
		payload: {
			posts: data,
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
