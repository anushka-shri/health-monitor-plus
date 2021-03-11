import React, { useContext, useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import {
	SET_BP,
	CHECK_LOGIN,
	SET_SUGAR,
	SET_DOCTORS,
	SET_PRESCRIPTIONS,
	SET_FAMILYHISTORY,
	SET_OXYGEN,
	SET_VACCINATIONS,
	SET_PULSE,
	SET_LABREPORTS,
} from '../Actions';
import reducer from '../Reducer'

const initialState = {
	sugar: 'soha',
	isLoggedIn:undefined,
    
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	

	async function getLoggedIn() {
		const loggedInRes = await axios.get(
			'http://localhost:3005/api/v1/users/isLoggedIn',
		);
		dispatch({
			type: CHECK_LOGIN,
			payload:
			{
				LoggedIn: loggedInRes.data,	
			}})
		
	}

	


	const getSugar = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/monitor/getGlucose',
			);
			dispatch({
				type: SET_SUGAR, payload:
				{
					result: res.data.records.Result,	
				}})
			
			
		} catch {}
	};

	useEffect(() => {
		getLoggedIn();
		getSugar();
	}, []);


	return (
		<AppContext.Provider
			value={{...state, getSugar, getSugar }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
