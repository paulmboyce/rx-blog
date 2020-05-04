import { axiosJsonP } from "../api/axios/JsonPlaceholder";
const INIT_BLOGS_TYPE = "INIT_BLOGS";

const initBlogsAction = async function () {
	let data = [];
	try {
		// Get from AXIOS
		let response = await axiosJsonP.get("/posts");
		console.log(
			`INIT BLOG ACTION CREATER: Returning: ${response.data.length} posts... `
		);
		data = response.data;
		//			store.dispatch(initBlogsAction(response.data));
	} catch (err) {
		console.log("HOUSTON ... We have a problem... ==> ", err);
	} finally {
		return {
			type: INIT_BLOGS_TYPE,
			payload: {
				posts: data,
			},
		};
	}
};

export { initBlogsAction, INIT_BLOGS_TYPE };
