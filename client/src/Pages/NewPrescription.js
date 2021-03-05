import React, { useEffect, useState } from 'react';
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

export default  function  NewPresciption() {

	const [doctors, setDoctor] = useState('');

	const getDoctors = async() => {
		try {
			const res = await axios.get(
			  "http://localhost:3005/api/v1/doctors/getUserDoctor");
			setDoctor(res.data);
			console.log(doctors);
		   }
		   catch {}
	}
	

	useEffect(() => {
		getDoctors();
	},[])
	const classes = useStyles();
     
	return (
    <>
      <Particles />
      <div className="NPrescription_container">
        <Container component="main" maxWidth="xs" className="root">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Add Prescription Here
            </Typography>
            <form className={classes.form} Validate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="title"
                    name="title"
                    variant="outlined"
                    required
                    fullWidth
                    id="title"
                    label="Prescription Title"
                    autoFocus
                  />
                </Grid>

                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="newdoctor"
                    label="Add Doctor"
                    name="newdoc"
                    autoComplete="newdoctor"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <InputLabel id="demo-simple-select-label">Doctors</InputLabel>
                  <Select value="Add Doctor">
                    <MenuItem>AAAAa</MenuItem>
                    <MenuItem>AAggga</MenuItem>
                    <MenuItem>erereAa</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" sm={6}>
                    Add Doctor +
                  </Button>
                </Grid>

                <Grid item xs={12} sm={8}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="newmeds"
                    label="Add Medicine"
                    name="newmed"
                    autoComplete="newmed"
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <InputLabel id="demo-simple-select-label">
                    Medicines
                  </InputLabel>
                  <Select>
                    <MenuItem>AAAAa</MenuItem>
                    <MenuItem>AAggga</MenuItem>
                    <MenuItem>erereAa</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" sm={6}>
                    Add Medicine +
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="primary"
                      component="span"
                    >
                      Upload Prescriptions
                    </Button>
                  </label>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="notes"
                    name="notes"
                    variant="outlined"
                    required
                    fullWidth
                    id="title"
                    label="Add Notes Here"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Save
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    
                  >
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
