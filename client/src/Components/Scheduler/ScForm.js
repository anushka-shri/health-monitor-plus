import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TimePicker } from '@material-ui/pickers';
import 'date-fns';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import './ScForm.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

const theme = createMuiTheme({
	palette: {
		secondary: {
			main: '#fbaed2',
		},
	},
});

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},

	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	input: {
		display: 'none',
	},
}));

function ScForm() {
	const [title, setName] = useState('');
	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [startTime, setStartTime] = useState(null);
	const [endTime, setEndTime] = useState(null);
	const [freq, setRepeat] = useState(null);
	const [count, setCount] = useState(null);
	const [checked, setAllDay] = useState(false);

	const newEvent = async (e) => {
		e.preventDefault();

		try {
			const res = await axios.post(
				'http://localhost:3005/api/v1/events/addEvent',
				{
					title,
					description,
					startDate,
					endDate,
					startTime,
					endTime,
					freq,
					count,
					checked,
				},
			);

			if (res.data.status === 'success') {
				window.alert('Event added!');
			} else if (res.data.status === 'failed') {
				console.log('error');
			}
		} catch {}
	};
	const handleChange = (e) => {
		setRepeat(e.target.innerText);
	};
	const handleChangeAllDay = (event) => {
		setAllDay({ ...checked, [event.target.name]: event.target.checked });
	};
	const handleDateChangeStart = (date) => {
		setStartDate(date);
	};
	const handleDateChangeEnd = (date) => {
		setEndDate(date);
	};
	const handleTimeChangeStart = (time) => {
		setStartTime(time);
	};
	const handleTimeChangeEnd = (time) => {
		setEndTime(time);
	};

	const classes = useStyles();

	return (
		<>
			<div className='ScForm_container' id='SForm'>
				<Container component='main' maxWidth='xs' className='root'>
					<CssBaseline />
					<div className={classes.paper}>
						<Typography component='h1' variant='h5'>
							Add an Event Here
						</Typography>
						<form onSubmit={newEvent} className={classes.form} Validate>
							<Grid container spacing={4}>
								<Grid item xs={12}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='title'
										label='Add Title'
										name='title'
										autoComplete='title'
										value={title}
										onChange={(e) => setName(e.target.value)}
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
											label='Start Date'
											value={startDate}
											onChange={handleDateChangeStart}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<KeyboardDatePicker
											disableToolbar
											variant='inline'
											format='dd/MM/yyyy'
											margin='normal'
											id='date-picker-inline'
											label='End Date'
											value={endDate}
											onChange={handleDateChangeEnd}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Fragment>
											<TimePicker
												autoOk
												label='Start Time'
												value={startTime}
												onChange={handleTimeChangeStart}
											/>
										</Fragment>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Fragment>
											<TimePicker
												autoOk
												label='End Time'
												value={endTime}
												onChange={handleTimeChangeEnd}
											/>
										</Fragment>
									</Grid>
								</MuiPickersUtilsProvider>

								<Grid item xs={8}>
									<FormGroup row>
										<FormControlLabel
											control={
												<Checkbox
													checked={checked.checkedA}
													onChange={handleChangeAllDay}
													name='checkedA'
												/>
											}
											label='All Day'
										/>
									</FormGroup>
								</Grid>

								<Grid item xs={6}>
									<FormControl variant='filled' className={classes.formControl}>
										<InputLabel id='demo-simple-select-filled-label'>
											REPEAT
										</InputLabel>
										<Select
											labelId='demo-simple-select-filled-label'
											id='demo-simple-select-filled'>
											<MenuItem onClick={handleChange} value={freq}>
												DAILY
											</MenuItem>
											<MenuItem onClick={handleChange} value={freq}>
												WEEKLY
											</MenuItem>
											<MenuItem onClick={handleChange} value={freq}>
												MONTHLY
											</MenuItem>
											<MenuItem onClick={handleChange} value={freq}>
												YEARLY
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={6}>
									<TextField
										id='filled-number'
										label='REPEAT FOR(DAYS)'
										type='number'
										value={count}
										onChange={(e) => setCount(e.target.value)}
										InputLabelProps={{
											shrink: true,
										}}
										variant='filled'
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										autoComplete='description'
										name='description'
										variant='outlined'
										required
										fullWidth
										id='title'
										label='Add Description'
										autoFocus
										value={description}
										onChange={(e) => setDescription(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={12}>
									<ThemeProvider theme={theme}>
										<Button
											type='submit'
											fullWidth
											variant='contained'
											color='secondary'
											className={classes.submit}>
											Add Event
										</Button>
									</ThemeProvider>
								</Grid>
							</Grid>
						</form>
					</div>
				</Container>
			</div>
		</>
	);
}

export default ScForm;
