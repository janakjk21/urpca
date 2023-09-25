import React, { useState } from 'react';
import NavSidebar from './NavSidebar';
import { useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';

import {
	fetchServiceFormData,
	submitServiceForm,
} from '../redux/dashboardslicers/servicesSlice';

const initialFormData = {
	id: 2, // You can set the ID if it's fixed or generate dynamically
	title: 'finance',
	description: '',
	imageSrc: '',
	imageAlt: 'Service Image',
	additionalDescription: '',
	innerImage1Src: '',

	subtitle: 'we do the bestt',
};

export default function Services() {
	return (
		<div>
			<div className='wrapper'>
				<div className='wrapper'>
					<NavSidebar></NavSidebar>
					<ServiceDataForm></ServiceDataForm>
				</div>
			</div>
		</div>
	);
}

const ServiceDataForm = () => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleImageUpload = (event, propertyName) => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				setFormData({
					...formData,
					[propertyName]: e.target.result,
				});
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const data = {
			title: formData.title,
			description: formData.description,
			additionalDescription: formData.additionalDescription,
			Image: formData.innerImage1Src,
		};

		dispatch(submitServiceForm(data));
		// Handle form submission here, e.g., send data to a server
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
												<label htmlFor='innerImage1Src' className='form-label'>
													Inner Image 1 Source
												</label>
												<input
													type='file'
													id='innerImage1Src'
													name='innerImage1Src'
													className='form-control'
													accept='image/*'
													onChange={(e) =>
														handleImageUpload(e, 'innerImage1Src')
													}
												/>
												{formData.innerImage1Src && (
													<img
														src={formData.innerImage1Src}
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
