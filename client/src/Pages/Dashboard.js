import React from 'react';
import './pagesCSS/Dashboard.css';
import {
	BarGraph,
	LineChartBP,
	LineChartSugar,
	Cards,
	PieChart,
	BPChartE,
	Chat,
} from '../Components';
import ScrollUpButton from 'react-scroll-up-button';
import Fade from 'react-reveal/Fade';

function Dashboard() {
	return (
		<div className='Dashboard_container'>
			<h2 className='Dashboard_heading'>
				<Fade right>Dash Board</Fade>
			</h2>

			<Fade top>
				<Cards />
			</Fade>

			<Fade left>
				<LineChartSugar />
			</Fade>

			<Fade bottom>
				<LineChartBP />
			</Fade>
			<Fade bottom>
				<BPChartE />
			</Fade>
			<Fade bottom>
				<BarGraph />
			</Fade>
			<Fade bottom>
				<PieChart />
			</Fade>
			<Chat />
			<div>
				<ScrollUpButton />
			</div>
		</div>
	);
}

export default Dashboard;
