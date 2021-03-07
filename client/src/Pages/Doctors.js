import React, { useState, useEffect } from 'react';
import Particles from '../Components/Particles/Particles.js';
import axios from 'axios';
import './pagesCSS/Doctors.css';


function Doctors() {
	const [doctors, setDoctor] = useState([]);

	const getDoctors = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/doctors/getUserDoctor',
			);
			//console.log(res.data.data);
			setDoctor(res.data.data);
			//.log(doctors);
		} catch {}
	};

	useEffect(() => {
		getDoctors();
	}, []);

	return (
		<>
			<Particles />
			<div>
				<h2 className='heading'>Doctors Added</h2>
				<table className='Doctors_container'>
					<tr>
						<th>Doctor's Name</th>
						<th align='right'>Hospital</th>
						<th align='right'>Specialization</th>
						<th align='right'>Notes</th>
					</tr>

					{doctors.map((doctor, i) => (
						<tr key={i}>
							<td component='th' scope='row'>
								{doctor.Name}
							</td>
							<td align='right'>{doctor.Hospital}</td>
							<td align='right'>{doctor.Specialization}</td>
							<td align='right'>{doctor.Notes}</td>
						</tr>
					))}
				</table>
			</div>
		</>
	);
}

export default Doctors;
