import React from "react";
import { connect } from "react-redux";
import { fetchUserAction } from "../actionCreators";

class Author extends React.Component {
	render() {
		console.log("AUTHOR rendering()....");
		return (
			<div>
				<i className="icon user" />
				Post authored by: <b>{this.props.author}</b>
			</div>
		);
	}
}

const mapStateToProps = function (state, ownProps) {
	const author = state.authors.get(ownProps.id);
	//	console.log(`STATE:  ${author} USER: ${ownProps.id}`);
	return { author: author ? author : null };
};

export default connect(mapStateToProps, { fetchUserAction })(Author);
