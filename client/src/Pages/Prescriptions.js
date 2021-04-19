import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pagesCSS/Prescription.css';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

const Prescriptions = () => {
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

	const renderImages = (p) => {
		return p.map((item) => (
			<img
				src={`http://localhost:3005/${item}`}
				alt='Girl in a jacket'
				width='200px'
				height='150px'
			/>
		));
	};
	const handleDownloadClick = (event, p) => {
		p.map((item) => {
			var URL = `http://localhost:3005/${item}`;

			axios({
				url: URL,
				method: 'GET',
				responseType: 'blob',
			}).then((response) => {
				const downloadUrl = window.URL.createObjectURL(
					new Blob([response.data]),
				);
				const link = document.createElement('a');
				link.href = downloadUrl;
				link.setAttribute('download', 'prescription.png'); //any other extension
				document.body.appendChild(link);
				link.click();
			});
		});
	};

	return (
		<>
			<div className='pres_cards_cont'>
				<h1 className='prescription_added_heading'>Prescriptions Added</h1>
				{prescriptions.map((prescription, i) => (
					<div class='added_p_card' key={i}>
						<header class='card-header'>
							<p class='card-header-title'>Title: {prescription.Title}</p>
						</header>
						<div class='card-content'>
							<div class='content-flex'>
								<div>
									<span className='card_notes_datesh'>
										Notes:{prescription.Notes}
									</span>

									<br />
									<span className='card_notes_datesh'>
										Date:{prescription.DateOfRec.split('T')[0]}
									</span>
									<br />
									<span className='card_notes_datesh'>
										Doctor:{prescription.Doctor.Name}
									</span>
									<br />
									<span className='card_notes_datesh'>
										Hospital:{prescription.Doctor.Hospital}
									</span>
								</div>

								<div className='render_pres_card '>
									{renderImages(prescription.Prescription)}
								</div>
							</div>
						</div>
						<footer class='card-footer'>
							<a
								onClick={(event) =>
									handleDownloadClick(event, prescription.Prescription)
								}
								href='#'
								class='card-footer-item'>
								Prescription
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
		</>
	);
};

export default Prescriptions;
