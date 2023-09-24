import React, { useState } from 'react';
import NavSidebar from './NavSidebar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { postHomeSliderData } from '../redux/dashboardslicers/homeSlicer';
export default function HomeSlider() {
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
											<h1>Home Slider</h1>
											<ProductForm></ProductForm>
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
}

const ProductForm = () => {
	const [formData, setFormData] = useState({
		title: '',
		subtitle: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formData);
		// You can perform further actions here, such as sending the data to the backend
	};

	return (
		<div className='container mt-4'>
			<h2>Product Form</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='title' className='form-label'>
						Title
					</label>
					<input
						type='text'
						className='form-control'
						id='title'
						name='title'
						value={formData.title}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='subtitle' className='form-label'>
						Subtitle
					</label>
					<input
						type='text'
						className='form-control'
						id='subtitle'
						name='subtitle'
						value={formData.subtitle}
						onChange={handleChange}
						required
					/>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};
