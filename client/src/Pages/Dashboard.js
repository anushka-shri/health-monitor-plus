import React from 'react';
import './pagesCSS/Dashboard.css'
import Particles from '../Components/Particles/Particles2.js';
import LinechartSugar from '../Components/Chart/linechartSugar';
import LinechartBP from '../Components/Chart/linechartBP';
import CardPres from '../Components/Cards/CardPres'
import Fade from 'react-reveal/Fade';

function Dashboard() {
	return (
		<>
			<Particles />
			<div className='Dashboard_linecharts'>
				<Fade top>
					<CardPres />
				</Fade>
				<Fade bottom>
					<LinechartSugar className='line1' />
				</Fade>
				<Fade bottom>
					<LinechartBP className='line2' />
				</Fade>
			</div>
		</>
	);
}

export default Dashboard;
