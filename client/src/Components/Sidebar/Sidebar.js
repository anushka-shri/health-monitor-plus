import React from 'react';
import './Sidebar.css';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { FiLogIn } from 'react-icons/fi';
import { GrUserSettings } from 'react-icons/gr';
import Logo from '../../Applogo.png'

function Sidebar() {
	return (
		<>
			<div className='Navbar_container'>
				<div className='header'>
					<img className='Logo' src={Logo} alt='logo' />
					<div className='Sidebar_buttons'>
						<button className='icon_texts'>
							<GrUserSettings />
							profile
						</button>
						<button className='icon_text'>
							<FiLogIn />
							Login
						</button>
					</div>
				</div>
			</div>
			<div className='Sidebar_container'>
				<hr className='separator' />
				{SidebarData.map((item, index) => {
					return <Submenu item={item} key={index} />;
				})}
			</div>
		</>
	);
}

export default Sidebar;
