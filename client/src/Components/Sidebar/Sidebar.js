import React, { useContext } from 'react';
import './Sidebar.css';
import Button from '@material-ui/core/Button';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { Link } from 'react-router-dom';
import Logo from '../../images/Applogo.png';
import { useGlobalContext } from '../../Context/AppContext';

function Sidebar() {
	const { isLoggedIn, LogOut } = useGlobalContext();

	return (
		<>
			<div className='Navbar_container'>
				{isLoggedIn === true && (
					<>
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
