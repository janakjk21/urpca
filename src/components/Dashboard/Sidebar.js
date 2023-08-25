import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import {
	AiOutlineHome,
	AiOutlineCalendar,
	AiOutlineComment,
	AiOutlineDashboard,
	AiOutlineSolution,
} from 'react-icons/ai';
import logo from '../../Assets/images/logo.png';
import { position } from '@chakra-ui/react';

export default function Sidebar() {
	return (
		<div
			className='leftside-menu '
			style={{
				backgroundColor: '#313A46',
				color: '#ffffff',
			}}>
			{/* Brand Logo Light */}
			<a href='index.html' className='logo logo-light'>
				<span className='logo-lg'>
					<img src={logo} alt='logo' />
				</span>
				<span className='logo-sm'>
					<img src={logo} alt='small logo' />
				</span>
			</a>
			{/* Brand Logo Dark */}
			<a href='index.html' className='logo logo-dark'>
				<span className='logo-lg'>
					<img src={logo} alt='dark logo' />
				</span>
				<span className='logo-sm'>
					<img src={logo} alt='small logo' />
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
	);
}

const Sidebar1 = () => {
	return (
		<div className='h-100' id='leftside-menu-container' data-simplebar>
			<ul className='side-nav'>
				<li className='side-nav-title'>Navigation</li>
				<li className='side-nav-item'>
					<Link to='/dashboard' className='side-nav-link'>
						<AiOutlineDashboard />
						<span className='badge bg-success float-end'>5</span>
						<span> Dashboards </span>
					</Link>
				</li>
				{/* ... Other links ... */}
				<li className='side-nav-title'>Apps</li>
				<li className='side-nav-item'>
					<Link to='apps-calendar.html' className='side-nav-link'>
						<AiOutlineCalendar />
						<span>
							{' '}
							<Link to='/orderlist'>Orders List</Link>
						</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/faqform' className='side-nav-link'>
						<AiOutlineComment />
						<span> Faq Question</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link
						to='/dashboard'
						className='side-nav-link'
						data-bs-toggle='collapse'
						data-bs-target='#sidebarCrm'
						aria-expanded='false'
						aria-controls='sidebarCrm'>
						<AiOutlineSolution />
						<span className='badge bg-danger text-white float-end'>New</span>
						<span>
							{' '}
							<li>
								<Link to='/editcase'>Projects</Link>
							</li>
						</span>
					</Link>
				</li>
				{/* Other menu items... */}
				<li className='side-nav-item'>
					<Link to='apps-social-feed.html' className='side-nav-link'>
						<AiOutlineSolution />
						<span>
							{' '}
							<Link to='/bookform'>Management</Link>
						</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};
