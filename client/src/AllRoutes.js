import React from 'react';
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
	DailyMonitoring,
	FamilyHistory,
	HeightWeight,
   Vaccinations,
    Medications,
    LabReports
} from './Pages/index.js';

const AllRoutes = () => {

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
				
				<Route exact path='/daily-monitoring'>
					<DailyMonitoring />
				</Route>
				<Route exact path='/family-history'>
					<FamilyHistory />
				</Route>
				
				<Route exact path='/height-weight'>
					<HeightWeight />
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
				<Route path='*'>
					<Error />
				</Route>
			</Switch>
		</Router>
    )
}

export default AllRoutes