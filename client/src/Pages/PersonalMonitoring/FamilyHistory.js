import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Particles from '../../Components/Particles/Particles2.js';

// import axios from 'axios';

import '../pagesCSS/FamilyHistory.css'

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

function NewMembers() {
	const [name, setName] = useState('');
	const [relation, setRelation] = useState('');
	const [description, setDescription]  = useState('');





	// const newRealativeHandler = async (e) => {
	// 	e.preventDefault();
	// 	console.log(doctor);
	// 	try {
	// 		const res = await axios.post(
	// 			'http://localhost:3005/api/v1/doctors/addNew',
	// 			{
	// 				doctor,
	// 				hospital,
	// 				Relation,
	// 				notes,
	// 			},
	// 		);

	// 		if (res.data.status === 'success') {
	// 			window.alert('Doctor added!');
	// 		} else if (res.data.status === 'failed') {
	// 			window.alert('Same name doctor already exists!');
	// 			setDoctor('');
	// 			setHospital('');
	// 			setSpecialization('');
	// 			setNotes('');
	// 		}
	// 	} catch {}
	// };

	const classes = useStyles();

	return (
		<>
			<Particles />
			<div className='FH_container'>
				<Container component='main' maxWidth='xs' className='root'>
					<CssBaseline />
					<div className={classes.paper}>
						<Typography component='h1' variant='h5'>
							Add a Family Member Here 
						</Typography>
						<form  className={classes.form} Validate>
							<Grid container spacing={4}>
								
							

								<Grid item xs={12} sm={6}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='name'
										label='Add Name'
										name='name'
										autoComplete='name'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</Grid>
								

								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='notes'
										name='notes'
										variant='outlined'
										required
										fullWidth
										id='title'
										label='Add Relation'
										autoFocus
										value={relation}
										onChange={(e) => setRelation(e.target.value)}
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

								
								<Grid item xs={12} sm={8}>
									<Button
										type='submit'
										fullWidth
										variant='contained'
										color='primary'
										className={classes.submit}>
										Save
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

export default NewMembers;
