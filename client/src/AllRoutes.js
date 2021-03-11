import React, { useContext } from 'react';
import { Sidebar } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthContext from './Context/AuthContext';
// import LoginRouter from './authPages/authRouter'
import Particles from './Components/Particles/Particles'
import {
	Dashboard,
	Doctors,
	NewDoctors,
	NewPrescription,
	Prescriptions,
	Error,
	DailyMonitoring,
	FamilyHistory,
	Vaccinations,
	Medications,
	LabReports,
} from './Pages/index.js';

import { LoginPage, RegisterPage } from './authPages';

const AllRoutes = () => {
	const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn);
	return (
		<Router>
			
			<Switch>
				
				 {loggedIn === false  && ( 
					 <> 
					<Route exact path='/register'>
							<RegisterPage />
						</Route>
						<Route exact path='/login'>
							<LoginPage />
						</Route>
					</>
				 )} 
				 {loggedIn === true && (
					<>
					<Particles />
					<Sidebar /> 
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

						<Route exact path='/daily-monitoring'>
							<DailyMonitoring />
						</Route>
						<Route exact path='/family-history'>
							<FamilyHistory />
						</Route>

						<Route exact path='/vaccinations'>
							<Vaccinations />
						</Route>
						<Route exact path='/medications'>
							<Medications />
						</Route>
						<Route exact path='/lab-reports'>
							<LabReports />
						</Route>
						
					</>
				)} 
			</Switch>
			 
		</Router>
	);
};

export default AllRoutes;
