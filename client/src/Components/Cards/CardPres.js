import React, { useState, useEffect } from 'react';
import './Cardpres.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
function CardPres() {

	const [doc, setDoc] = useState(null);
	const [pres, setPres] = useState(null);
	const [report, setReport] = useState(null);

	const getCounts = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/doctors/getcounts',
			);
			console.log(res);
			if (res.data.data) {
				setDoc(res.data.data.docCount);
				setPres(res.data.data.preCount);
				setReport(res.data.data.labCount);
			}
		} catch {}
	};

	useEffect(() => {
		getCounts();
	}, []);





	return (
		<div className='cards'>
			<div class='card PRES'>
				<div class='card-content'>
					<div class='content'>
						<p><img 
						src="https://images.vexels.com/media/users/3/200162/isolated/preview/0ba1f06a9187166cca95827e22daa194-stethoscope-icon-stethoscope-by-vexels.png"
						alt='Girl in a jacket'
						width='70px'
						height='50px'
						/> 
						Doctor Added
						</p>
						<p>{doc}
						<Link to='/doctors'>
							<Button
								variant='outlined'
								className='icon_texts'
								color='secondary'>
								See All
							</Button>

							</Link>
							</p>
						
					</div>
				</div>
			</div>

			<div class='card DOC'>
				<div class='card-content'>
					<div class='content'>
						<p>
						<img 
						src="https://cdn.iconscout.com/icon/free/png-256/prescription-1901763-1607962.png"
						alt='Girl in a jacket'
						width='70px'
						height='50px'
						/>Prescription Added</p>
						<p>
							{pres}
							<Link to='/prescriptions'>
							<Button
								variant='outlined'
								className='icon_texts'
								color='secondary'>
								See All
							</Button>
							</Link>
							
						</p>
					</div>
				</div>
			</div>
			<div class='card ANOTHER'>
				<div class='card-content'>
					<div class='content'>
						<p>
						<img 
						src="https://cdn.iconscout.com/icon/premium/png-512-thumb/lab-report-1957908-1651840.png"
						alt='Girl in a jacket'
						width='70px'
						height='50px'
						/>Lab Report Added </p>
						<p>
							{report}
							<Link to='/lab-reports'>
							<Button
								variant='outlined'
								className='icon_texts'
								color='secondary'>
								See All
							</Button>

							</Link>
							
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CardPres;
