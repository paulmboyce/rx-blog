import React from "react";
import faker from "faker";

import { connect } from "react-redux";
import { axiosJsonP } from "../api/axios/JsonPlaceholder";
import Author from "./Author";
import { initBlogsAction } from "../actionCreators";

class PostList extends React.Component {
	componentDidMount() {
		this.initData(this.props.store);
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
		return <div>{this.renderPosts()}</div>;
	}
}

const mapStateToProps = (state) => {
	console.log("POSTLIST STATE: ", state);
	return { posts: state.posts };
};
export default connect(mapStateToProps, { initBlogsAction })(PostList);
