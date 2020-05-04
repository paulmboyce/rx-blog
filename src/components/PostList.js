import React from "react";
import { connect } from "react-redux";
import Author from "./Author";

const PostList = function ({ posts }) {
	if (!posts) {
		return <div>Waiting for data...</div>;
	}

	const renderPosts = () => {
		return posts.map((post) => {
			return (
				<div className="ui segment" key={post.title}>
					<img alt=""></img>
					<div>
						<h1>{post.title}</h1>
					</div>
					<div>
						<p>{post.body}</p>
					</div>
					<div>
						<Author name={post.author} />
					</div>
				</div>
			);
		});
	};

	return <div>{renderPosts()}</div>;
};

const mapStateToProps = (state) => {
	console.log("POSTLIST STATE: ", state);
	return { posts: state.posts };
};
export default connect(mapStateToProps)(PostList);
