import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
	submitInvestNepalForm,
	updateInvestNepal,
	deleteInvestNepal,
	fetchInvestNepalFormData,
} from '../redux/dashboardslicers/InvestNepalSlicer';

const initialState = {
	title: '',
	description: '',
	category: '',
	payment: '',
	additionalDes: '',

	image: null,
};

const InvestNepalForm = () => {
	const investNepalData = useSelector((state) => state.investnepal.data);
	const [formData, setFormData] = useState(initialState);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const investNepal = investNepalData.find((item) => item._id === id);
			setFormData({
				title: investNepal.title,
				description: investNepal.description,
				category: investNepal.category,
				payment: investNepal.payment,
				additionalDes: investNepal.additionalDes,
			});
		}
	}, [id, investNepalData]);

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
				dispatch(updateInvestNepal({ id, data: formDataToSend }));
				navigate('/investnepalform'); // Change this to the appropriate route
				console.log('Data saved successfully');
			} catch (error) {
				console.error('Error saving data:', error);
			}
		} else {
			try {
				dispatch(submitInvestNepalForm(formDataToSend));
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

const InvestNepalCard = ({ investNepal }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteInvestNepal(investNepal._id));
	};

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{investNepal.title}</h5>
					<p className='card-text'>{investNepal.description}</p>
					<button className='btn btn-secondary'>
						<Link
							to={`/investnepalform/${investNepal._id}`}
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

const InvestNepal = () => {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.investnepal.status);
	const investNepalData = useSelector((state) => state.investnepal.data);
	const trackerStatus = useSelector((state) => state.investnepal.tracker);

	useEffect(() => {
		dispatch(fetchInvestNepalFormData());
	}, [trackerStatus]);

	if (status === 'loading') {
		return (
			<div className='spinner-border text-primary' role='status'>
				<span className='sr-only'>Loading...</span>
			</div>
		);
	}

	if (status === 'error') {
		return <div>Error loading investNepal data.</div>;
	}
	console.log(investNepalData, status);

	return (
		<div>
			<div className='wrapper'>
				<NavSidebar />
				<div className='content-page'>
					<div className='content'>
						<div className='container-fluid'>
							<InvestNepalForm />
							<div className='d-flex mt-2 flex-wrap'>
								{status === 'succeeded' &&
									investNepalData.map((investNepal) => (
										<InvestNepalCard
											key={investNepal._id}
											investNepal={investNepal}
										/>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InvestNepal;
