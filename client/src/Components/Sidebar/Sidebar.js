import React from 'react';
import '../Css/Sidebar.css';
// import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';
import { CgProfile } from 'react-icons/cg'
import { FiLogIn } from 'react-icons/fi';
import {GrUserSettings} from 'react-icons/gr'

function Sidebar() {
	return (
		<div className='Sidebar_container'>
			<CgProfile className='profile_icon' />
			<div className='Sidebar_buttons'>
				<button className='icon_texts'><GrUserSettings/>profile</button>
				<button className='icon_text'><FiLogIn/>Login</button>
			</div>

			<hr className='separator' />
			{SidebarData.map((item, index) => {
				return <Submenu item={item} key={index} />;
			})}
		</div>
	);
}

export default Sidebar;
