import React from 'react';
import './pagesCSS/NewPres.css';
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText,
} from '@material-ui/core';

function NewPrescription() {
	return (
		<div className='NPrescription_container'>
			<h2>Add New Prescription Here</h2>
			<div className='NP_form'>
				<FormControl>
					<InputLabel className='InputLabel' htmlFor='title'>Prescription Title</InputLabel>
					<Input id='title' aria-describedby='my-helper-text' />
					
				</FormControl>
			</div>
		</div>
	);
}

export default NewPrescription;
