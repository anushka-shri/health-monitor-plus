import React, { useEffect, useState } from 'react';
import './pagesCSS/Dashboard.css';
import { BarGraph, LineChartBP, LineChartSugar, Cards, PieChart } from '../Components';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import { useGlobalContext } from '../Context/AppContext';

function Dashboard() {
	
	return (
		<div className='Dashboard_container'>
			<h2 className='Dashboard_heading'>
				<Fade right>DashBoard</Fade>
			</h2>

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
			<Fade bottom>
				<PieChart />
			</Fade>
		</div>
	);
}

export default Dashboard;
