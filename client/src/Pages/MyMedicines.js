import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
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

import './pagesCSS/Mymedicines.css';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		marginBottom: 20,
		backgroundColor: '#f3e6e8',
		backgroundImage: 'linear-gradient(315deg, #f3e6e8 0%, #d5d0e5 74%)',
		boxShadow: '0px 3px 15px 0px #0000007a',
	},
});


function MyMedicines() {
	const [medicines, setMedicines] = useState([]);


	const classes = useStyles();
	const getMyMedicines = async () => {
		console.log('here');
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/medicine/getUserMedicines',
			);

			if (res.data.data) {
				setMedicines(res.data.data.myMedicines);
			}
		} catch {}
	};

	useEffect(() => {
		getMyMedicines();
	}, []);

	return (
		<div>
			<Typography
				gutterBottom
				variant='h5'
				component='h2'
				className='Addedsimilar_heading'
				centeralign>
				My Medicines
			</Typography>
			{medicines.map((med, id) => {
				return (
					<Fade bottom>
						<Grid item xs={6} className='AddedMeds_cards_cont'>
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
							</Card>
						</Grid>
					</Fade>
				);
			})}
		</div>
	);
}

export default MyMedicines;
