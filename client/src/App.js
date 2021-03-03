import React from 'react';
import './App.css';
import Particles from './Components/Particles/Particles.js';

import AllRoutes from './AllRoutes';
// import axios from 'axios';

// axios.defaults.withCredentials = true;

function App() {
	return (
		<div className='App'>
			<AllRoutes />
			<Particles />
		</div>
	);
}

export default App;
