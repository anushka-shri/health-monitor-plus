import React from 'react';
import AllRoutes from './AllRoutes';
import axios from 'axios';

axios.defaults.withCredentials = true;

function App() {
	return (
		<div className='App'>
			<AllRoutes />
		</div>
	);
}

export default App;
