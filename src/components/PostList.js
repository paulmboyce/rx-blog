import React from "react";
import faker from "faker";

import { connect } from "react-redux";
import Author from "./Author";
import { initBlogsAction } from "../actionCreators";

class PostList extends React.Component {
	componentDidMount() {
		console.log("Calling initBlogsAction(). PostList..");
		this.props.initBlogsAction();
	}

	renderPosts() {
		if (!this.props.posts) {
			return <div>Waiting for data...</div>;
		}
		return this.props.posts.map((post) => {
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
	}

	render() {
		return <div>Posts:{this.renderPosts()}</div>;
	}
}

const mapStateToProps = (state) => {
	console.log("POSTLIST STATE: ", state);
	return { posts: state.posts };
};
export default connect(mapStateToProps, { initBlogsAction })(PostList);
