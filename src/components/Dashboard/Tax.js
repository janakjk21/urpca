import React, { useEffect, useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import NavSidebar from './NavSidebar';
import {
	postWorkData,
	deleteWorkData,
	fetchWorkData,
} from '../redux/dashboardslicers/taxFormSlice';
import { useDispatch, useSelector } from 'react-redux';
const Tax = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		name: '',
		description: '',
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

		// Reset the form after submission
		const data = dispatch(postWorkData(formData));
		console.log(data);
		console.log('Form data submitted:', formData);
	};

	useEffect(() => {
		const data = fetchWorkData();
		console.log(data, 'this is data ');
	}, [dispatch]);

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

const ProductCard = ({ data }) => {
	const dispatch = useDispatch();
	const handledelete = (e, id) => {
		console.log(id);
		e.preventDefault();

		const data = dispatch(deleteFAQData(id));
		console.log(data);

		console.log('delete');
	};
	return (
		<>
			{' '}
			{data.map((item, index) => (
				<div className='row justify-content-center ' key={index}>
					<div className='col-md-12 col-xl-10'>
						<div className='card shadow-0 border rounded-3'>
							<div className='card-body'>
								<div className='row'>
									<div className='col-md-9 col-lg-9 col-xl-9'>
										<h5>{item.question}</h5>

										<p className='text-truncate mb-4 mb-md-0'>{item.answer}</p>
									</div>
									<div className='col-md-4 col-lg-3 col-xl-3 border-sm-start-none border-start'>
										<div className='d-flex flex mt-4'>
											<button
												className='btn btn-danger btn-sm m-2 '
												type='button'
												onClick={(e) => {
													handledelete(e, item._id);
												}}>
												<FaTrash />
											</button>
											<button className='btn btn-primary btn-sm' type='button'>
												<FaEdit />{' '}
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};
