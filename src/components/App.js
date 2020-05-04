import React from "react";
import { connect } from "react-redux";

import PostList from "./PostList";

const App = function ({ store }) {
	return (
		<div className="ui container items">
			<PostList store={store} />
		</div>
	);
};

export default App;
