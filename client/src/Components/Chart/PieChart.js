import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
	Chart,
	PieSeries,
	Title,
	Legend,
} from '@devexpress/dx-react-chart-material-ui';
import './chartsCSS/piechart.css';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
	{ region: 'Doctors added', val: 4 },
	{ region: 'Prescriptions added', val: 1 },
	{ region: 'Vaccinations added', val: 3 },
	{ region: 'Lab reports added', val: 5 },
	{ region: 'Hospitals Added', val: 7 },
	{ region: 'Medicines Added', val: 3 },
];

export default function ActivityStats() {
	const [chartData, setChartData] = useState(data);

	return (
		<div className='pie-chart-container'>
			<Paper className='pie-chart'>
				<Chart data={chartData} className='pie-chart'>
					<PieSeries
						valueField='val'
						argumentField='region'
						innerRadius={0.6}
					/>
					<Title text='Your Activity' />
					<Legend />
					<Animation />
				</Chart>
			</Paper>
		</div>
	);
}
