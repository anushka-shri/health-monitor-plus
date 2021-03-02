import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Dashboard',
		path: '/',
		icon: <RiIcons.RiDashboardLine />,
	},
	{
		title: 'Prescriptions',
		path: '/presciptions',
		icon: <FaIcons.FaPrescriptionBottleAlt />,
		iconClosed: <AiIcons.AiOutlinePlus />,
		iconOpened: <AiIcons.AiOutlineMinus />,
		subNav: [
			{
				title: 'New Prescription',
				path: '/new-prescription',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Prescriptions',
				path: '/presciptions',
				icon: <AiIcons.AiOutlineRight />,
			},
		],
	},
	{
		title: 'Doctors',
		path: '/doctors',
		icon: <FaIcons.FaUserNurse />,
		iconClosed: <AiIcons.AiOutlinePlus />,
		iconOpened: <AiIcons.AiOutlineMinus />,
		subNav: [
			{
				title: 'All Doctors',
				path: '/doctors',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Add Doctors',
				path: '/new-doctors',
				icon: <AiIcons.AiOutlineRight />,
			},
		],
	},
];
