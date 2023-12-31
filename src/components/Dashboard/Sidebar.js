import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation
import {
	AiOutlineHome,
	AiOutlineCalendar,
	AiOutlineComment,
	AiOutlineDashboard,
	AiOutlineSolution,
	AiOutlineFile,
	AiOutlineAppstore,
} from 'react-icons/ai';
import logo from '../../Assets/images/logo.png';

export default function Sidebar() {
	return (
		<div
			className='leftside-menu '
			style={{
				backgroundColor: '#536DE6',
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
						<AiOutlineDashboard style={{ color: 'green' }} />
						<span > Dashboards </span>
					</Link>
				</li>
				{/* ... Other links ... */}
				<li className='side-nav-title'>Apps</li>
				<li className='side-nav-item'>
					<Link to='/orderlist' className='side-nav-link'>
						<AiOutlineCalendar />
						<span> Orders List</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/faqform' className='side-nav-link'>
						<AiOutlineComment />
						<span> FAQ Question</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link
						to='/taxform'
						className='side-nav-link'
						data-bs-toggle='collapse'
						data-bs-target='#sidebarCrm'
						aria-expanded='false'
						aria-controls='sidebarCrm'>
						<AiOutlineSolution />
						<span> Tax form</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link
						to='/homesliderform'
						className='side-nav-link'
						data-bs-toggle='collapse'
						data-bs-target='#sidebarCrm'
						aria-expanded='false'
						aria-controls='sidebarCrm'>
						<AiOutlineSolution />
						<span> Home Slider</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/booksform' className='side-nav-link'>
						<AiOutlineSolution />
						<span> Book form</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/newsform' className='side-nav-link'>
						<AiOutlineFile />
						<span> News Form</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/serviceform' className='side-nav-link'>
						<AiOutlineAppstore />
						<span> Service Form</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/industryform' className='side-nav-link'>
						<AiOutlineAppstore />
						<span> industryform</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/investnepalform' className='side-nav-link'>
						<AiOutlineAppstore />
						<span> investnepalform</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/employeform' className='side-nav-link'>
						<AiOutlineAppstore />
						<span> employeform</span>
					</Link>
				</li>
				<li className='side-nav-item'>
					<Link to='/usertable' className='side-nav-link'>
						<AiOutlineAppstore />
						<span> usertable</span>
					</Link>
				</li>
				{/* Add more links here */}
			</ul>
		</div>
	);
};
