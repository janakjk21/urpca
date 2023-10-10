import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	submitIndustryForm,
	deleteIndustry,
	updateIndustry,
	fetchIndustryFormData,
} from '../redux/dashboardslicers/industriesFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

const initialState = {
	title: '',
	description: '',
	category: '',
	payment: '',
	additionalDes: '',
	image: null,
};

export default function Industries() {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.industry.status);
	const taxIndustryData = useSelector((state) => state.industry.data);
	const trackerStatus = useSelector((state) => state.industry.tracker);

	const [taxIndustryId, setTaxIndustryId] = useState('');

	useEffect(() => {
		dispatch(fetchIndustryFormData());
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
		return <div>Error loading tax industries.</div>;
	}

	return (
		<div>
			<div className='wrapper'>
				<NavSidebar></NavSidebar>
				<div className='content-page'>
					<div className='content'>
						<div className='container-fluid'>
							<TaxIndustryForm />
							<div className='d-flex mt-2 flex-wrap'>
								{status === 'succeeded' &&
									taxIndustryData &&
									taxIndustryData.map((taxIndustry) => (
										<TaxIndustryCard
											key={taxIndustry._id}
											taxIndustry={taxIndustry}
										/>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const TaxIndustryForm = () => {
	const taxIndustryData = useSelector((state) => state.industry.data);
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		category: '',
		payment: '',
		additionalDes: '',
		image: null,
	});
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const taxIndustry = taxIndustryData.find(
				(taxIndustry) => taxIndustry._id === id
			);
			setFormData({
				title: taxIndustry.title,
				description: taxIndustry.description,
				category: taxIndustry.category,
				payment: taxIndustry.payment,
				additionalDes: taxIndustry.additionalDes,
				image: taxIndustry.image,
			});
		}
	}, [id]);

	const { title, description, category, payment, additionalDes, image } =
		formData;

	const handleChange = (e) => {
		if (e.target.name === 'image') {
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

		const formDataToSend = new FormData();
		formDataToSend.append('title', title);
		formDataToSend.append('description', description);
		formDataToSend.append('category', category);
		formDataToSend.append('payment', payment);
		formDataToSend.append('additionalDes', additionalDes);
		formDataToSend.append('image', image);

		if (id) {
			try {
				dispatch(updateIndustry({ id, data: formDataToSend }));
				navigate('/industryform'); // Change this to the appropriate route
				console.log('Data saved successfully');
			} catch (error) {
				console.error('Error saving data:', error);
			}
		} else {
			try {
				dispatch(submitIndustryForm(formDataToSend));
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
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

const TaxIndustryCard = ({ taxIndustry }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteIndustry(taxIndustry._id));
	};

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{taxIndustry.title}</h5>
					<p className='card-text'>{taxIndustry.description}</p>
					<button className='btn btn-secondary'>
						<Link
							to={`/industryform/${taxIndustry._id}`}
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
