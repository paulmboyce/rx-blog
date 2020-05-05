import React from "react";
import faker from "faker";

import { connect } from "react-redux";
import Author from "./Author";
import { initBlogsAction } from "../actionCreators";

class PostList extends React.Component {
	componentDidMount() {
		console.log("componentDidMount(). Getting data...");
		this.props.initBlogsAction();
	}

	renderPosts() {
		if (!this.props.posts) {
			return <div>Waiting for data...</div>;
		}
		return this.props.posts.map((post) => {
			return (
				<div className="ui item segment" key={post.title}>
					<div className="content">
						<div className="description">
							<h2>{post.title}</h2>
							<p>{post.body}</p>
							<Author name={post.author} />
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return <div className="ui relaxed list">{this.renderPosts()}</div>;
	}
}

const mapStateToProps = (state) => {
	console.log("POSTLIST STATE: ", state);
	return { posts: state.posts };
};
export default connect(mapStateToProps, { initBlogsAction })(PostList);
