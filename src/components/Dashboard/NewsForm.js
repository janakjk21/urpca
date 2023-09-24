import React, { useState } from 'react';
import NavSidebar from './NavSidebar';
import { useDispatch } from 'react-redux';
import { UseSelector } from 'react-redux/es/hooks/useSelector';

import {
	postNewsData,
	getNewsDataById,
	fetchNewsData,
	deleteNewsData,
} from '../redux/dashboardslicers/newsFormSlice';

export default function NewsForm() {
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
											<div>
												<h1>News</h1>
												<Form></Form>
											</div>
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

function Form({ addNewsItem }) {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		category: '',
		author: '',
		title: '',
		content: '',
		paymentStatus: '',
		image: null, // Store the image file here
	});

	const { category, author, title, content, paymentStatus, image } = formData;

	const handleChange = (e) => {
		if (e.target.name === 'image') {
			setFormData({
				...formData,
				image: e.target.files[0], // Update image file
			});
		} else {
			setFormData({
				...formData,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const Data = {
			title: 'Sample Title',
			description: 'Sample description for the news item.',
			ispaid: true,
			author: 'John Doe',
			image: formData.image,
			category: 'Sample Category',
		};
		const url = 'http://localhost:3000/news';

		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(Data),
		};

		fetch(url, requestOptions)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then((data) => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});

		console.log(formData);
		// dispatch(postNewsData(formData));

		// Handle form submission here
	};
	console.log(title, category, author, content, paymentStatus, image);

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='category' className='form-label'>
					Category
				</label>
				<input
					type='text'
					id='category'
					className='form-control'
					name='category'
					value={category}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='title' className='form-label'>
					Title
				</label>
				<input
					type='text'
					id='title'
					className='form-control'
					name='title'
					value={title}
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
					id='author'
					className='form-control'
					name='author'
					value={author}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='content' className='form-label'>
					Content
				</label>

				<input
					type='text'
					id='author'
					className='form-control'
					name='content'
					value={content}
					onChange={handleChange}
					required
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
					<option value='true'>Paid</option>
					<option value='false'>Unpaid</option>
				</select>
			</div>
			<div className='mb-3'>
				<label htmlFor='image' className='form-label'>
					Image
				</label>
				<input
					type='file'
					id='image'
					className='form-control'
					name='image'
					onChange={handleChange}
					accept='image/*' // Allow only image files
				/>
			</div>

			<button type='submit' className='btn btn-primary'>
				Add News
			</button>
		</form>
	);
}
