import React from 'react';
import { Sidebar } from './Components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useGlobalContext } from './Context/AppContext';
import Particles from './Components/Particles/Particles';
import {
	Dashboard,
	Scheduler,
	Doctors,
	NewDoctors,
	NewPrescription,
	Prescriptions,
	DailyMonitoring,
	FamilyHistory,
	Medications,
	LabReports,
	FixedMenuLayout
	
} from './Pages/index.js';



import { LoginPage, RegisterPage } from './authPages';

const AllRoutes = () => {
	const { isLoggedIn, getLoggedIn } = useGlobalContext();
	return (
		<Router>
			<Switch>
				{isLoggedIn === false && (
					<>
						<Route exact path='/register'>
							<RegisterPage />
						</Route>
						<Route exact path='/login'>
							<LoginPage />
						</Route>
					</>
				)}

				{isLoggedIn === true && (
					<>
						
						<Particles />
						<Sidebar />

						<Route exact path='/'>
							<Dashboard />
						</Route>
						<Route exact path='/events'>
							<Scheduler />
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
						<Route exact path='/medications'>
							<Medications />
						</Route>
						<Route exact path='/lab-reports'>
							<LabReports />
						</Route>
						<Route exact path='/profile'>
							<FixedMenuLayout />
						</Route>
					</>
				)}
			</Switch>
		</Router>
	);
};

export default AllRoutes;
