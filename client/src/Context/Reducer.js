import {
	SET_SUGAR,
	CHECK_LOGIN,
	CHECK_LOGOUT,
} from './Actions';

const reducer = (state, action) => {
	if (action.type === SET_SUGAR) {
		return {
			...state,
			sugar: action.payload.result,
		};
	} else if (action.type === CHECK_LOGIN) {
		return {
			...state,
			isLoggedIn: action.payload.LoggedIn,
		};
	} else if (action.type === CHECK_LOGOUT) {
		return {
			...state,
			isLoggedIn: false,
		};
	} else {
		throw new Error('Invalid action');
	}
};

export default reducer;
