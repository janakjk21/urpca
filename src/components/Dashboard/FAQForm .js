import React, { useState } from 'react';
import NavSidebar from './NavSidebar';

const FAQForm = ({ data }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [paymentStatus, setPaymentStatus] = useState(''); // State for the dropdown selection

	const handleSubmit = (e) => {
		e.preventDefault();

		// Do something with title, content, and paymentStatus here

		setTitle('');
		setContent('');
		setPaymentStatus('');
	};

	return (
		<div className='wrapper'>
			<NavSidebar></NavSidebar>
			<div className='content-page'>
				<div className='content'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-10' style={{ padding: '10px' }}>
								<div className='card'>
									<div className='card-body'>
										<div>
											<h1>FAQ Form</h1>
											<form onSubmit={handleSubmit}>
												<div className='mb-3'>
													<label htmlFor='title' className='form-label'>
														Title
													</label>
													<input
														type='text'
														id='title'
														className='form-control'
														value={title}
														onChange={(e) => setTitle(e.target.value)}
													/>
												</div>

												<div className='mb-3'>
													<label htmlFor='content' className='form-label'>
														Content
													</label>
													<textarea
														id='content'
														className='form-control'
														value={content}
														onChange={(e) => setContent(e.target.value)}
													/>
												</div>

												{/* Dropdown menu for payment status */}
												<div className='mb-3'>
													<label htmlFor='paymentStatus' className='form-label'>
														Payment Status
													</label>
													<select
														id='paymentStatus'
														className='form-select'
														value={paymentStatus}
														onChange={(e) => setPaymentStatus(e.target.value)}>
														<option value=''>Select Payment Status</option>
														<option value='paid'>Paid</option>
														<option value='unpaid'>Unpaid</option>
													</select>
												</div>

												<button type='submit' className='btn btn-primary'>
													Submit
												</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQForm;
