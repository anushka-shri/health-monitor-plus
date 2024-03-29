/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import './pagesCSS/Medications.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';

// Image card code

import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		marginBottom: 20,
		backgroundColor: '#f3e6e8',
		backgroundImage: 'linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%)',
		boxShadow: '0px 3px 15px 0px #0000007a',
	},
});

export default function Medications() {
	const [medicines, setMedicines] = useState([]);
	const [drug, setDrug] = useState('');
	const [similar, setSimilar] = useState([]);

	const classes = useStyles();
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
				{ drugName },
			);

			if (res.data.data) {
				setDrug(res.data.data);
				setSimilar(res.data.similar.slice(0, 10));
			}
		} catch {}
	};
	const handleChange = (value) => {
		setDrug(value);
		getMedicine(value);
	};
	const handleClick = async (event, med) => {
		try {
			const id = med._id;
			const res = await axios.patch(
				'http://localhost:3005/api/v1/medicine/addmedicine',
				{id},
			);

			
		} catch {}
	};
	

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

			{drug && (
				<>
					<div className='searched_card_cont'>
						<Card className={classes.root}>
							<Typography gutterBottom variant='h5' component='h2' centeralign>
								SEARCHED MEDICINE
							</Typography>
							<CardActionArea>
								<CardMedia
									component='img'
									alt='medicine'
									height='20'
									image='https://tse4.mm.bing.net/th?id=OIP.DRRUCsJqgW54fLF2iULzYQHaF5&pid=Api'
									title='medicine'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='h2'>
										{drug.Drug_Name}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'>
										{drug.Reason}
									</Typography>
									<Typography
										variant='body2'
										color='textSecondary'
										component='p'>
										{drug.Description}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions>
								<Button size='small' color='primary' onClick={handleClick}>
									ADD
								</Button>
							</CardActions>
						</Card>
					</div>
				</>
			)}

			<div className='Meds_cards_cont'>
				<Typography
					gutterBottom
					variant='h5'
					component='h2'
					className='similar_heading'
					centeralign>
					Similar Results
				</Typography>
				{similar.map((med, id) => {
					return (
						<Fade bottom>
							<Grid item xs={6} className='Meds_cards_cont'>
								<Card className={classes.root} key={id}>
									<CardActionArea>
										<CardContent>
											<Typography gutterBottom variant='h5' component='h2'>
												{med.Drug_Name}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'>
												{med.Reason}
											</Typography>
											<Typography
												variant='body2'
												color='textSecondary'
												component='p'>
												{med.Description}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button 
										onClick={(event) => handleClick(event,med )}
										size='small' 
										color='primary'>
											ADD
										</Button>
									</CardActions>
								</Card>
							</Grid>
						</Fade>
					);
				})}
			</div>
		</div>
	)
}
					

