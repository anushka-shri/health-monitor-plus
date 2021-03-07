import React, {Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Container from "@material-ui/core/Container";
import Particles from "../Components/Particles/Particles2.js";
import { TimePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from "axios";

import "./pagesCSS/NewDocs.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    display: "none",
  },
}));

function NewDoctors() {
  const [doctor, setDoctor] = useState('');
  const [hospital, setHospital] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [notes, setNotes] = useState('');

  const [selectedDate, setSelectedDate] = useState(
		new Date('2014-08-18T21:11:54'),
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

  const onReset = (e) => {
    e.preventDefault();
    setDoctor('');
    setHospital('');
    setSpecialization('');
    setNotes('');
  };

  const newDocHandler = async (e) => {
    e.preventDefault();
	console.log(doctor);
    try {
      const res = await axios.post(
        "http://localhost:3005/api/v1/doctors/addNew",
        {
          doctor,
          hospital,
          specialization,
          notes,
        }
      );
	 
      if (res.data.status === "success") {
        window.alert("Doctor added!");
      }else if(res.data.status === "failed"){
		  window.alert("Same name doctor already exists!");
		  setDoctor('');
		  setHospital('');
		  setSpecialization('');
		  setNotes('');
	  }
    } catch {}
  };

  const classes = useStyles();

  return (
		<>
			<Particles />
			<div className='NPDocs_container'>
				<Container component='main' maxWidth='xs' className='root'>
					<CssBaseline />
					<div className={classes.paper}>
						<Typography component='h1' variant='h5'>
							Add a New Doctor Here
						</Typography>
						<form onSubmit={newDocHandler} className={classes.form} Validate>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={8}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='newdoctor'
										label='Doctor Name'
										name='newdoc'
										autoComplete='newdoctor'
										value={doctor}
										onChange={(e) => setDoctor(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<InputLabel id='demo-simple-select-label'>Doctors</InputLabel>
									<Select value='Add Doctor'>
										<MenuItem>AAAAa</MenuItem>
										<MenuItem>AAggga</MenuItem>
										<MenuItem>erereAa</MenuItem>
									</Select>
								</Grid>

								<Grid item xs={12} sm={8}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='hospital'
										label='Hospital`s Name'
										name='hospital'
										autoComplete='hospital'
										value={hospital}
										onChange={(e) => setHospital(e.target.value)}
									/>
								</Grid>
								<Grid item xs={12} sm={4}>
									<InputLabel id='demo-simple-select-label'>
										Hospitals
									</InputLabel>
									<Select>
										<MenuItem>AAAAa</MenuItem>
										<MenuItem>AAggga</MenuItem>
										<MenuItem>erereAa</MenuItem>
									</Select>
								</Grid>

								<Grid item xs={10}>
									<TextField
										autoComplete='notes'
										name='notes'
										variant='outlined'
										required
										fullWidth
										id='title'
										label='Add Specialization'
										autoFocus
										value={specialization}
										onChange={(e) => setSpecialization(e.target.value)}
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
										label='Add Notes'
										autoFocus
										value={notes}
										onChange={(e) => setNotes(e.target.value)}
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
										className={classes.submit}
										onClick={onReset}>
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

export default NewDoctors;
