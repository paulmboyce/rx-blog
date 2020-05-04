import React from "react";
import { connect } from "react-redux";

const PostList = function ({ posts }) {
	if (!posts) {
		return <div>Waiting for data...</div>;
	}

	const renderPosts = () => {
		return posts.map((post) => {
			return (
				<div key={post.title}>
					<img alt=""></img>
					<div>Title: {post.title} </div>
					<div>Body: {post.body}</div>
					<div>Author:</div>
				</div>
			);
		});
	};

	return <div>Posts: {renderPosts()}</div>;
};

const mapStateToProps = (state) => {
	console.log("POSTLIST STATE: ", state);
	return { posts: state.posts };
};
export default connect(mapStateToProps)(PostList);
