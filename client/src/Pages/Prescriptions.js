import React,{Fragment, useState, useEffect }from 'react'
import './trial.css'
import Particles from '../Components/Particles/Particles.js';
import axios from 'axios'

function Prescriptions() {

    const [prescriptions, setPrescription] = useState([]);

    const getPrescription = async () => {
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/prescription/getUserPrescription'
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
         <>
            <Particles />
        <div>
            <h2 className="heading">Prescriptions</h2>
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
				</table>
            </div>
            </>
    )
}

export default Prescriptions
