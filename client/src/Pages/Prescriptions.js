import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pagesCSS/Prescription.css';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

function Prescriptions() {
	const [prescriptions, setPrescription] = useState([]);

	const getPrescription = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/prescription/getUserPrescription',
			);
			console.log(res.data.data);
			setPrescription(res.data.data);
			console.log(prescriptions);
		} catch {}
	};

	useEffect(() => {
		getPrescription();
	}, []);

	return (
		<div className="pres_cards_cont">
			{prescriptions.map((prescription, i) => (
				<div class='card Prescription_card' key={i}>
					<header class='card-header'>
						<p class='card-header-title'>Title: {prescription.Title}</p>
					</header>
					<div class='card-content'>
						<div class='content'>
							<b>Notes:</b> {prescription.Notes}
							<br />
							<time datetime='2016-1-1'>
								<b>Date: </b>
								{prescription.DateOfRec}
							</time>
						</div>
					</div>
					<footer class='card-footer'>
						<a href='#' class='card-footer-item'>
							Download
						<BiIcons.BiDownload className='download_icon_card' />
						</a>
						<a href='#' class='card-footer-item'>
							Edit
						<BiIcons.BiEdit className='download_icon_card' />
						</a>
						<a href='#' class='card-footer-item'>
							Delete
						<MdIcons.MdDeleteSweep className='download_icon_card' />
						</a>
					</footer>
				</div>
			))}
		</div>
	);
			
}

export default Prescriptions;


	/* <h2 className="heading">Prescriptions</h2>
            <table className='Doctors_container'>
					<tr>
						<th>Presciption Title</th>
						<th>Doctor</th>
						<th>Notes</th>
                        <th>Date</th>
						<th>Prescription</th>
					</tr>

					{prescriptions.map((prescription, i) => (
						<tr key={i}>
							<td>{prescription.Title}</td>
							<td>{prescription.Doctor.Name}</td>
							<td>{prescription.Notes}</td>
							<td>{prescription.DateOfRec}</td>
                            <td>{prescription.Prescription.map(element => {
                               return <img src="./../Applogo.png" alt="Girl in a jacket" width="500" height="600"/>
                            })}</td>
						</tr>
					))}
				</table> */

