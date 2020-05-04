import React from "react";
import faker from "faker";

import { connect } from "react-redux";
import Author from "./Author";

const PostList = function ({ posts }) {
	if (!posts) {
		return <div>Waiting for data...</div>;
	}

	const renderPosts = () => {
		return posts.map((post) => {
			return (
				<div className="ui item segment" key={post.title}>
					<div className="image">
						<img src={faker.image.avatar()} alt=""></img>
					</div>
					<div className="content">
						<div className="header">
							<h1>{post.title}</h1>
						</div>
						<div className="description">
							<p>{post.body}</p>
						</div>
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
