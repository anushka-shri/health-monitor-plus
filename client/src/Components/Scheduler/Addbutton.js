import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}));

export default function Addbuttonl() {
	const classes = useStyles();

	return (
		<div>
			<Button
				variant='contained'
				color='default'
				className={classes.button}
				startIcon={<CloudUploadIcon />}>
				Upload
			</Button>
		</div>
	);
}
