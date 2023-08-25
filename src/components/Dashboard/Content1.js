import React from 'react';

export default function Content1() {
	const campaignCardsData = [
		{
			title: 'Campaign Sent',
			value: '9,184',
			percentage: '3.27',
			color: 'text-success',
			arrow: 'mdi-arrow-up-bold',
			chartColor: '#727cf5',
		},
		{
			title: 'New Leads',
			value: '3,254',
			percentage: '5.38',
			color: 'text-danger',
			arrow: 'mdi-arrow-down-bold',
			chartColor: '#0acf97',
		},
		{
			title: 'Deals',
			value: '861',
			percentage: '4.87',
			color: 'text-success',
			arrow: 'mdi-arrow-up-bold',
			chartColor: '#727cf5',
		},
		{
			title: 'Booked Revenue',
			value: '$253k',
			percentage: '11.7',
			color: 'text-success',
			arrow: 'mdi-arrow-up-bold',
			chartColor: '#f46a6a',
		},
	];
	return (
		<div>
			<div className='content-page'>
				<div className='content'>
					{/* Start Content*/}
					<div className='container-fluid'>
						{/* start page title */}
						<div className='row'>
							<div className='col-12'>
								<div className='page-title-box'>
									<div className='page-title-right'>
										<ol className='breadcrumb m-0'></ol>
									</div>
									<h4 className='page-title'>CRM</h4>
								</div>
							</div>
						</div>
						{/* end page title */}
						<div className='row'>
							{campaignCardsData.map((card, index) => (
								<CampaignCard
									key={index}
									name={card.title}
									price={card.value}
									percentage={card.percentage}
									color={card.color}
									arrow={card.arrow}
									chartColor={card.chartColor}
								/>
							))}
						</div>
						{/* end row */}
						<div className='row'>
							<div className='col-lg-5'>
								<div className='card'>
									<div className='card-header d-flex justify-content-between align-items-center'>
										<h4 className='header-title'>Campaigns</h4>
										<div className='dropdown'>
											<a
												href='#'
												className='dropdown-toggle arrow-none card-drop'
												data-bs-toggle='dropdown'
												aria-expanded='false'>
												<i className='mdi mdi-dots-vertical' />
											</a>
											<div className='dropdown-menu dropdown-menu-end'>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Today
												</a>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Yesterday
												</a>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Last Week
												</a>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Last Month
												</a>
											</div>
										</div>
									</div>
									<div className='card-body pt-0'>
										<div
											id='dash-campaigns-chart'
											className='apex-charts'
											data-colors='#ffbc00,#727cf5,#0acf97'
										/>
										<div className='row text-center mt-3'>
											<div className='col-sm-4'>
												<i className='mdi mdi-send widget-icon rounded-circle bg-warning-lighten text-warning' />
												<h3 className='fw-normal mt-3'>
													<span>6,510</span>
												</h3>
												<p className='text-muted mb-0 mb-2'>
													<i className='mdi mdi-checkbox-blank-circle text-warning' />{' '}
													Total Sent
												</p>
											</div>
											<div className='col-sm-4'>
												<i className='mdi mdi-flag-variant widget-icon rounded-circle bg-primary-lighten text-primary' />
												<h3 className='fw-normal mt-3'>
													<span>3,487</span>
												</h3>
												<p className='text-muted mb-0 mb-2'>
													<i className='mdi mdi-checkbox-blank-circle text-primary' />{' '}
													Reached
												</p>
											</div>
											<div className='col-sm-4'>
												<i className='mdi mdi-email-open widget-icon rounded-circle bg-success-lighten text-success' />
												<h3 className='fw-normal mt-3'>
													<span>1,568</span>
												</h3>
												<p className='text-muted mb-0 mb-2'>
													<i className='mdi mdi-checkbox-blank-circle text-success' />{' '}
													Opened
												</p>
											</div>
										</div>
									</div>
									{/* end card body*/}
								</div>
								{/* end card */}
							</div>
							{/* end col*/}
							<div className='col-lg-7'>
								<div className='card'>
									<div className='card-header d-flex justify-content-between align-items-center'>
										<h4 className='header-title'>Revenue</h4>
										<div>
											<button
												type='button'
												className='btn btn-soft-secondary btn-sm'>
												ALL
											</button>
											<button
												type='button'
												className='btn btn-soft-primary btn-sm'>
												1M
											</button>
											<button
												type='button'
												className='btn btn-soft-secondary btn-sm'>
												6M
											</button>
											<button
												type='button'
												className='btn btn-soft-secondary btn-sm'>
												1Y
											</button>
										</div>
									</div>
									<div className='card-body pt-0'>
										<div className='chart-content-bg'>
											<div className='row text-center'>
												<div className='col-sm-6'>
													<p className='text-muted mb-0 mt-3'>Current Month</p>
													<h2 className='fw-normal mb-3'>
														<span>$42,025</span>
													</h2>
												</div>
												<div className='col-sm-6'>
													<p className='text-muted mb-0 mt-3'>Previous Month</p>
													<h2 className='fw-normal mb-3'>
														<span>$74,651</span>
													</h2>
												</div>
											</div>
										</div>
										<div dir='ltr'>
											<div
												id='dash-revenue-chart'
												className='apex-charts'
												data-colors='#0acf97,#fa5c7c'
											/>
										</div>
									</div>
									{/* end card body*/}
								</div>
								{/* end card */}
							</div>
							{/* end col*/}
						</div>
						{/* end row*/}
						<div className='row'>
							<div className='col-xl-4 col-lg-12'>
								<div className='card'>
									<div className='card-header d-flex justify-content-between align-items-center'>
										<h4 className='header-title'>Top Performing</h4>
										<div className='dropdown'>
											<a
												href='#'
												className='dropdown-toggle arrow-none card-drop'
												data-bs-toggle='dropdown'
												aria-expanded='false'>
												<i className='mdi mdi-dots-vertical' />
											</a>
											<div className='dropdown-menu dropdown-menu-end'>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Settings
												</a>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Action
												</a>
											</div>
										</div>
									</div>
									<div className='card-body pt-0'>
										<div className='table-responsive'>
											<table className='table table-striped table-sm table-nowrap table-centered mb-0'>
												<thead>
													<tr>
														<th>User</th>
														<th>Leads</th>
														<th>Deals</th>
														<th>Tasks</th>
														<th />
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<h5 className='font-15 mb-1 fw-normal'>
																Jeremy Young
															</h5>
															<span className='text-muted font-13'>
																Senior Sales Executive
															</span>
														</td>
														<td>187</td>
														<td>154</td>
														<td>49</td>
														<td className='table-action'>
															<a
																href='javascript: void(0);'
																className='action-icon'>
																{' '}
																<i className='mdi mdi-eye' />
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<h5 className='font-15 mb-1 fw-normal'>
																Thomas Krueger
															</h5>
															<span className='text-muted font-13'>
																Senior Sales Executive
															</span>
														</td>
														<td>235</td>
														<td>127</td>
														<td>83</td>
														<td className='table-action'>
															<a
																href='javascript: void(0);'
																className='action-icon'>
																{' '}
																<i className='mdi mdi-eye' />
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<h5 className='font-15 mb-1 fw-normal'>
																Pete Burdine
															</h5>
															<span className='text-muted font-13'>
																Senior Sales Executive
															</span>
														</td>
														<td>365</td>
														<td>148</td>
														<td>62</td>
														<td className='table-action'>
															<a
																href='javascript: void(0);'
																className='action-icon'>
																{' '}
																<i className='mdi mdi-eye' />
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<h5 className='font-15 mb-1 fw-normal'>
																Mary Nelson
															</h5>
															<span className='text-muted font-13'>
																Senior Sales Executive
															</span>
														</td>
														<td>753</td>
														<td>159</td>
														<td>258</td>
														<td className='table-action'>
															<a
																href='javascript: void(0);'
																className='action-icon'>
																{' '}
																<i className='mdi mdi-eye' />
															</a>
														</td>
													</tr>
													<tr>
														<td>
															<h5 className='font-15 mb-1 fw-normal'>
																Kevin Grove
															</h5>
															<span className='text-muted font-13'>
																Senior Sales Executive
															</span>
														</td>
														<td>458</td>
														<td>126</td>
														<td>73</td>
														<td className='table-action'>
															<a
																href='javascript: void(0);'
																className='action-icon'>
																{' '}
																<i className='mdi mdi-eye' />
															</a>
														</td>
													</tr>
												</tbody>
											</table>
										</div>{' '}
										{/* end table-responsive*/}
									</div>{' '}
									{/* end card-body*/}
								</div>{' '}
								{/* end card*/}
							</div>
							{/* end col*/}
							<div className='col-xl-4 col-lg-6'>
								<div className='card'>
									<div className='card-header d-flex justify-content-between align-items-center'>
										<h4 className='header-title'>Recent Leads</h4>
										<div className='dropdown'>
											<a
												href='#'
												className='dropdown-toggle arrow-none card-drop'
												data-bs-toggle='dropdown'
												aria-expanded='false'>
												<i className='mdi mdi-dots-vertical' />
											</a>
											<div className='dropdown-menu dropdown-menu-end'>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Settings
												</a>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Action
												</a>
											</div>
										</div>
									</div>
									<div className='card-body pt-2'>
										<div className='d-flex align-items-start'>
											<img
												className='me-3 rounded-circle'
												src='assets/images/users/avatar-2.jpg'
												width={40}
												alt='Generic placeholder image'
											/>
											<div className='w-100 overflow-hidden'>
												<span className='badge badge-warning-lighten float-end'>
													Cold lead
												</span>
												<h5 className='mt-0 mb-1'>Risa Pearson</h5>
												<span className='font-13'>richard.john@mail.com</span>
											</div>
										</div>
										<div className='d-flex align-items-start mt-3'>
											<img
												className='me-3 rounded-circle'
												src='assets/images/users/avatar-3.jpg'
												width={40}
												alt='Generic placeholder image'
											/>
											<div className='w-100 overflow-hidden'>
												<span className='badge badge-danger-lighten float-end'>
													Lost lead
												</span>
												<h5 className='mt-0 mb-1'>Margaret D. Evans</h5>
												<span className='font-13'>
													margaret.evans@rhyta.com
												</span>
											</div>
										</div>
										<div className='d-flex align-items-start mt-3'>
											<img
												className='me-3 rounded-circle'
												src='assets/images/users/avatar-4.jpg'
												width={40}
												alt='Generic placeholder image'
											/>
											<div className='w-100 overflow-hidden'>
												<span className='badge badge-success-lighten float-end'>
													Won lead
												</span>
												<h5 className='mt-0 mb-1'>Bryan J. Luellen</h5>
												<span className='font-13'>bryuellen@dayrep.com</span>
											</div>
										</div>
										<div className='d-flex align-items-start mt-3'>
											<img
												className='me-3 rounded-circle'
												src='assets/images/users/avatar-5.jpg'
												width={40}
												alt='Generic placeholder image'
											/>
											<div className='w-100 overflow-hidden'>
												<span className='badge badge-warning-lighten float-end'>
													Cold lead
												</span>
												<h5 className='mt-0 mb-1'>Kathryn S. Collier</h5>
												<span className='font-13'>collier@jourrapide.com</span>
											</div>
										</div>
										<div className='d-flex align-items-start mt-3'>
											<img
												className='me-3 rounded-circle'
												src='assets/images/users/avatar-1.jpg'
												width={40}
												alt='Generic placeholder image'
											/>
											<div className='w-100 overflow-hidden'>
												<span className='badge badge-warning-lighten float-end'>
													Cold lead
												</span>
												<h5 className='mt-0 mb-1'>Timothy Kauper</h5>
												<span className='font-13'>thykauper@rhyta.com</span>
											</div>
										</div>
										<div className='d-flex align-items-start mt-3'>
											<img
												className='me-3 rounded-circle'
												src='assets/images/users/avatar-6.jpg'
												width={40}
												alt='Generic placeholder image'
											/>
											<div className='w-100 overflow-hidden'>
												<span className='badge badge-success-lighten float-end'>
													Won lead
												</span>
												<h5 className='mt-0 mb-1'>Zara Raws</h5>
												<span className='font-13'>austin@dayrep.com</span>
											</div>
										</div>
									</div>
									{/* end card-body */}
								</div>
								{/* end card*/}
							</div>
							{/* end col */}
							<div className='col-xl-4 col-lg-6'>
								<div className='card cta-box bg-primary text-white'>
									<div className='card-body'>
										<div className='d-flex align-items-start align-items-center'>
											<div className='w-100 overflow-hidden'>
												<h2 className='mt-0 text-reset'>
													<i className='mdi mdi-bullhorn-outline' />
													&nbsp;
												</h2>
												<h3 className='m-0 fw-normal cta-box-title text-reset'>
													Enhance your <b>Campaign</b> for better outreach{' '}
													<i className='mdi mdi-arrow-right' />
												</h3>
											</div>
											<img
												className='ms-3'
												src='assets/images/svg/email-campaign.svg'
												width={120}
												alt='Generic placeholder image'
											/>
										</div>
									</div>
									{/* end card-body */}
								</div>
								{/* end card*/}
								{/* Todo*/}
								<div className='card'>
									<div className='card-header d-flex justify-content-between align-items-center'>
										<h4 className='header-title'>Todo</h4>
										<div className='dropdown float-end'>
											<a
												href='#'
												className='dropdown-toggle arrow-none card-drop'
												data-bs-toggle='dropdown'
												aria-expanded='false'>
												<i className='mdi mdi-dots-vertical' />
											</a>
											<div className='dropdown-menu dropdown-menu-end'>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Settings
												</a>
												{/* item*/}
												<a href='javascript:void(0);' className='dropdown-item'>
													Action
												</a>
											</div>
										</div>
									</div>
									<div className='todoapp mt-n2'>
										<div
											className='card-body py-0 mb-2'
											data-simplebar
											style={{ maxHeight: '243px' }}>
											<ul
												className='list-group list-group-flush todo-list'
												id='todo-list'
											/>
										</div>
									</div>{' '}
									{/* end .todoapp*/}
								</div>{' '}
								{/* end card*/}
							</div>
							{/* end col */}
						</div>
						{/* end row*/}
					</div>{' '}
					{/* container */}
				</div>{' '}
				{/* content */}
				{/* Footer Start */}
				<footer className='footer'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-md-6'>© Hyper Janak/Sunjog </div>
							<div className='col-md-6'>
								<div className='text-md-end footer-links d-none d-md-block'>
									<a href='javasc'>About</a>
									<a href='javascrip'>Support</a>
									<a href='javascrip'>Contact Us</a>
								</div>
							</div>
						</div>
					</div>
				</footer>
				{/* end Footer */}
			</div>
		</div>
	);
}

const CampaignCard = ({ name, price, percentage, chartColor }) => {
	const isIncrease = parseFloat(percentage) > 0;

	return (
		<div className='col-md-6 col-xl-3'>
			<div className='card'>
				<div className='card-body'>
					<div className='row align-items-center'>
						<div className='col-6'>
							<h5
								className='text-muted fw-normal mt-0 text-truncate'
								title={name}>
								{name}
							</h5>
							<h3 className='my-2 py-1'>{price}</h3>
							<p className='mb-0 text-muted'>
								<span
									className={
										isIncrease ? 'text-success me-2' : 'text-danger me-2'
									}
									style={{ color: `${chartColor}` }}>
									<i
										style={{ color: `${chartColor}` }}
										className={
											isIncrease
												? 'mdi mdi-arrow-up-bold'
												: 'mdi mdi-arrow-down-bold'
										}
									/>{' '}
									{percentage}%
								</span>
							</p>
						</div>
						<div className='col-6'>
							<div className='text-end'>
								<div
									id='campaign-sent-chart'
									data-colors={isIncrease ? '#00c292' : '#f46a6a'}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
