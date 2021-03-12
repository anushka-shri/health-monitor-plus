import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import './chartsCSS/linechartBP.css';
import {
	ArgumentAxis,
	ValueAxis,
	Chart,
	LineSeries,
	Legend,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';

const data = [
	{ argument: 1, value: 10 },
	{ argument: 2, value: 20 },
	{ argument: 3, value: 40 },
	{ argument: 4, value: 20 },
	{ argument: 5, value: 30 },
	{ argument: 6, value: 10 },
	{ argument: 7, value: 25 },
];

export default () => (
	<div className='line_containerBP'>
		<Paper className='linechartBP'>
			<Chart className='linechartBP' data={data}>
				<ArgumentAxis />
				<ValueAxis />

				<Legend />
				<Animation />
				<LineSeries
					valueField='value'
					argumentField='argument'
					name='Series name'
				/>

				<Title text='Blood Pressure Stats' />
			</Chart>
		</Paper>
	</div>
);
