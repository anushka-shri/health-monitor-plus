import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import './chartsCSS/linechartSugar.css';
import {
	ArgumentAxis,
	ValueAxis,
	Chart,
	LineSeries,
	Legend,
	Title,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

import { useGlobalContext } from './../../Context/AppContext';




function sugarChart (){

    const { sugar,  getSugar } = useGlobalContext();

	const data= [
		{ argument: 'Day-1', value: 10, argument2: 'Day-1', value2: 10},
		{ argument: 'Day-2', value: 20, argument2:'Day-2' , value2: 30},
		{ argument: 'Day-3', value: 60, argument2:'Day-3', value2: 80 },
		{ argument: 'Day-4', value: 10 ,argument2:'Day-4', value2: 50},
		{ argument: 'Day-5', value: 80 ,argument2:'Day-5', value2: 10},
		{ argument: 'Day-6', value: 20 ,argument2: 'Day-6', value2: 45},
		{ argument: 'Day-7', value: 25 ,argument2: 'Day-7', value2: 25},
	];
	
	
	  const array = Array.from(sugar);
	//   array.map((el,i) => {
	//  	 data[i].value = el.Result;
	// 	 console.log(data[i].value); 
	// 	 data[i].value2 = el.Result;
	// 	 console.log(data[i].value2);
		 
	//   });

	
	return(
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
					name='Fasting'
				/>
				<LineSeries
					valueField='value2'
					argumentField='argument2'
					name='Random'
				/>
				
                <Title text='Sugar Stats' />
			</Chart>
		</Paper>
	</div>
)};

export default sugarChart;