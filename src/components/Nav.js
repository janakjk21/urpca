import React, { useEffect, useState } from 'react';
import logo from '../Assets/images/logo.png';
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaGooglePlusG,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import { Divider, MenuItem } from '@chakra-ui/react';

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
	return <>{isSmallScreen ? <Navformobile /> : <Navfordesktop />}</>;
}

const Navfordesktop = (props) => {
	return (
		<header className='header-style-two'>
			<div className='header-wrapper'>
				<div className='header-top-area bg-gradient-color d-none d-lg-block'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-6 header-top-left-part'>
								<span className='address'>
									<i className='webexflaticon flaticon-placeholder-1' /> 121
									King Street, Melbourne
								</span>
								<span className='phone'>
									<i className='webexflaticon flaticon-send' />{' '}
									example@gmail.com
								</span>
							</div>
							<div className='col-lg-6 header-top-right-part text-right'>
								<ul className='social-links'>
									<li>
										<a href='#'>
											<FaFacebookF />
										</a>
									</li>
									<li>
										<a href='#'>
											<FaTwitter />
										</a>
									</li>
									<li>
										<a href='#'>
											<FaLinkedinIn />
										</a>
									</li>
									<li>
										<a href='#'>
											<FaGooglePlusG />
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='bt_blank_nav' />
				<div className='header-navigation-area two-layers-header header-middlee bt_stick bt_sticky'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<Link
									className='navbar-brand logo f-left mrt-10 mrt-md-0'
									to='/'>
									<img
										id='logo-image'
										className='img-center'
										src={logo}
										alt=''
									/>
								</Link>
								<div className='mobile-menu-right' />

								<div className='main-menu f-right'>
									<nav id='mobile-menu-right'>
										<ul>
											<li className='has-sub'>
												<Link to='/'>Home</Link>
											</li>
											<li>
												<Link to='/aboutus'>About</Link>
											</li>
											<li className='has-sub'>
												<Link to='/faq'>Faq</Link>
												<ul className='sub-menu'>
													<li>
														<Link to='/faq'>Faq</Link>
													</li>
													<li>
														<Link to='/faqfullpage'>Faq fullpage</Link>
													</li>
													<li>
														<Link to='/Pricing'>Pricing</Link>
													</li>
												</ul>
											</li>
											<li className='has-sub'>
												<Link to='/Consulting'>Services</Link>
												<ul className='sub-menu'>
													{/* ... (other service links) */}
												</ul>
											</li>
											<li className='has-sub right-view'>
												<Link to='/casestudy'>Case Study</Link>
												<ul className='sub-menu'>
													{/* ... (other case study links) */}
												</ul>
											</li>
											<li className='has-sub right-view'>
												<Link to='/login'>Login</Link>
												<ul className='sub-menu'>
													{/* ... (other news links) */}
												</ul>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
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
								<Link to='/aboutus'>About</Link>
							</li>
							<li className='has-sub'>
								<Link to='#'>Page</Link>
							</li>
							<li className='has-sub'>
								<li>
									<Link to='/faq'>Faq</Link>
								</li>
								<li>
									<Link to='/faqfullpage'>Faq fullpage</Link>
								</li>
								<li>
									<Link to='/Pricing'>Pricing</Link>
								</li>
							</li>
							<li className='has-sub right-view'>
								<Link to='/casestudy'>Case Study</Link>
							</li>
							<li className='has-sub right-view'>
								<Link to='/Consulting'>Services</Link>
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
