import React from 'react';
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

import './pagesCSS/NewDocs.css';

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

 function NewDoctors() {
	const classes = useStyles();

	return (
		<div className='NPDocs_container'>
			<Container component='main' maxWidth='xs' className='root'>
				<CssBaseline />
				<div className={classes.paper}>
					<Typography component='h1' variant='h5'>
						Add a New Doctor Here
					</Typography>
					<form className={classes.form} Validate>
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
								/>
							</Grid>
							<Grid item xs={12} sm={4}>
								<InputLabel id='demo-simple-select-label'>Hospitals</InputLabel>
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
	);
}


export default NewDoctors
