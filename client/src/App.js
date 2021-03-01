import React from 'react';
import './App.css';
import { Navbar, Sidebar, Footer } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LoginRouter from './authPages/authRouter'
import {
	DashBoard,
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
			<Navbar />
			<Sidebar />
			<Switch>
				<Route exact path='/'>
					<DashBoard />
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
			<Footer />
		</Router>
	);
}

export default App;
