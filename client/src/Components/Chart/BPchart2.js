import React, { useState, useEffect } from 'react';
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
import { Animation } from '@devexpress/dx-react-chart';
import axios from 'axios';


function bpChart () { 

	const [bp2, setBp2] = useState([]);

	const getBp = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/monitor/getBloodPressure/Evening',
			);
			console.log(res);
			setBp2(res.data.records);
		} catch {}
	};

	useEffect(() => {
		getBp();
	}, []);

//get past seven days
var timeFrom = (X) => {
	var dates = [];
	for (let I = 0; I < Math.abs(X); I++) {
		dates.push(
			new Date(
				new Date().getTime() - (X >= 0 ? I : I - I - I) * 24 * 60 * 60 * 1000,
			).toLocaleString('en-US'),
		);
	}
	return dates;
};
const pastDays = timeFrom(7);
console.log(pastDays)

const pastDates = [];
const pastDatesRecords = [];
const getPastDate = (string) =>
	(([month, day, year]) => ({ day, month, year }))(string.split('/'));
pastDays.forEach((el, i) => {
	pastDates.push(getPastDate(el.split(',')[0]));
});
pastDates.reverse();
console.log(pastDates);

const getPastDateRecord = (string) =>
	(([year, month, day]) => ({ day, month, year }))(string.split('-'));

const data = [
	{
		argument: `${pastDates[0].day}/${pastDates[0].month}`,
		value: 0,
		argument1: `${pastDates[0].day}/${pastDates[0].month}`,
		value2: 0,
	},
	{
		argument: `${pastDates[1].day}/${pastDates[1].month}`,
		value: 0,
		argument1: `${pastDates[1].day}/${pastDates[1].month}`,
		value2: 0,
	},
	{
		argument: `${pastDates[2].day}/${pastDates[2].month}`,
		value: 0,
		argument1: `${pastDates[2].day}/${pastDates[2].month}`,
		value2: 0,
	},
	{
		argument: `${pastDates[3].day}/${pastDates[3].month}`,
		value: 0,
		argument1: `${pastDates[3].day}/${pastDates[3].month}`,
		value2: 0,
	},
	{
		argument: `${pastDates[4].day}/${pastDates[4].month}`,
		value: 0,
		argument1: `${pastDates[4].day}/${pastDates[4].month}`,
		value2: 0,
	},
	{
		argument: `${pastDates[5].day}/${pastDates[5].month}`,
		value: 0,
		argument1: `${pastDates[5].day}/${pastDates[5].month}`,
		value2: 0,
	},
	{
		argument: `${pastDates[6].day}/${pastDates[6].month}`,
		value: 0,
		argument1: `${pastDates[6].day}/${pastDates[6].month}`,
		value2: 0,
	},
];

const array = Array.from(bp2);

array.map((el, i) => {
	var obj = new Object();
	obj.date = getPastDateRecord(el.DateOfRec.split('T')[0]);
	obj.Systolic = el.Systolic;
	obj.Diastolic = el. Diastolic;
	pastDatesRecords.push(obj);
	if (pastDatesRecords[i].date.day.startsWith('0')) {
		pastDatesRecords[i].date.day = pastDatesRecords[i].date.day.split('0')[1];
	}
	if (pastDatesRecords[i].date.month.startsWith('0')) {
		pastDatesRecords[i].date.month = pastDatesRecords[i].date.month.split(
			'0',
		)[1];
	}

});

console.log(pastDatesRecords)
const finalDate = [];
pastDatesRecords.map((el, i) => {
	const found = pastDates.find(function(Element) {
		return (
			Element.day === pastDatesRecords[i].date.day &&
			Element.month === pastDatesRecords[i].date.month &&
			Element.year === pastDatesRecords[i].date.year
		);
		
	});
	console.log(found);
	if (found !== undefined) {
		finalDate.push(pastDatesRecords[i]);
	}
	
});

console.log(finalDate);

finalDate.map((el, i) => {
	const index = pastDates.findIndex((element) => {
		return (
			element.day === el.date.day &&
			element.month === el.date.month &&
			element.year === el.date.year
		);
	});
	console.log(index);
	
		data[index].value = el.Systolic;
	  	data[index].value2 = el.Diastolic;
		console.log(data);
	
});


return(
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
)};

export default bpChart;