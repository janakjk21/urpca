import React, { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import NavSidebar from './NavSidebar';

const Tax = () => {
	const [formData, setFormData] = useState({
		id: 1,
		title: '',
		description: '',
		projectDate: '',
		client: '',
		imageFile: null,
		paymentStatus: '',
	});

	const handleChange = (e) => {
		const { name, value, type } = e.target;
		if (type === 'file') {
			const imageFile = e.target.files[0];
			setFormData((prevData) => ({
				...prevData,
				imageFile,
			}));
		} else {
			setFormData((prevData) => ({
				...prevData,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// You would normally send formData and imageFile to your backend here
		console.log('Form data submitted:', formData);

		// Reset the form after submission
		setFormData({
			id: 1,
			title: '',
			description: '',
			projectDate: '',
			client: '',
			imageFile: null,
		});
	};

	return (
		<div className='wrapper'>
			<div className='wrapper'>
				<NavSidebar></NavSidebar>
				<div className='content-page'>
					<div className='content'>
						<div className='container-fluid'>
							<div className='row'>
								<div className='col-10' style={{ padding: '10px' }}>
									<div className='card'>
										<div className='card-body'>
											<h1>Tax Form</h1>
											<form onSubmit={handleSubmit}>
												<div className='mb-3'>
													<label htmlFor='title' className='form-label'>
														Title
													</label>
													<input
														type='text'
														id='title'
														name='title'
														className='form-control'
														value={formData.title}
														onChange={handleChange}
													/>
												</div>

												<div className='mb-3'>
													<label htmlFor='description' className='form-label'>
														Description
													</label>
													<textarea
														id='description'
														name='description'
														className='form-control'
														value={formData.description}
														onChange={handleChange}
													/>
												</div>

												<div className='mb-3'>
													<label htmlFor='paymentStatus' className='form-label'>
														Payment Status
													</label>
													<select
														id='paymentStatus'
														className='form-select'
														value={formData.paymentStatus}
														onChange={handleChange}>
														<option value=''>Select Payment Status</option>
														<option value='paid'>Paid</option>
														<option value='unpaid'>Unpaid</option>
													</select>
												</div>
												<div className='mb-3'>
													<label htmlFor='imageFile' className='form-label'>
														Image Upload
													</label>
													<input
														type='file'
														id='imageFile'
														name='imageFile'
														className='form-control'
														onChange={handleChange}
													/>
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
			<div></div>
		</div>
	);
};

export default Tax;
