import { combineReducers } from "redux";
import { axiosJsonP } from "../api/axios/JsonPlaceholder";

const blogListReducer = async function (oldBlogList = [], action) {
	// Get from AXIOS
	try {
		const response = await axiosJsonP.get("/posts");
		console.log("RESPONSE: /posts ", response.data);
		return response;
	} catch (err) {
		console.log("HOUSTON ... We have a problem... ==> ", err);
		return oldBlogList;
	}

	//return oldBlogList;
};

const reducers = combineReducers({
	posts: blogListReducer,
});

export { reducers };
