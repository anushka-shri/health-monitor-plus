import React, { useContext, useEffect, useReducer } from 'react';
import {
	SET_BP,
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
    
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider
			value={{ }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
