import React from 'react';
import logo from '../../Assets/images/logo.png';
import { Link } from 'react-router-dom';
import Dropdown from 'rc-dropdown';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Nav() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768); // You can adjust the breakpoint
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Initial check

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<>
			{isSmallScreen ? (
				<>
					<Navformobile></Navformobile>
				</>
			) : (
				<>
					<Navfordesktop></Navfordesktop>
				</>
			)}
		</>
	);
}

const Navfordesktop = (props) => {
	return (
		<>
			<div className='navbar-custom'>
				<div className='topbar container-fluid'>
					<div className='d-flex align-items-center gap-lg-2 gap-1'>
						{/* Topbar Brand Logo */}
						<div className='logo-topbar'>
							{/* Logo light */}
							<a href='index.html' className='logo-light'>
								<span className='logo-lg'>
									<img src={logo} alt='logo' />
								</span>
								<span className='logo-sm'>
									<img src='assets/images/logo-sm.png' alt='small logo' />
								</span>
							</a>
							{/* Logo Dark */}
							<a href='index.html' className='logo-dark'>
								<span className='logo-lg'>
									<img src='assets/images/logo-dark.png' alt='dark logo' />
								</span>
								<span className='logo-sm'>
									<img src='assets/images/logo-dark-sm.png' alt='small logo' />
								</span>
							</a>
						</div>
						{/* Sidebar Menu Toggle Button */}
						<button className='button-toggle-menu'>
							<i className='mdi mdi-menu' />
						</button>
						{/* Horizontal Menu Toggle Button */}
						<button
							className='navbar-toggle'
							data-bs-toggle='collapse'
							data-bs-target='#topnav-menu-content'>
							<div className='lines'>
								<span />
								<span />
								<span />
							</div>
						</button>
						{/* Topbar Search Form */}
						<div className='app-search dropdown d-none d-lg-block'>
							<form>
								<div className='input-group'>
									<input
										type='search'
										className='form-control dropdown-toggle'
										placeholder='Search...'
										id='top-search'
									/>
									<span className='mdi mdi-magnify search-icon' />
									<button
										className='input-group-text btn btn-primary'
										type='submit'>
										Search
									</button>
								</div>
							</form>
						</div>
					</div>
					<ul className='topbar-menu d-flex align-items-center gap-3'>
						<li className='dropdown d-lg-none'>
							<a className='nav-link dropdown-toggle arrow-none'>
								<i className='ri-search-line font-22' />
							</a>
							<div className='dropdown-menu dropdown-menu-animated dropdown-lg p-0'>
								<form className='p-3'>
									<input
										type='search'
										className='form-control'
										placeholder='Search ...'
										aria-label="Recipient's username"
									/>
								</form>
							</div>
						</li>
						{/* item*/}
					</ul>
				</div>
			</div>
		</>
	);
};

const Navformobile = (props) => {
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	const handleDropdownVisibleChange = (visible) => {
		setIsDropdownVisible(visible);
	};

	const dropdownMenu = (
		<>
			<div className='mobile-menu-right mean-container'>
				<div className='mean-bar'>
					<nav className='mean-nav'>
						<ul style={{ display: 'block' }}>
							<li className='has-sub'>
								<Link to='/'>Home</Link>
							</li>
							<li>
								<Link to='/dashboard'>Dashboard home</Link>
							</li>
							<li>
								<Link to='/orderlist'>Orders List</Link>
							</li>
							<li className='has-sub'>
								<Link
									to='/dashboard'
									className='side-nav-link'
									data-bs-toggle='collapse'
									data-bs-target='#sidebarCrm'
									aria-expanded='false'
									aria-controls='sidebarCrm'></Link>
							</li>

							<li>
								<Link to='/editcase'>Projects</Link>
							</li>
							<li>
								<Link to='/bookform'>Management</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</>
	);

	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<a className='navbar-brand  mrt-10 mrt-md-0' href='index.html'>
					<img
						id='logo-image'
						className='img-center'
						src={logo}
						alt=''
						style={{ left: '0px', padding: '0px', margin: '0px' }}
					/>
				</a>

				<Dropdown
					visible={isDropdownVisible}
					onVisibleChange={handleDropdownVisibleChange}
					overlay={dropdownMenu}
					animation='slide-up'
					trigger={['click']}>
					<button className='navbar-toggler'>
						<span className='navbar-toggler-icon' />
					</button>
				</Dropdown>
			</nav>
		</>
	);
};
