import React from 'react';
import './pagesCSS/NewPres.css';
import { FormControl, InputLabel, Input, Select, MenuItem } from '@material-ui/core';

function NewPrescription() {
	return (
		<div className='NPrescription_container'>
			<h2>Add New Prescription Here</h2>
			<div className='NP_form'>
				<FormControl className='Form_items'>
					<InputLabel className='InputLabel' htmlFor='title'>
						Prescription Title
					</InputLabel>
                    <Input id='title' aria-describedby='my-helper-text' />
                    <div className='select_file'>
                     <p>Scanned Documents</p>
                    <input type="file" id="myFile" name="filename" />
                    </div>
                    
  
				</FormControl>
			</div>
		</div>
	);
}

export default NewPrescription;
