import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
	{
		title: 'Dashboard',
		path: '/',
		icon: <RiIcons.RiDashboardLine />,
	},
	{
		title: 'Medications',
		path: '/medicines',
		icon: <GiIcons.GiMedicines />,
	},
	{
		title: 'Personal Monitoring',
		path: '/medicines',
		icon: <BiIcons.BiTachometer />,
		iconClosed: <AiIcons.AiOutlinePlus />,
		iconOpened: <AiIcons.AiOutlineMinus />,
		subNav: [
			{
				title: 'Blood Pressure',
				path: '/record-bp',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Blood Glucose',
				path: '/stats-bp',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Oxygen Saturation',
				path: '/stats-bp',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Allergies',
				path: '/stats-bp',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Vaccinations',
				path: '/stats-bp',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Family History',
				path: '/stats-bp',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Height & Weight',
				path: '/stats-bp',
				icon: <AiIcons.AiOutlineRight />,
			},
		],
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
		title: 'Lab Reports',
		path: '/presciptions',
		icon: <BiIcons.BiTestTube />,
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
