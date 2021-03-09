import React,{useEffect} from 'react';
import './pagesCSS/Dashboard.css';
import {
	BarGraph,
	LineChartBP,
	LineChartSugar,
	Cards
} from '../Components';
import Fade from 'react-reveal/Fade';



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
