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
import {useGlobalContext} from '../../Context/AppContext'


function Sidebar() {

	const { isLoggedIn, getLoggedIn} = useGlobalContext();

	const history = useHistory();

	async function logOut() {
	
		await axios.get('http://localhost:3005/api/v1/logout');
		await getLoggedIn();
		history.push('/');
	}
	
	return (
		<>
			<div className='Navbar_container'>
				{isLoggedIn === false && (
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
				{isLoggedIn === true && (
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
				<div className='Logo_container'>
				<img className='Logo' src={Logo} alt='logo' />
				</div>
				<div className='Menu_container'>
				{SidebarData.map((item, index) => {
					return <Submenu item={item} key={index} />;
				})}
				</div>
			</div>
		</>
	);
}

export default Sidebar;
