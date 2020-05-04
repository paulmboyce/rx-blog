import React from "react";
import { connect } from "react-redux";

const PostList = function ({ posts }) {
	if (!posts) {
		return <div>Waiting for data...</div>;
	}

	const renderPosts = () => {
		let jmx = <div>Waiting for JMX...</div>;
		console.log("POSTS: ", posts);
		posts
			.then(function (result) {
				jmx = result.data.map((post) => {
					console.log("POST: ", post);
					return (
						<div>
							<img alt=""></img>
							<div>Title: {post.title} </div>
							<div>Body: {post.body}</div>
							<div>Author:</div>
						</div>
					);
				});
			})
			.finally(function () {
				console.log("JMX: ", jmx);
				return jmx;
			});
	};

	return <div>{renderPosts()}</div>;
};

const mapStateToProps = (state) => {
	console.log("STATE: ", state);
	return { posts: state.posts ? state.posts : [] };
};
export default connect(mapStateToProps)(PostList);
