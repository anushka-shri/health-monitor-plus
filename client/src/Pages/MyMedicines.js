import React from 'react';
import './pagesCSS/Mymedicines.css';

function MyMedicines() {

    const [medicines, setMedicines] = useState([]);
    const getMyMedicines = async () => {
        console.log('here');
		try {
			const res = await axios.get(
				'http://localhost:3005/api/v1/medicine/getUserMedicines',
			);

			if (res.data.data) {
				console.log(res.data.data);
			}
		} catch {}
	};

	useEffect(() => {
		getMyMedicines();
	}, []);

    return (
        <div>
          <h1>Medicines</h1>  
        </div>
    )
}

export default MyMedicines
