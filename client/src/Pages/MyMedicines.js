import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pagesCSS/Mymedicines.css';

function MyMedicines() {
	const [medicines, setMedicines] = useState([]);

	    const getMyMedicines = async() => {
	        console.log('here');
			try {
				const res = await axios.get(
					'http://localhost:3005/api/v1/medicine/getUserMedicines',
				);

				if (res.data.data) {
				
					setMedicines(res.data.data.myMedicines);
				}
			} catch {}
		};

		useEffect(() => {
			getMyMedicines();
		}, []);
	
	
	return <div></div>;
}

export default MyMedicines;




