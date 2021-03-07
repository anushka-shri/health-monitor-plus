import React, { useState } from 'react';
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
import Particles from '../../Components/Particles/Particles';
import axios from 'axios';

import '../pagesCSS/DailyMonitoring.css';

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

function DailyMonitoring() {
	


	const classes = useStyles();

	return (
		<>
			<Particles />
			<div className='DM_container'>
				<Container component='main' maxWidth='xs' className='root'>
					<CssBaseline />
					<div className={classes.paper}>
						<Typography component='h1' variant='h'>
							Daily Monitoring
						</Typography>
						<form className={classes.form} Validate>
							<Grid container spacing={2}>
								<Typography component='h1' variant='h5'>
									Add Blood Pressure
								</Typography>
								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='BP'
										label='Add Systolic'
										name='BP'
										autoComplete='BP'
									/>
								</Grid>

								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='BP'
										label='Add Diastolic'
										name='BP'
										autoComplete='BP'
									/>
								</Grid>

								<Grid item xs={12} sm={8}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='Sugar'
										label='Add Sugar Levels'
										name='Sugar'
										autoComplete='Sugar'
									/>
								</Grid>

								<Grid item xs={12} sm={8}>
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

								<Grid item xs={12} sm={8}>
									<TextField
										autoComplete='weight'
										name='weight'
										variant='outlined'
										required
										fullWidth
										id='weight'
										label='Add weight'
										autoFocus
									/>
								</Grid>

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

export default DailyMonitoring;
