import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	fetchNewsFormData,
	deleteNews,
	updateNews,
	submitNewsForm,
} from '../redux/dashboardslicers/newsFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function NewsForms() {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.news.status);
	const newsData = useSelector((state) => state.news.data);
	const trackerStatus = useSelector((state) => state.news.tracker);

	console.log(trackerStatus, 'trackerStatus');

	useEffect(() => {
		dispatch(fetchNewsFormData());
	}, [trackerStatus]);

	if (status === 'loading') {
		return (
			<div class='spinner-border text-primary' role='status'>
				<span class='sr-only'>Loading...</span>
			</div>
		);
	}

	if (status === 'error') {
		return <div>Error loading news.</div>;
	}

	return (
		<div>
			<div className='wrapper'>
				<NavSidebar />
				<div className='content-page'>
					<div className='content'>
						<div className='container-fluid'>
							<NewsFormComponent />
							<div className='d-flex mt-2 flex-wrap'>
								{' '}
								{status === 'succeeded' &&
									newsData.map((news) => (
										<NewsCard key={news._id} news={news} />
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const NewsFormComponent = () => {
	const newsData = useSelector((state) => state.news.data);
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		image: null,
		payment: 'paid',
		category: '',
		additionalDes: '',
	});
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const news = newsData.find((news) => news._id === id);
			setFormData({
				title: news.title,
				description: news.description,
				payment: news.isPaid ? 'paid' : 'unpaid',
				category: news.category,
				additionalDes: news.additionalDes,
			});
		}
	}, [id]);

	const { title, description, image, payment, category, additionalDes } =
		formData;

	const handleChange = (e) => {
		if (e.target.name === 'image') {
			// Handle image separately
			setFormData({
				...formData,
				[e.target.name]: e.target.files[0],
			});
		} else {
			const { name, value } = e.target;
			setFormData({
				...formData,
				[name]: value,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData, 'formData');
		const formDataToSend = new FormData();
		formDataToSend.append('title', title);
		formDataToSend.append('description', description);
		formDataToSend.append('image', image);
		formDataToSend.append('payment', payment);
		formDataToSend.append('category', category);
		formDataToSend.append('additionalDes', additionalDes);
		console.log(formDataToSend, 'formDataToSend');
		if (id) {
			try {
				dispatch(updateNews({ id, data: formDataToSend }));
				navigate('/newsform');
				console.log('Data saved successfully');
			} catch (error) {
				console.error('Error saving data:', error);
			}
		} else {
			try {
				dispatch(submitNewsForm(formData));
				console.log('Data saved successfully');
			} catch (error) {
				console.error('Error saving data:', error);
			}
		}
	};

	return (
		<div className='container mt-2'>
			<form onSubmit={handleSubmit}>
				{/* Form fields */}
				<div className='mb-3'>
					<label htmlFor='title' className='form-label'>
						Title
					</label>
					<input
						type='text'
						className='form-control'
						id='title'
						name='title'
						value={title}
						onChange={handleChange}
						placeholder='Title'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>
						Description
					</label>
					<input
						type='text'
						className='form-control'
						id='description'
						name='description'
						value={description}
						onChange={handleChange}
						placeholder='Description'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='category' className='form-label'>
						Category
					</label>
					<input
						type='text'
						className='form-control'
						id='category'
						name='category'
						value={category}
						onChange={handleChange}
						placeholder='Category'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='additionalDes' className='form-label'>
						additionalDes
					</label>
					<input
						type='text'
						className='form-control'
						id='additionalDes'
						name='additionalDes'
						value={additionalDes}
						onChange={handleChange}
						placeholder='Category'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='payment' className='form-label'>
						Payment
					</label>
					<select
						className='form-select'
						id='payment'
						name='payment'
						value={payment}
						onChange={handleChange}>
						<option value='paid'>Paid</option>
						<option value='unpaid'>Unpaid</option>
					</select>
				</div>
				<div className='mb-3'>
					<label htmlFor='image' className='form-label'>
						Image
					</label>
					<input
						type='file'
						className='form-control'
						id='image'
						name='image'
						onChange={handleChange}
					/>
					{image && (
						<img
							src={URL.createObjectURL(image)}
							alt='Selected'
							className='mt-2'
							style={{ width: '100px' }}
						/>
					)}
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

const NewsCard = ({ news }) => {
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteNews(news._id));
	};

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{news.title}</h5>
					<p className='card-text'>{news.description}</p>
					<p className='card-text'>Category: {news.category}</p>
					<p className='card-text'>
						Payment: {news.isPaid ? 'Paid' : 'Unpaid'}
					</p>
					<button className='btn btn-secondary'>
						<Link
							to={`/newsform/${news._id}`}
							style={{ textDecoration: 'none' }}>
							<FaEdit /> Edit
						</Link>
					</button>
					<button
						className='btn btn-danger ml-2'
						onClick={(e) => {
							handleDelete(e);
						}}>
						<FaTrash /> Delete
					</button>
				</div>
			</div>
		</div>
	);
};
