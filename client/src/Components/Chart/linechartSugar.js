import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import './linechartSugar.css';
import {
	ArgumentAxis,
	ValueAxis,
	Chart,
	LineSeries,
	Legend,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import axios from 'axios';

const data = [
	{ argument: 1, value: 10 },
	{ argument: 2, value: 20 },
	{ argument: 3, value: 60 },
	{ argument: 4, value: 10 },
	{ argument: 5, value: 80 },
	{ argument: 6, value: 20 },
	{ argument: 7, value: 25 },
];



export default () => (
	<div className='line_container'>
		<Paper className='linechart'>
			<Chart className='linechart' data={data}>
				<ArgumentAxis />
				<ValueAxis />

				<Legend />
				<Animation />
				<LineSeries
					valueField='value'
					argumentField='argument'
					name='Series name'
				/>

				<Title text='Sugar Stats' />
			</Chart>
		</Paper>
	</div>
);
