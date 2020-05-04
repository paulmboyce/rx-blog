import React from "react";
import { connect } from "react-redux";

import { axiosJsonP } from "../api/axios/JsonPlaceholder";
import PostList from "./PostList";
import { initBlogsAction } from "../actionCreators";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.initData(props.store);
	}

	initData(store) {
		// Get from AXIOS
		axiosJsonP
			.get("/posts")
			.then(function (response) {
				console.log("RESPONSE: /posts ", response.data);
				store.dispatch(initBlogsAction(response.data));
			})
			.catch(function (err) {
				console.log("HOUSTON ... We have a problem... ==> ", err);
			});
	}

	render() {
		return (
			<div>
				Hello App!
				<PostList posts={this.props.posts} />
			</div>
		);
	}
}

const mapStateToProps = function (state) {
	console.log("APP STATE: ", state);
	return { posts: state.posts };
};
export default connect(mapStateToProps, { initBlogsAction })(App);
