import React, { useState } from 'react';
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

function DailyMonitoring() {

	const [value, setValue] = useState('')
	

	const handleChange = (e) => {

		
		setValue(e.target.value);
	}


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
									/>
								</Grid>

								<Grid item xs={12} sm={12}>
									<Button variant='contained' color='primary'>
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
									/>
								</Grid>

								<Grid item xs={12} sm={12}>
									<Button variant='contained' color='primary'>
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
								<Grid item xs={12} sm={12}>
									<Button variant='contained' color='primary'>
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
