/* eslint-disable no-use-before-define */
import React, {useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, Card, Image } from 'semantic-ui-react';
import { Autocomplete } from '@material-ui/lab';
import './pagesCSS/Medications.css';
import axios from 'axios';




export default function Medications() {

	const [medicines, setMedicines] = useState([]);
	const [drug, setDrug] = useState('');
	const [similar, setSimilar] = useState([]);

	const getAllMedicines = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/medicine/getAllMedicines',
			);
			
			if (res.data.data) {
				setMedicines(res.data.data);
			}
		} catch {}
	};

	useEffect(() => {
		getAllMedicines();
	}, []);
    
	const getMedicine = async (drugName) => {
		try {
			const res = await axios.post(
				'http://localhost:3005/api/v1/medicine/getMedicine',
				{drugName}
			);
			
			if (res.data.data) {
				setDrug(res.data.data);
				setSimilar(res.data.similar.slice(0,10));
			}
		} catch {}

	}
 const handleChange = (value) => {
	//setDrugName(value);
	getMedicine(value);
 }
	
return (
		<div>
			<div className='Meds_search_cont' style={{ width: 400 }}>
				<Autocomplete
					id='free-solo-demo'
					freeSolo
					options={medicines.map((option) => option.Drug_Name)}
					
					onChange={(event, value) => handleChange(value)}
					renderInput={(params) => (
						<TextField
							{...params}
							label='Search Meds'
							margin='normal'
							variant='outlined'
							
						/>
						
						
					)}
					
				/>
			</div>
			<div className='Meds_cards_cont'>
				<Card.Group>
					<Card>
						<Card.Content>
							<Image
								floated='right'
								size='mini'
								src='/images/avatar/large/jenny.jpg'
							/>
							<Card.Header>Jenny Lawrence</Card.Header>
							<Card.Meta>New User</Card.Meta>
							<Card.Description>
								Jenny requested permission to view your contact details
							</Card.Description>
						</Card.Content>
						
					</Card>
					
				</Card.Group>
			</div>
		</div>
	);
}



