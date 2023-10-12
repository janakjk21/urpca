import React, { useEffect, useState } from 'react';
import logo from '../../Assets/images/logo.png';
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaGooglePlusG,
	FaArrowDown,
	FaAngleDown,
	FaNewspaper,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTitleData } from '../redux/dashboardslicers/titleSlicer';

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
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTitleData());
	}, []);
	const title = useSelector((state) => state.title.data);
	const status = useSelector((state) => state.title.status);
	console.log(status, 'status');
	console.log(title, 'title');

	if (status === 'succeeded') {
		console.log(
			title.title_tax.filter(
				(tax) => tax.category === 'directtax',
				'direct tax',
				status
			)
		);
	}
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
										style={{ color: 'black', backgroundColor: '#2552B4' }}
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
												<Link to='/insights'>Insights</Link>
											</li>
											<li>
												<Link to='/insights'>Direct Tax</Link>
												<ul className='sub-menu'>
													<li>
														<Link to='/insights'>Overview</Link>
													</li>
													{status === 'succeeded' && (
														<ul>
															{title.title_tax
																.filter((tax) => tax.category === 'directtax')
																.map((tax) => (
																	<li key={tax._id}>
																		<Link to={`/tax/${tax.id}`}>
																			{tax.title}
																		</Link>
																	</li>
																))}
														</ul>
													)}
													<li>
														<Link to='/insights'>Employment Income</Link>
														<ul className='sub-menu'>
															<li>
																<Link to='/insights'>
																	Taxation of an Individual
																</Link>
															</li>
															<li>
																<Link to='/insights'>Social Security Fund</Link>
															</li>
														</ul>
													</li>
													<li>
														<Link to='/insights'>Income From Business</Link>
													</li>
													<li>
														<Link to='/insights'>Permanent Establishment</Link>
													</li>
													<li>
														<Link to='/insights'>Income from Investment</Link>
													</li>
													<li>
														<Link to='/insights'>Administrative Aspects</Link>
													</li>
												</ul>
											</li>
											<li>
												<Link to='/insights'>Indirect Tax</Link>
												<ul className='sub-menu'>
													{status === 'succeeded' && (
														<ul>
															{title.title_tax
																.filter((tax) => tax.category === 'indirecttax')
																.map((tax) => (
																	<li key={tax._id}>
																		<Link to={`/tax/${tax.id}`}>
																			{tax.title}
																		</Link>
																	</li>
																))}
														</ul>
													)}
													<li>
														<Link to='/insights'>VAT</Link>
													</li>
													<li>
														<Link to='/insights'>Customs</Link>
													</li>
													<li>
														<Link to='/insights'>Excise Duty</Link>
													</li>
												</ul>
											</li>
											<li>
												<Link to='/insights'>Act and Directives</Link>
												<ul className='sub-menu'>
													<li>
														{status === 'succeeded' && (
															<ul>
																{title.title_tax
																	.filter(
																		(tax) => tax.category === 'actdirective'
																	)
																	.map((tax) => (
																		<li key={tax._id}>
																			<Link to={`/tax/${tax.id}`}>
																				{tax.title}
																			</Link>
																		</li>
																	))}
															</ul>
														)}
														<Link to='/insights'>Income Tax</Link>
														<ul className='sub-menu'>
															<li>
																<Link to='/insights'>
																	Act, Rules and Directives
																</Link>
															</li>
															<li>
																<Link to='/insights'>
																	Income Tax Directives Chapter Wise
																</Link>
															</li>
															<li>
																<Link to='/insights'>
																	Income Tax Act 2058 - Chapterwise
																</Link>
															</li>
														</ul>
													</li>
													<li>
														<Link to='/insights'>Value Added Tax</Link>
														<ul className='sub-menu'>
															<li>
																<Link to='/insights'>
																	Act, Rules and Directives
																</Link>
															</li>
														</ul>
													</li>
													<li>
														<Link to='/insights'>Excise Duty</Link>
														<ul className='sub-menu'>
															<li>
																<Link to='/insights'>Act and Duty</Link>
															</li>
														</ul>
													</li>
												</ul>
											</li>

											<li className='has-sub'>
												<Link to='/faq'>Resources</Link>
												<ul className='sub-menu'>
													<li>
														<Link to='/news/1'>News </Link>
													</li>
													<li>
														<Link to='/faqfullpage'>Faq</Link>
													</li>
													<li>
														<Link to='/faqfullpage'>Articles</Link>
													</li>
												</ul>
											</li>

											<li className='has-sub'>
												<Link to='/faq'>Books</Link>
												<ul className='sub-menu'>
													<li>
														<Link to='/faq'>Faq</Link>
													</li>
													<li>
														<Link to='/faqfullpage'>Faq fullpage</Link>
													</li>
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
								<Link to='/insights'>Insights</Link>
							</li>
							<li className='has-sub'>
								<Link to='#'>Direct Tax</Link>
								<ul className='sub-menu'>
									<li>
										<Link to='/insights'>Overview</Link>
									</li>
									<li>
										<Link to='/insights'>Employment Income</Link>
										<ul className='sub-menu'>
											<li>
												<Link to='/insights'>Taxation of an Individual</Link>
											</li>
											<li>
												<Link to='/insights'>Social Security Fund</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link to='/insights'>Income From Business</Link>
									</li>
									<li>
										<Link to='/insights'>Permanent Establishment</Link>
									</li>
									<li>
										<Link to='/insights'>Income from Investment</Link>
									</li>
									<li>
										<Link to='/insights'>Administrative Aspects</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to='/insights'>Indirect Tax</Link>
								<ul className='sub-menu'>
									<li>
										<Link to='/insights'>VAT</Link>
									</li>
									<li>
										<Link to='/insights'>Customs</Link>
									</li>
									<li>
										<Link to='/insights'>Excise Duty</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to='/insights'>Act and Directives</Link>
								<ul className='sub-menu'>
									<li>
										<Link to='/insights'>Income Tax</Link>
										<ul className='sub-menu'>
											<li>
												<Link to='/insights'>Act, Rules and Directives</Link>
											</li>
											<li>
												<Link to='/insights'>
													Income Tax Directives Chapter Wise
												</Link>
											</li>
											<li>
												<Link to='/insights'>
													Income Tax Act 2058 - Chapterwise
												</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link to='/insights'>Value Added Tax</Link>
										<ul className='sub-menu'>
											<li>
												<Link to='/insights'>Act, Rules and Directives</Link>
											</li>
										</ul>
									</li>
									<li>
										<Link to='/insights'>Excise Duty</Link>
										<ul className='sub-menu'>
											<li>
												<Link to='/insights'>Act and Duty</Link>
											</li>
										</ul>
									</li>
								</ul>
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
