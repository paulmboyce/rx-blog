import React from "react";
import { connect } from "react-redux";
import { fetchUserAction } from "../actionCreators";

class Author extends React.Component {
	componentDidMount() {
		console.log("AUTHOR componentDidMount(). Getting state...");
		this.props.fetchUserAction(this.props.id);
	}

	render() {
		console.log("AUTHOR rendering()....");
		return (
			<div>
				<i className="icon user" />
				Post authored by: <b>{this.props.authors.get(this.props.id)}</b>
			</div>
		);
	}
}

const mapStateToProps = function (state) {
	return { authors: state.authors };
};

export default connect(mapStateToProps, { fetchUserAction })(Author);
