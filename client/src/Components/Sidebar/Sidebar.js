import React, { useContext } from 'react';
import './Sidebar.css';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Logo from '../../images/Applogo.png';
import { useGlobalContext } from '../../Context/AppContext';


function Sidebar() {
	const { isLoggedIn,  LogOut } = useGlobalContext();

	// const history = useHistory();

	// async function logOut() {

	// 	await axios.get('http://localhost:3005/api/v1/logout');
	// 	await getLoggedIn();
	// 	history.push('/');
	// }

	return (
		<>
			<div className='Navbar_container'>
				{isLoggedIn === true && (
					<>
					<Link to='/profile'>
						<Button
							
							variant='outlined'
							className='icon_text'
							color='secondary'>
							Profile
						</Button>
						</Link>
						<Link to='/login'>
							<Button
								// onClick={logOut}
								variant='outlined'
								className='icon_text'
								color='secondary'
								onClick={() => LogOut()}>
								LogOut
							</Button>
						</Link>
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
