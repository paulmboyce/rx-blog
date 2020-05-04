import React from "react";
import { connect } from "react-redux";

import { axiosJsonP } from "../api/axios/JsonPlaceholder";
import PostList from "./PostList";
import { initBlogsAction } from "../actionCreators";

const App = function () {
	// Get from AXIOS
	axiosJsonP
		.get("/posts")
		.then(function (response) {
			console.log("RESPONSE: /posts ", response.data);
			initBlogsAction(response.data);
		})
		.catch(function (err) {
			console.log("HOUSTON ... We have a problem... ==> ", err);
		});

	return (
		<div>
			Hello App!
			<PostList />
		</div>
	);
};

export default connect(null, { initBlogsAction })(App);
