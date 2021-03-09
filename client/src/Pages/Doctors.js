import React, { useState, useEffect } from 'react';
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
			console.log(doctors);
		} catch {}
	};

	useEffect(() => {
		getDoctors();
	}, []);

	return (
		<>
			
			<div>
				<h2 className='heading'>Doctors Added</h2>
				<table className='Doctors_container'>
					<tr>
						<th>Doctor's Name</th>
						<th>Hospital</th>
						<th>Specialization</th>
						<th>Notes</th>
					</tr>

					{doctors.map((doctor, i) => (
						<tr key={i}>
							<td>{doctor.Name}</td>
							<td>{doctor.Hospital}</td>
							<td>{doctor.Specialization}</td>
							<td>{doctor.Notes}</td>
						</tr>
					))}
				</table>
			</div>
		</>
	);
}

export default Doctors;
