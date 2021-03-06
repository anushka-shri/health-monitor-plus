import React,{useState,useEffect} from 'react'
import './trial.css'
import Particles from '../Components/Particles/Particles.js';
import axios from 'axios';

function Doctors() {
    const [doctors, setDoctor] = useState([]);

	const getDoctors = async() => {
		try {
			const res = await axios.get(
			  "http://localhost:3005/api/v1/doctors/getUserDoctor");
			  //console.log(res.data.data);
			setDoctor(res.data.data);
			//.log(doctors);
		   }
		   catch {}
	}
    const renderDoctors = () => {
		return doctors.map((doctor,i) => {
			return <li key={i}>{doctor.Name}</li>
		});
	}
    useEffect(() => {
		getDoctors();
	},[])

    return (
        <>
            <Particles />
        <div>
            <h2 className="heading">Doctors</h2>
            <ul className="heading">{renderDoctors()}</ul>
            </div>
            </>
    )
}

export default Doctors
