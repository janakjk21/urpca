import React, { useEffect, useState } from 'react';
import NavSidebar from './NavSidebar';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import {
	postNewsData,
	getNewsDataById,
	fetchNewsData,
	deleteNewsData,
} from '../redux/dashboardslicers/newsFormSlice';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function NewsForm() {
	const dispatch = useDispatch();
	const faqData = useSelector((state) => state.news.data);
	const status = useSelector((state) => state.news.status);

	console.log(faqData);
	useEffect(() => {
		dispatch(fetchNewsData());
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
											<div>
												<h1>News</h1>
												<Form></Form>
												{status === 'succeeded' ? (
													<ProductCard data={faqData} />
												) : (
													<div>Loading...</div>
												)}
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

function Form() {
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

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFileChange = (e) => {
		setFormData({
			...formData,
			image: e.target.files[0],
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			title: formData.title,
			category: formData.category,
			author: formData.author,
			paymentStatus: formData.paymentStatus,
			image: formData.image,
		};

		dispatch(postNewsData(data));
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
					onChange={handleInputChange}
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
					onChange={handleInputChange}
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
					onChange={handleInputChange}
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
					onChange={handleInputChange}
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
					onChange={handleInputChange}>
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
					onChange={handleFileChange}
					accept='image/*' // Allow only image files
				/>
			</div>

			<button type='submit' className='btn btn-primary'>
				Add News
			</button>
		</form>
	);
}

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
										<h5>{item.title}</h5>

										<p className='text-truncate mb-4 mb-md-0'>
											{item.description}
										</p>
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
