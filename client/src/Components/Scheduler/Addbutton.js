import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import * as RiIcons from 'react-icons/ri';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

export default function Addbutton() {
	const classes = useStyles();

	return (
		<div id="AE_btn">
			<Button
				variant='contained'
				color='default'
				className={classes.button}
				startIcon={<RiIcons.RiAddCircleFill />}>
				<Link to='SForm' spy={true} smooth={true}>
					Add Event
				</Link>
			</Button>
		</div>
	);
}

