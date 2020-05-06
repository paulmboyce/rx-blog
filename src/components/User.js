import React from "react";
import { connect } from "react-redux";
import { fetchUserAction } from "../actionCreators";

class User extends React.Component {
	render() {
		if (!this.props.user) {
			return null;
		}
		return (
			<div>
				<i className="icon user" />
				Post usered by: <b>{this.props.user.name}</b>
			</div>
		);
	}
}

const mapStateToProps = function (state, ownProps) {
	const user = state.users.find(function (user) {
		return user.id === ownProps.userId;
	});
	return { user: user ? user : null };
};

export default connect(mapStateToProps)(User);
