import React, {Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import Particles from '../Components/Particles/Particles.js';
import { TimePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

import axios from 'axios';

import './pagesCSS/NewPres.css';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(0),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},

	form: {
		width: '135%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	//   input: {
	//   display: 'none',
	// },
}));

export default function NewPresciption() {
	const [doctors, setDoctors] = useState([]);
	const [Title, setTitle] = useState('');
	const [doctor, setDoctor] = useState('');
	const [notes, setNote] = useState('');
	const [fileSelected, setFiles] = useState([]);
	const [selectedDate, setSelectedDate] = useState(
		new Date('2014-08-18T21:11:54'),
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	const getDoctors = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/doctors/getUserDoctor',
			);
			//console.log(res.data.data);
			setDoctors(res.data.data);
			//.log(doctors);
		} catch {}
	};
	const renderDoctors = () => {
		return doctors.map((doctor, i) => {
			return <MenuItem key={i}>{doctor.Name}</MenuItem>;
		});
	};

	useEffect(() => {
		getDoctors();
	}, []);

	const imageHandler = (e) => {
		if (e.target.files) {
			//console.log(e.target.files);
			const fileArray = Array.from(e.target.files);
			fileArray.forEach((file) => {
				fileSelected.push(file);
			});
		}
	};

	const newPrescriptionHandler = async (e) => {
		e.preventDefault();
		const form = new FormData();
		form.append('Title', Title);
		form.append('doctor', doctor);

		form.append('notes', notes);

		fileSelected.forEach((file) => {
			form.append('Prescription', file);
		});

		try {
			const res = await axios.post(
				'http://localhost:3005/api/v1/prescription/addNew',
				form,
			);
			if (res.data.status === 'success') {
				window.alert('Prescription added!');
				setDoctor('');
				setTitle('');

				setNote('');
				fileSelected = [];
			}
		} catch {}
	};

	const classes = useStyles();

	return (
		<>
			<Particles />
			<div className='NPrescription_container'>
				<Container component='main' maxWidth='xs' className='root'>
					<CssBaseline />
					<div className={classes.paper}>
						<Typography component='h1' variant='h5'>
							Add Prescription Here
						</Typography>
						<form
							onSubmit={newPrescriptionHandler}
							className={classes.form}
							Validate>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										autoComplete='title'
										name='title'
										variant='outlined'
										required
										fullWidth
										id='title'
										label='Prescription Title'
										autoFocus
										value={Title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</Grid>

								<Grid item xs={12} sm={8}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='newdoctor'
										label='Add Doctor'
										name='newdoc'
										autoComplete='newdoctor'
										value={doctor}
										onChange={(e) => setDoctor(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<InputLabel id='demo-simple-select-label'>Doctors</InputLabel>
									<Select value='Add Doctor'>{renderDoctors()}</Select>
								</Grid>
								<Grid item xs={12}>
									<Button variant='contained' color='primary' sm={6}>
										Add Doctor +
									</Button>
								</Grid>

								<Grid item xs={12}>
									<label htmlFor='contained-button-file'>
										<Button
											variant='contained'
											color='primary'
											component='span'>
											Upload Prescriptions
										</Button>
									</label>
									<input
										accept='image/*'
										className={classes.input}
										id='contained-button-file'
										multiple
										type='file'
										onChange={imageHandler}
									/>
								</Grid>

								<Grid item xs={12}>
									<TextField
										autoComplete='notes'
										name='notes'
										variant='outlined'
										required
										fullWidth
										id='title'
										label='Add Notes Here'
										autoFocus
										value={notes}
										onChange={(e) => setNote(e.target.value)}
									/>
								</Grid>

								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<Grid item xs={12} sm={6}>
										<KeyboardDatePicker
											disableToolbar
											variant='inline'
											format='MM/dd/yyyy'
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

								<Grid item xs={12} sm={6}>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										color='primary'
										className={classes.submit}>
										Save
									</Button>
								</Grid>
								<Grid item xs={12} sm={6}>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										color='primary'
										className={classes.submit}>
										Reset
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
