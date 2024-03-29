import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../Context/AppContext';

function Copyright() {
	return (
		<Typography variant='body2' color='textSecondary' align='center'>
			{'Copyright © '}
			<Link color='inherit' href='https://material-ui.com/'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const [fname, setFirstname] = useState('');
	const [lname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmpassword, setConfpass] = useState('');
	const history = useHistory();
	const { getLoggedIn } = useGlobalContext();

	const registerHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				'http://localhost:3005/api/v1/users/signup',
				{
					fname,
					lname,
					email,
					password,
					confirmpassword,
				},
			);
			if (res.data.status === 'success') {
				// This checks if res is success which means token is set and user is created now she can be redirected to home page
				// redirection
				getLoggedIn();
				history.push('/');
			}
		} catch {}
	};

	const classes = useStyles();

	return (
		<Container component='main' maxWidth='xs' className='Registerbody'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
				<Typography component='h1' variant='h5'>
					Register
				</Typography>
				<form onSubmit={registerHandler} className={classes.form} Validate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
								value={fname}
								onChange={(e) => setFirstname(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
								value={lname}
								onChange={(e) => setLastname(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								type='email'
								autoComplete='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='confirm-password'
								label='Confirm Password'
								type='password'
								id='confirm-password'
								autoComplete='current-password'
								value={confirmpassword}
								onChange={(e) => setConfpass(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value='allowExtraEmails' color='primary' />}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}>
						Register
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link to='/login' variant='body2'>
								Already have an account? Login
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
