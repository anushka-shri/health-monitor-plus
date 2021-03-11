import React from 'react';
import './App.css';
import { AuthContextProvider } from './Context/AuthContext';



import AllRoutes from './AllRoutes';
 import axios from 'axios';

 axios.defaults.withCredentials = true;

function App() {
	return (
		<div className='App'>
			
			<AuthContextProvider>
				<AllRoutes />
			</AuthContextProvider>
		</div>
	);
}

export default App;
