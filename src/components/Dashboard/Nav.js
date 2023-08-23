import React from 'react';

export default function Nav() {
	return (
		<div className='navbar-custom'>
			<div className='topbar container-fluid'>
				<div className='d-flex align-items-center gap-lg-2 gap-1'>
					{/* Topbar Brand Logo */}
					<div className='logo-topbar'>
						{/* Logo light */}
						<a href='index.html' className='logo-light'>
							<span className='logo-lg'>
								<img src='assets/images/logo.png' alt='logo' />
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
	);
}
