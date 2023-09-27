import React, { useEffect, useState } from 'react';
import NavSidebar from './NavSidebar';
import { useDispatch } from 'react-redux';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { FaTrash, FaEdit } from 'react-icons/fa';

import {
	fetchServiceFormData,
	submitServiceForm,
} from '../redux/dashboardslicers/servicesSlice';

export default function Services() {
	const dispatch = useDispatch();
	const faqData = useSelector((state) => state.service.data);
	const status = useSelector((state) => state.service.status);
	useEffect(() => {
		dispatch(fetchServiceFormData());
	}, [dispatch]);
	console.log(faqData, 'this is data ');
	return (
		<div>
			<div className='wrapper'>
				<div className='wrapper'>
					<NavSidebar></NavSidebar>
					<ServiceDataForm></ServiceDataForm>
					{status === 'succeeded' ? (
						<ProductCard data={faqData} />
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>
		</div>
	);
}

const ServiceDataForm = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		image: '', // Changed from innerImage1Src
		additionalDescription: '',
		category: '',
		payment: 'true',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setFormData({
					...formData,
					image: e.target.result, // Changed from inperImage1Src
				});
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		// const formData = new FormData();
		// formData.append('title', title);
		// formData.append('description', description);
		// formData.append('category', category);
		// formData.append('payment', payment);
		// formData.append('aditionalDes', additionalDescription);
		// formData.append('image', image);
		dispatch(submitServiceForm(formData));
		console.log(formData);
	};
	return (
		<div className='content-page'>
			<div className='content'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-10' style={{ padding: '10px' }}>
							<div className='card'>
								<div className='card-body'>
									<div>
										<h1>Service Form</h1>
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
													required
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
													rows='4'
													required
												/>
											</div>

											<div className='mb-3'>
												<label
													htmlFor='additionalDescription'
													className='form-label'>
													Additional Description
												</label>
												<textarea
													id='additionalDescription'
													name='additionalDescription'
													className='form-control'
													value={formData.additionalDescription}
													onChange={handleChange}
													rows='4'
												/>
											</div>
											<div className='mb-3'>
												<label htmlFor='category' className='form-label'>
													category
												</label>
												<textarea
													id='category'
													name='category'
													className='form-control'
													value={formData.additionalDescription}
													onChange={handleChange}
													rows='4'
												/>
											</div>
											<div className='mb-3'>
												<label htmlFor='payment' className='form-label'>
													Payment Status
												</label>
												<select
													id='payment'
													className='form-select'
													name='payment'
													value={formData.payment}
													onChange={handleChange} // Updated
												>
													<option value={true}> paid</option> {/* Updated */}
													<option value={false}>Unpaid</option> {/* Updated */}
												</select>
											</div>
											<div className='mb-3'>
												<label htmlFor='image' className='form-label'>
													Image Source
												</label>
												<input
													type='file'
													id='image'
													name='image'
													className='form-control'
													accept='image/*'
													onChange={handleImageUpload} // Updated the onChange handler
												/>
												{formData.image && (
													<img
														src={formData.image}
														alt='Uploaded Image'
														style={{ marginTop: '10px', maxWidth: '100%' }}
													/>
												)}
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
	);
};

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
