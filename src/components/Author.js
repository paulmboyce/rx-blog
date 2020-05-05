import React from "react";

const Author = function ({ name }) {
	return (
		<div>
			<i className="big middle aligned icon user" />
			Post authored by: {name}
		</div>
	);
};

export default Author;
