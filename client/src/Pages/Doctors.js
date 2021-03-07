import React,{useState,useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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
            
            </div>
            </>
    )
 
}

export default Doctors
