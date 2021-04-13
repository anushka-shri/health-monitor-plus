import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { TimePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

// import axios from 'axios';
import './ScForm.css';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
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
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const classes = useStyles();

	return (
		<>
			<div className='ScForm_container'>
				<Container component='main' maxWidth='xs' className='root'>
					<CssBaseline />
					<div className={classes.paper}>
						<Typography component='h1' variant='h5'>
							Add an Event Here
						</Typography>
						<form className={classes.form} Validate>
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
										// value={title}
										onChange={(e) => setName(e.target.value)}
									/>
								</Grid>

								{/* <Grid item xs={12} sm={12}>
									<Typography component='h1' variant='h6'>
										Add Event Duration
									</Typography>
								</Grid> */}

								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<Grid item xs={12} sm={6}>
										<KeyboardDatePicker
											disableToolbar
											variant='inline'
											format='dd/MM/yyyy'
											margin='normal'
											id='date-picker-inline'
											label='Start Date'
											value={selectedDate}
											onChange={handleDateChange}
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
											value={selectedDate}
											onChange={handleDateChange}
											KeyboardButtonProps={{
												'aria-label': 'change date',
											}}
										/>
									</Grid>
								</MuiPickersUtilsProvider>

								{/* <Grid item xs={12} sm={12}>
									<Button
										// onClick={oxygenHandler}
										className='centeralign'
										variant='contained'
										color='primary'>
										Add duration
									</Button>
								</Grid> */}

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
									<Button
										type='submit'
										fullWidth
										variant='contained'
										color='primary'
										className={classes.submit}>
										Add Event
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

export default ScForm;
