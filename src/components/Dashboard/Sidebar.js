import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import {
	AiOutlineHome,
	AiOutlineCalendar,
	AiOutlineComment,
	AiOutlineDashboard,
	AiOutlineSolution,
} from 'react-icons/ai';

export default function Sidebar() {
	return (
		<div>
			<div
				className='leftside-menu'
				style={{ backgroundColor: '#313A46', color: '#ffffff' }}>
				{/* Brand Logo Light */}
				<a href='index.html' className='logo logo-light'>
					<span className='logo-lg'>
						<img src='assets/images/logo.png' alt='logo' />
					</span>
					<span className='logo-sm'>
						<img src='assets/images/logo-sm.png' alt='small logo' />
					</span>
				</a>
				{/* Brand Logo Dark */}
				<a href='index.html' className='logo logo-dark'>
					<span className='logo-lg'>
						<img src='assets/images/logo-dark.png' alt='dark logo' />
					</span>
					<span className='logo-sm'>
						<img src='assets/images/logo-dark-sm.png' alt='small logo' />
					</span>
				</a>
				{/* Sidebar Hover Menu Toggle Button */}
				<div
					className='button-sm-hover'
					data-bs-toggle='tooltip'
					data-bs-placement='right'
					title='Show Full Sidebar'>
					<i className='ri-checkbox-blank-circle-line align-middle' />
				</div>
				{/* Full Sidebar Menu Close Button */}
				<div className='button-close-fullsidebar'>
					<i className='ri-close-fill align-middle' />
				</div>
				{/* Sidebar -left */}
				<Sidebar1></Sidebar1>
			</div>
		</div>
	);
}

const Sidebar1 = () => {
	return (
		<div className='h-100' id='leftside-menu-container' data-simplebar>
			<ul className='side-nav'>
				<li className='side-nav-title'>Navigation</li>
				<li className='side-nav-item'>
					<Link to='#' className='side-nav-link'>
						<AiOutlineDashboard />
						<span className='badge bg-success float-end'>5</span>
						<span> Dashboards </span>
					</Link>
				</li>
				<li className='side-nav-title'>Apps</li>
				<li className='side-nav-item'>
					<Link to='apps-calendar.html' className='side-nav-link'>
						<AiOutlineCalendar />
						<span> Calendar </span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='apps-chat.html' className='side-nav-link'>
						<AiOutlineComment />
						<span> Chat </span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<a
						data-bs-toggle='collapse'
						href='#sidebarCrm'
						aria-expanded='false'
						aria-controls='sidebarCrm'
						className='side-nav-link'>
						{/* <AiOutlineBriefcase /> */}
						<AiOutlineDashboard />
						<span className='badge bg-danger text-white float-end'>New</span>
						<span> CRM </span>
					</a>
					<div className='collapse' id='sidebarCrm'>
						<ul className='side-nav-second-level'>
							<li>
								<a href='crm-projects.html'>Projects</a>
							</li>
							<li>
								<a href='crm-orders-list.html'>Orders List</a>
							</li>
							<li>
								<a href='crm-clients.html'>Clients</a>
							</li>
							<li>
								<a href='crm-management.html'>Management</a>
							</li>
						</ul>
					</div>
				</li>
				{/* Other menu items... */}
				<li className='side-nav-item'>
					<Link to='apps-social-feed.html' className='side-nav-link'>
						{/* <AiOutlineRss /> */}
						<AiOutlineSolution></AiOutlineSolution>
						<span> Social Feed </span>
					</Link>
				</li>
			</ul>
		</div>
	);
};
