import { FETCH_USER_TYPE } from "../actionCreators";
const userReducer = function (state = [], action) {
	switch (action.type) {
		case FETCH_USER_TYPE: {
			return [...state, action.payload.user];
		}
		default:
			return state;
	}
};

export { userReducer };
