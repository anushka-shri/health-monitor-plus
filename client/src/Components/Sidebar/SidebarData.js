import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';
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
		path: '/medications',
		icon: <GiIcons.GiMedicines />,
	},
	{
		title: 'Personal Monitoring',
		path: '/',
		icon: <BiIcons.BiTachometer />,
		iconClosed: <AiIcons.AiOutlinePlus />,
		iconOpened: <AiIcons.AiOutlineMinus />,
		subNav: [
			{
				title: 'Blood Pressure',
				path: '/blood-pressure',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Blood Glucose',
				path: '/blood-glucose',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Oxygen Saturation',
				path: '/oxygen',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Allergies',
				path: '/allergies',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Vaccinations',
				path: '/vaccinations',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Family History',
				path: '/family-history',
				icon: <AiIcons.AiOutlineRight />,
			},
			{
				title: 'Height & Weight',
				path: '/height-weight',
				icon: <AiIcons.AiOutlineRight />,
			},
		],
	},
	{
		title: 'Prescriptions',
		path: '/',
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
				path: '/prescriptions',
				icon: <AiIcons.AiOutlineRight />,
			},
		],
	},
	{
		title: 'Lab Reports',
		path: '/lab-reports',
		icon: <BiIcons.BiTestTube />,
	},

	{
		title: 'Doctors',
		path: '/',
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
