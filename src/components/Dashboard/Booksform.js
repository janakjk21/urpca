import React from 'react';
import { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import NavSidebar from './NavSidebar';
import axios from 'axios';
import { async } from 'regenerator-runtime';

export default function Booksform() {
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
											<h1>Book form </h1>
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
		name: '',
		author: '',
		price: '',
		discountPrice: '',
		discountPercent: '',
		description: '',
		imageUrl: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onload = (e) => {
			setFormData((prevData) => ({
				...prevData,
				imageUrl: e.target.result,
			}));
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		const taxData = {
			name: formData.name,
			author: formData.author,
			price: formData.price,
			image: formData.imageUrl,
		};
		try {
			const response = await axios.post('http://localhost:3000/book', taxData);
			console.log('Tax record created:', response.data);
		} catch (error) {
			console.error('Error creating tax record:', error);
		}
		console.log('Form data submitted:', formData);
		console.log(formData);
		// You can perform further actions here, such as sending the data to the backend
	};

	return (
		<div className='container mt-4'>
			<h2>Product Form</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						className='form-control'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='author' className='form-label'>
						Author
					</label>
					<input
						type='text'
						className='form-control'
						id='author'
						name='author'
						value={formData.author}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='price' className='form-label'>
						Price
					</label>
					<input
						type='number'
						className='form-control'
						id='price'
						name='price'
						value={formData.price}
						onChange={handleChange}
						required
					/>
				</div>
				{/* Add similar input fields for discountPrice, discountPercent, description */}
				<div className='mb-3'>
					<label htmlFor='imageUrl' className='form-label'>
						Image
					</label>
					<input
						type='file'
						className='form-control'
						id='imageUrl'
						name='imageUrl'
						accept='image/*'
						onChange={handleImageUpload}
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
