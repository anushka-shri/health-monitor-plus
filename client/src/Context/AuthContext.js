import React, { useState,useEffect, createContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

function AuthContextProvider(props) {
	const [loggenIn, setLoggedIn] = useState(false);

	async function getLoggedIn() {
		const loggedInRes = await axios.get('http://localhost:3005/api/v1/auth/loggedIn');
		setLoggedIn(loggedInRes.data);
    }
    
    useEffect(() => {
        getLoggedIn();
    }, []);

    return <AuthContext.Provider value={{ loggenIn, getLoggedIn }}>
        {props.children}
    </AuthContext.Provider>;
}


export default AuthContext;
export { AuthContextProvider };
