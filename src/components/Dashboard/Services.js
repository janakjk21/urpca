import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	submitServiceForm,
	fetchServiceFormData,
	deleteService,
	updateService,
} from '../redux/dashboardslicers/servicesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

const initialState = {
	title: '',
	description: '',
	category: '',
	payment: '',
	additionalDes: '',
	email: '',
	image: null,
};
export default function Services() {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.service.status);
	const serviceData = useSelector((state) => state.service.data);
	const trackerStatus = useSelector((state) => state.service.tracker);

	const [serviceid, setServiceid] = useState('');
	console.log(trackerStatus, 'trackerStatus');

	useEffect(() => {
		dispatch(fetchServiceFormData());
	}, [trackerStatus]);

	if (status === 'loading') {
		return (
			<InfinitySpin
				style={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '200px', // Adjust width as needed
					color: '#536DE6', // Change the color to #536DE6
				}}
			/>
		);
	}

	if (status === 'error') {
		return <div>Error loading services.</div>;
	}

	// const titles = serviceData.map((service) => service.title);
	return (
		<div>
			<div className='wrapper'>
				<NavSidebar></NavSidebar>
				<div className='content-page'>
					<div className='content'>
						<div className='container-fluid'>
							<YourComponent />
							<div className='d-flex mt-2 flex-wrap'>
								{' '}
								{status === 'succeeded' &&
									serviceData.map((service) => (
										<ServiceCard key={service._id} service={service} />
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const YourComponent = () => {
	const serviceData = useSelector((state) => state.service.data);
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		category: '',
		payment: '',
		additionalDes: '',
		email: '',
		image: null,
	});
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const service = serviceData.find((service) => service._id === id);
			setFormData({
				title: service.title,
				description: service.description,
				category: service.category,
				payment: service.payment,
				additionalDes: service.additionalDes,
			});
		}
	}, [id]);

	const { title, description, category, payment, additionalDes, email, image } =
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
	console.log(formData, 'formData');
	const handleSubmit = async (e) => {
		e.preventDefault();

		const formDataToSend = new FormData();
		formDataToSend.append('title', title);
		formDataToSend.append('description', description);
		formDataToSend.append('category', category);
		formDataToSend.append('payment', payment);
		formDataToSend.append('additionalDes', additionalDes);

		formDataToSend.append('image', image);
		console.log(formDataToSend, FormData, 'formDataToSend');

		if (id) {
			try {
				dispatch(updateService({ id, data: formDataToSend }));
				redirect('/serviceform');
				console.log('Data saved successfully');
			} catch (error) {
				console.error('Error saving data:', error);
			}
		} else {
			try {
				dispatch(submitServiceForm(formData));
				console.log('Data saved successfully');
			} catch (error) {
				console.error('Error saving data:', error);
			}
		}
	};

	return (
		<div className='container mt-2'>
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
					<label htmlFor='payment' className='form-label'>
						Payment
					</label>
					<select
						className='form-select'
						id='payment'
						name='payment'
						value={payment}
						onChange={handleChange}>
						<option value='paid'>Content type</option>
						<option value='paid'>Paid</option>
						<option value='unpaid'>Unpaid</option>
					</select>
				</div>
				<div className='mb-3'>
					<label htmlFor='additionalDes' className='form-label'>
						Additional Description
					</label>
					<input
						type='text'
						className='form-control'
						id='additionalDes'
						name='additionalDes'
						value={additionalDes}
						onChange={handleChange}
						placeholder='Additional Description'
					/>
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

const ServiceCard = ({ service }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteService(service._id));
	};
	console.log(service,"this is service");
	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{service.title}</h5>
					<p className='card-text'>{service.description}</p>
					<img src={`https://hello231.onrender.com${service.image}`} />
					<button className='btn btn-secondary'>
						<Link
							to={`/serviceform/${service._id}`}
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
