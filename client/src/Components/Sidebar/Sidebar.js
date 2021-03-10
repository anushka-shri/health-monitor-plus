import React,{useContext} from 'react';
import './Sidebar.css';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Logo from '../../Applogo.png'
import axios from 'axios';
import AuthContext from '../../Context/AuthContext'

function Sidebar() {

	const { loggedIn } = useContext(AuthContext);
	const { getLoggedIn } = useContext(AuthContext);

	const history = useHistory();

	async function logOut() {
	
		await axios.get('http://localhost:3005/api/v1/logout');
		await getLoggedIn();
		history.push('/');
	}
	
	return (
		<>
			<div className='Navbar_container'>
				{loggedIn === false && (
					<>
						<Link to='/register'>
							<Button
								variant='outlined'
								className='icon_texts'
								color='secondary'>
								Register
							</Button>
						</Link>
						<Link to='/login'>
							<Button
								variant='outlined'
								className='icon_text'
								color='secondary'>
								Login
							</Button>
						</Link>
					</>
				)}
				{loggedIn === true && (
					<>
						<Button
							onClick={logOut}
							variant='outlined'
							className='icon_text'
							color='secondary'>
							LogOut
						</Button>
					</>
				)}
			</div>
			<div className='Sidebar_container'>
				<img className='Logo' src={Logo} alt='logo' />

				{SidebarData.map((item, index) => {
					return <Submenu item={item} key={index} />;
				})}
			</div>
		</>
	);
}

export default Sidebar;
