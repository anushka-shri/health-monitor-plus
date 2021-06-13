import React from 'react';
import AllRoutes from './AllRoutes';
import axios from 'axios';
import { AppProvider } from './Context/AppContext';




axios.defaults.withCredentials = true;

function App() {
	return (
		<div className='App'>
			<AppProvider>
			<AllRoutes />
			</AppProvider>
			
		</div>
	);
}

export default App;
