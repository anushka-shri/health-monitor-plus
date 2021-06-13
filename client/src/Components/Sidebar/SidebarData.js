import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';
import * as AiIcons from 'react-icons/ai';
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
			title: 'Events',
			path: '/events',
			icon: <FcIcons.FcCalendar />,
		},
		{
			title: 'My Medicines',
			path: '/mymeds',
			icon: <FaIcons.FaCommentMedical />,
		},
		{
			title: 'Medications',
			path: '/medications',
			icon: <GiIcons.GiMedicines />,
		},
		{
			title: 'Personal Monitoring',
			icon: <BiIcons.BiTachometer />,
			iconClosed: <AiIcons.AiOutlinePlus />,
			iconOpened: <AiIcons.AiOutlineMinus />,
			subNav: [
				{
					title: 'Daily Monitoring',
					path: '/daily-monitoring',
					icon: <AiIcons.AiOutlineRight />,
				},
				{
					title: 'Family History',
					path: '/family-history',
					icon: <AiIcons.AiOutlineRight />,
				},
			],
		},
		{
			title: 'Prescriptions',
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
			icon: <BiIcons.BiTestTube />,
			iconClosed: <AiIcons.AiOutlinePlus />,
			iconOpened: <AiIcons.AiOutlineMinus />,
			subNav: [
				{
					title: 'View Lab Reports',
					path: '/lab-reports',
					icon: <AiIcons.AiOutlineRight />,
				},
				{
					title: 'New Lab Reports',
					path: '/new-labreps',
					icon: <AiIcons.AiOutlineRight />,
				},
			],
		},
		{
			title: 'Doctors',
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