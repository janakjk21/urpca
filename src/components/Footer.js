import React from 'react';
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaGooglePlusG,
} from 'react-icons/fa';
export default function Footer() {
	const iconSize = 20;
	return (
		<>
			<footer className=''>
				<div
					className='footer-main-area'
					data-background='images/footer-bg.png'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-4 col-lg-6 col-md-6'>
								<div className='widget footer-widget'>
									<img src='images/logo-footer.png' alt='' className='mrb-20' />
									<address className='mrb-25'>
										<p className='text-light-gray'>
											32 Dora Creek, tuntable creek, New South Wales 2480,
											Australia
										</p>
										<div className='mrb-10'>
											<a href='#' className='text-light-gray'>
												<i className='fas fa-phone-alt mrr-10' />
												+088 234 432 15565
											</a>
										</div>
										<div className='mrb-10'>
											<a href='#' className='text-light-gray'>
												<i className='fas fa-envelope mrr-10' />
												sample@yourdomain.com
											</a>
										</div>
										<div className='mrb-0'>
											<a href='#' className='text-light-gray'>
												<i className='fas fa-globe mrr-10' />
												www.domainname.com
											</a>
										</div>
									</address>
									<ul className='social-list'>
										<li>
											<a href='#'>
												<FaFacebookF size={iconSize} />
											</a>
										</li>
										<li>
											<a href='#'>
												<FaTwitter size={iconSize} />
											</a>
										</li>
										<li>
											<a href='#'>
												<FaInstagram size={iconSize} />
											</a>
										</li>
										<li>
											<a href='#'>
												<FaGooglePlusG size={iconSize} />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-xl-2 col-lg-6 col-md-6'>
								<div className='widget footer-widget'>
									<h5 className='widget-title text-white mrb-30'>
										Useful Links
									</h5>
									<ul className='footer-widget-list'>
										<li>
											<a href='#'>Home</a>
										</li>
										<li>
											<a href='#'>About</a>
										</li>
										<li>
											<a href='#'>Team</a>
										</li>
										<li>
											<a href='#'>Service</a>
										</li>
										<li>
											<a href='#'>News</a>
										</li>
										<li>
											<a href='#'>Policy</a>
										</li>
										<li>
											<a href='#'>Contact</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-xl-2 col-lg-6 col-md-6'>
								<div className='widget footer-widget'>
									<h5 className='widget-title text-white mrb-30'>Services</h5>
									<ul className='footer-widget-list'>
										<li>
											<a href='#'>Home</a>
										</li>
										<li>
											<a href='#'>About</a>
										</li>
										<li>
											<a href='#'>Team</a>
										</li>
										<li>
											<a href='#'>Service</a>
										</li>
										<li>
											<a href='#'>News</a>
										</li>
										<li>
											<a href='#'>Policy</a>
										</li>
										<li>
											<a href='#'>Contact</a>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-xl-4 col-lg-6 col-md-6'>
								<div className='widget footer-widget'>
									<h5 className='widget-title text-white mrb-30'>Newsletter</h5>
									<p className='text-light-gray'>
										Seamlessly visualize quality intellectual capital without
										superior collaboration and idea sharing listically
									</p>
									<input
										type='text'
										className='form-control'
										placeholder='Enter Your Email'
									/>
									<a
										href='#'
										className='cs-btn-one btn-gradient-color btn-sm has-icon mrt-20'>
										<i className='webexflaticon flaticon-send' />
										Submit Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='footer-bottom-area'>
					<div className='container'>
						<div className='row'>
							<div className='col-xl-12'>
								<div className='text-center'>
									<span className='text-light-gray'>
										Copyright © 2023 by{' '}
										<a
											className='text-primary-color'
											target='_blank'
											href='https://themeforest.net/user/webextheme'>
											{' '}
											Janak / Sanjo
										</a>{' '}
										| All rights reserved{' '}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
