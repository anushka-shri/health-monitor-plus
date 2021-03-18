import React, { Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Container from '@material-ui/core/Container';
import Particles from '../../Components/Particles/Particles';
import { TimePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';

import '../pagesCSS/DailyMonitoring.css';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	form: {
		width: '140%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	input: {
		display: 'none',
	},
}));

function DailyMonitoring() {
	const [value, setValue] = useState('');
	const [systolic, setSystolic] = useState('');
	const [diastolic, setDiastolic] = useState('');
	const [pulse, setPulse] = useState('');
	const [result, setResult] = useState('');
	const [pulseOxygen, setPulseOxygen] = useState('');
	const [sugar, setSugar] = useState('');
	const [selectedDate, setSelectedDate] = useState(new Date());
	

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	

	const bpHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				'http://localhost:3005/api/v1/monitor/bloodPressure',
				{
					Systolic: systolic,
					Diastolic: diastolic,
					Pulse: pulse,
					DateOfRec:selectedDate,
					Time:value,
					
				},
			);

			if (res.data.status === 'success') {
				window.alert('Blood Pressure recorded!');
			}
		} catch {}
	};

	const oxygenHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				'http://localhost:3005/api/v1/monitor/oxygenSaturation',
				{
					Result: result,
					Pulse: pulseOxygen,
					DateOfRec: Date.now(),
				},
			);

			if (res.data.status === 'success') {
				window.alert('Oxygen Saturation recorded!');
			}
		} catch {}
	};

	const sugarHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				'http://localhost:3005/api/v1/monitor/bloodGlucose',
				{
					Type: value,
					Result: sugar,
					DateOfRec:selectedDate,
				},
			);

			if (res.data.status === 'success') {
				window.alert('Blood sugar recorded!');
			}
		} catch {}
	};

	const classes = useStyles();

	return (
		<>
			<Particles />
			<div className='DM_container'>
				<Container component='main' maxWidth='xs' className='root'>
					<CssBaseline />
					<Typography component='h1' variant='h'>
						Daily Monitoring
					</Typography>
					<div className={classes.paper}>
						<form className={classes.form} Validate>
							<Typography component='h1' variant='h6'>
								Add Blood Pressure
							</Typography>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={4}>
									<TextField
										id='outlined-number'
										label='Systolic'
										type='number'
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
										value={systolic}
										onChange={(e) => setSystolic(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={4}>
									<TextField
										id='outlined-number'
										label='Diastolic'
										type='number'
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
										value={diastolic}
										onChange={(e) => setDiastolic(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={4}>
									<TextField
										id='outlined-number'
										label='Pulse'
										type='number'
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
										value={pulse}
										onChange={(e) => setPulse(e.target.value)}
									/>
								</Grid>

								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<Grid item xs={12} sm={6}>
										<KeyboardDatePicker
											disableToolbar
											variant='inline'
											format='dd/MM/yyyy'
											margin='normal'
											id='date-picker-inline'
											label='Add Date'
											value={selectedDate}
											onChange={handleDateChange}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Fragment>
											<TimePicker
												autoOk
												label='Add Time'
												
												value={selectedDate}
												onChange={handleDateChange}
											/>
										</Fragment>
									</Grid>
								</MuiPickersUtilsProvider>

								<Grid item xs={12} sm={4} md={6}>
									<FormControl component='fieldset'>
										<FormLabel component='legend'>Select Time</FormLabel>
										<RadioGroup
											aria-label='morning'
											name='morning'
											value={value}
											onChange={handleChange}>
											<FormControlLabel
												value='morning'
												control={<Radio />}
												label='Morning'
											/>
											<FormControlLabel
												value='Evening'
												control={<Radio />}
												label='Evening'
											/>
										</RadioGroup>
									</FormControl>
								</Grid>
								<Grid item xs={12} sm={12}>
									<Button
										onClick={bpHandler}
										className='centeralign'
										variant='contained'
										color='primary'
										type='submit'>
										Add BP
									</Button>
								</Grid>

								<Grid item xs={12} sm={12}>
									<Typography component='h1' variant='h6'>
										Add Oxygen Saturation
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='oxygen'
										name='oxygen'
										variant='outlined'
										required
										fullWidth
										id='oxygen'
										label='Add Oxygen Levels'
										autoFocus
										value={result}
										onChange={(e) => setResult(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={6}>
									<TextField
										id='outlined-number'
										label='Pulse'
										type='number'
										InputLabelProps={{
											shrink: true,
										}}
										variant='outlined'
										value={pulseOxygen}
										onChange={(e) => setPulseOxygen(e.target.value)}
									/>
								</Grid>

								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<Grid item xs={12} sm={6}>
										<KeyboardDatePicker
											disableToolbar
											variant='inline'
											format='dd/MM/yyyy'
											margin='normal'
											id='date-picker-inline'
											label='Add Date'
											value={selectedDate}
											onChange={handleDateChange}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Fragment>
											<TimePicker
												autoOk
												label='Add Time'
												value={selectedDate}
												onChange={handleDateChange}
											/>
										</Fragment>
									</Grid>
								</MuiPickersUtilsProvider>

								<Grid item xs={12} sm={12}>
									<Button
										onClick={oxygenHandler}
										className='centeralign'
										variant='contained'
										color='primary'>
										Add Oxygen
									</Button>
								</Grid>
								<Grid item xs={12} sm={12}>
									<Typography component='h1' variant='h6'>
										Add Sugar
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='Sugar'
										name='Sugar'
										variant='outlined'
										required
										fullWidth
										id='Sugar'
										label='Add Sugar'
										autoFocus
										value={sugar}
										onChange={(e) => setSugar(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={6}>
									<FormControl component='fieldset'>
										<FormLabel component='legend'>Sugar Type</FormLabel>
										<RadioGroup
											aria-label='fasting'
											name='fasting'
											value={value}
											onChange={handleChange}>
											<FormControlLabel
												value='fasting'
												control={<Radio />}
												label='Fasting'
											/>
											<FormControlLabel
												value='Postprandial'
												control={<Radio />}
												label='Postprandial'
											/>
											<FormControlLabel
												value='Random'
												control={<Radio />}
												label='Random'
											/>
										</RadioGroup>
									</FormControl>
								</Grid>

								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<Grid item xs={12} sm={6}>
										<KeyboardDatePicker
											disableToolbar
											variant='inline'
											format='dd/MM/yyyy'
											margin='normal'
											id='date-picker-inline'
											label='Add Date'
											value={selectedDate}
											onChange={handleDateChange}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Fragment>
											<TimePicker
												autoOk
												label='Add Time'
												value={selectedDate}
												onChange={handleDateChange}
											/>
										</Fragment>
									</Grid>
								</MuiPickersUtilsProvider>
								<Grid item item xs={12} sm={4} md={6}>
									<Button
										onClick={sugarHandler}
										className='centeralign'
										variant='contained'
										color='primary'>
										Add Sugar
									</Button>
								</Grid>
							</Grid>
						</form>
					</div>
				</Container>
			</div>
		</>
	);
}

export default DailyMonitoring;
