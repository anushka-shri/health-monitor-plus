import React from 'react';
import './pagesCSS/Dashboard.css';
import {
	BarGraph,
	LineChartBP,
	LineChartSugar,
	Cards
} from '../Components';
import Fade from 'react-reveal/Fade';

function reloadPage() {
	console.log('here');
	// The last "domLoading" Time //
	var currentDocumentTimestamp =
	new Date(performance.timing.domLoading).getTime();
	// Current Time //
	var now = Date.now();
	// Ten Seconds //
	var tenSec = 10 * 1000;
	// Plus Ten Seconds //
	var plusTenSec = currentDocumentTimestamp + tenSec;
	if (now > plusTenSec) {
	window.location.reload();
	} else {}
	}
	reloadPage();






function Dashboard() {
	return (
		<div className='Dashboard_container'>

			
			<Fade top>
				<Cards />
			</Fade>
			<div className='Dashboard_linecharts'>
				<Fade left>
					<LineChartSugar />
				</Fade>
				<Fade right>
					<LineChartBP />
				</Fade>
			</div>
			<Fade bottom>
				<BarGraph />
			</Fade>
		</div>
	);
}

export default Dashboard;
