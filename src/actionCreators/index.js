const INIT_BLOGS_TYPE = "INIT_BLOGS";

const initBlogsAction = function (posts) {
	console.log(
		`INIT BLOG ACTION CREATER: Returning: ${posts.length} posts... `
	);

	return {
		type: INIT_BLOGS_TYPE,
		payload: {
			posts: posts,
		},
	};
};

export { initBlogsAction, INIT_BLOGS_TYPE };
