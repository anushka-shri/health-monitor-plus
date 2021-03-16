import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import './chartsCSS/BPchart2.css';
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
	{ argument: 1, value: 10, argument1: 1, value2: 15 },
	{ argument: 2, value: 20, argument1: 2, value2: 10 },
	{ argument: 3, value: 40, argument1: 3, value2: 20 },
	{ argument: 4, value: 20, argument1: 4, value2: 30 },
	{ argument: 5, value: 30, argument1: 5, value2: 10 },
	{ argument: 6, value: 10, argument1: 6, value2: 22 },
	{ argument: 7, value: 25, argument1: 7, value2: 10 },
];

export default () => (
	<div className='line_containerBPE'>
		<Paper className='linechartBPE'>
			<Chart className='linechartBPE' data={data}>
				<ArgumentAxis />
				<ValueAxis />

				<Legend />
				<Animation />
				<LineSeries
					valueField='value'
					argumentField='argument'
					name='Systolic'
				/>
				<LineSeries
					valueField='value2'
					argumentField='argument1'
					name='Diastolic'
				/>

				<Title text='BP Stats Evening' />
			</Chart>
		</Paper>
	</div>
);
