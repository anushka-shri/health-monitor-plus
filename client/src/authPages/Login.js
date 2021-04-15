import React, { useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from '../Context/AppContext';
import img from '../images/3.jpeg';
import './Login.css';

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
	root: {
		height: '100vh',	
	},
	image: {
		width: '80vw',

		backgroundImage: 'url(' + img + ')',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'left',
		// borderTop: '10px solid rgb(131,58,180)',
		// borderBottom: '23px solid rgb(137, 100, 172)',
		borderLeft: '1px solid rgb(0,0,0)',
	
	},
	paper: {
		// background: 'black',
		width: '33vw',
		height: '100vh',
		margin: theme.spacing(0, 0),
		display: 'flex',
		// marginLeft: '5vw',
		flexDirection: 'column',
		alignItems: 'center',
		background:
			'linear-gradient(to bottom, rgb(255, 255, 255) 0%, rgb(137, 100, 172) 100%)',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(6),
		marginLeft: theme.spacing(8),
		background:
			'linear-gradient(to bottom, rgb(255, 255, 255) -35%, rgb(137, 100, 172) 155%)',
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { getLoggedIn } = useGlobalContext();
	const history = useHistory();

	const loginHandler = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:3005/api/v1/users/login', {
				email,
				password,
			});
			// we get res from the server that token is set so now we can redirect to our home page.
			if (res.data.status === 'success') {
				console.log(res.status);
				//Redirection will happen here
				getLoggedIn();
				history.push('/');
			}
		} catch {}
	};

	const classes = useStyles();

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Grid item xs={12} sm={8} className={classes.image} />
			<Grid item xs={12} sm={4} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						{/* <LockOutlinedIcon /> */}
					</Avatar>
					<Typography component='h1' variant='h5'>
						Login Here
					</Typography>

					<form onSubmit={loginHandler} className={classes.form} Validate>
						<Grid item xs={10}>
							<TextField
								variant='outlined'
								margin='normal'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								type='email'
								autoFocus
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</Grid>
						<Grid item xs={10}>
							<TextField
								variant='outlined'
								margin='normal'
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

						<Grid item xs={10}>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								color='primary'
								className={classes.submit}>
								Sign In
							</Button>
						</Grid>
						<Grid item xs={10}>
							<Grid item xs>
								<Link href='#' variant='body2'>
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link to='/register' variant='body2'>
									Don't have an account? Register Now
								</Link>
							</Grid>
						</Grid>
						<Box mt={5}>
							<Copyright />
						</Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
