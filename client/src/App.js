import React from 'react';
import './App.css';
import { Sidebar } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LoginRouter from './authPages/authRouter'
import {
	Dashboard,
	Doctors,
	NewDoctors,
	NewPrescription,
	Prescriptions,
	Error,
} from './Pages/index.js';
import axios from 'axios';

// axios.defaults.withCredentials = true;

function App() {
	return (
		<Router>
			<Sidebar />
			
			
			<Switch>
				<Route exact path='/'>
					<Dashboard />
				</Route>
				<Route exact path='/doctors'>
					<Doctors />
				</Route>
				<Route exact path='/new-doctors'>
					<NewDoctors />
				</Route>
				<Route exact path='/prescriptions'>
					<Prescriptions />
				</Route>
				<Route exact path='/new-prescription'>
					<NewPrescription />
				</Route>
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
			
		</Router>
	);
}

export default App;
