import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Submenu.css';

function Submenu({ item }) {
	const [subNav, setSubNav] = useState(false);

	const showSubNav = setSubNav(!subNav);
	return (
		<div className='Sidebar_link'   >
			
            {/* to={item.path} */}
            {/* onClick={item.subNav && showSubNav} */}
				<div>
					<div>{item.icon}</div>
					<div className='Sidebar_label'>{item.title}</div>
				</div>
				<div>
					{/* {item.subNav && subNav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null} */}
				</div>
			
		</div>
	);
}

export default Submenu;
