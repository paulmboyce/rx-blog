import React from "react";

import { connect } from "react-redux";
import User from "./User";
import { fetchPostsAction } from "../actionCreators";

class PostList extends React.Component {
	componentDidMount() {
		this.props.fetchPostsAction();
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
							<User userId={post.userId} />
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
	return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPostsAction })(PostList);
