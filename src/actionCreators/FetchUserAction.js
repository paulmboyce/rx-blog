import { axiosJsonP } from "../api/axios/JsonPlaceholder";

const FETCH_USER_TYPE = "FETCH_USER";

const fetchUserAction = function (userId) {
	return function (dispatch) {
		axiosJsonP
			.get(`/users/${userId}`)
			.then(function (result) {
				dispatch({
					type: FETCH_USER_TYPE,
					payload: { user: result.data },
				});
			})
			.catch(function (err) {
				console.log("HOUSTON: we have an: ", err);
			});
	};
};

export { fetchUserAction, FETCH_USER_TYPE };
