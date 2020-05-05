import React from "react";

const Author = function ({ name }) {
	return (
		<div>
			<i className="big middle aligned icon user" />
			<h2> {name} </h2>
		</div>
	);
};

export default Author;
