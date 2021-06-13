import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import {
	CHECK_LOGIN,
	CHECK_LOGOUT,
	SET_SUGAR,
} from './Actions';
import reducer from './Reducer';

const initialState = {
	sugar: 'soha',
	isLoggedIn: undefined,
	LoggedOut: undefined,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	async function getLoggedIn() {
		const loggedInRes = await axios.get(
			'http://localhost:3005/api/v1/users/isLoggedIn',
		);
		dispatch({
			type: CHECK_LOGIN,
			payload: {
				LoggedIn: loggedInRes.data,
			},
		});
	}

	const LogOut = async () => {
		const loggedOutRes = await axios.get(
			'http://localhost:3005/api/v1/users/logout',
		);

		dispatch({
			type: CHECK_LOGOUT,
		});
	};

	const getSugar = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/monitor/getGlucose',
			);
			console.log(res);
			dispatch({
				type: SET_SUGAR,
				payload: {
					result: res.data.records,
				},
			});
		} catch {}
	};

	useEffect(() => {
		getLoggedIn();
		
	}, []);

	return (
		<AppContext.Provider value={{ ...state, getSugar, getLoggedIn, LogOut }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
