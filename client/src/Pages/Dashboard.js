import React, { useEffect, useState } from 'react';
import './pagesCSS/Dashboard.css';
import { BarGraph, LineChartBP, LineChartSugar, Cards } from '../Components';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

function Dashboard() {
	const [records, setRecords] = useState([]);

	const getRecords = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/monitor/getGlucose',
			);
			res.data.records.map((element) => {
				console.log(element);
				setRecords(element);
			});
			console.log(records);
		} catch {}
	};

	useEffect(() => {
		getRecords();
	}, []);

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
