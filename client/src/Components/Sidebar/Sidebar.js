import React from 'react';
import './Sidebar.css';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import Logo from '../../Applogo.png'




  

function Sidebar() {
	return (
		<>
			<div className='Navbar_container'>
					<Button variant='outlined' className='icon_texts' color='secondary'>
						Profile
					</Button>
					<Button variant='outlined' className='icon_text' color='primary'>
						Login
					</Button>
			
				
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
