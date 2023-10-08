import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';
// Import your slice actions for fetching, updating, deleting, and submitting data

// Assuming these actions are available in the specified paths
import {
	fetchHomeFormData,
	deleteHome,
	submitHomeForm,
	updateHome,
} from '../redux/dashboardslicers/homeSlicer';
import { InfinitySpin } from 'react-loader-spinner';

const HomeSliderForm = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const homeSliderData = useSelector((state) => state.home.data);

	const [formData, setFormData] = useState({
		title: '',
		description: '',
	});

	useEffect(() => {
		if (id) {
			const slider = homeSliderData.find((slider) => slider._id === id);
			setFormData({
				title: slider.title,
				description: slider.description,
			});
		}
	}, [id, homeSliderData]);

	const { title, description } = formData;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formDataToSend = {
			title,
			description,
		};
		console.log(formDataToSend);

		try {
			if (id) {
				dispatch(updateHome({ id, data: formDataToSend }));
				navigate('/home-slider'); // Assuming you want to navigate to /home-slider after updating
				console.log('Data updated successfully');
			} else {
				dispatch(submitHomeForm(formDataToSend));
				console.log('Data submitted successfully');
			}
		} catch (error) {
			console.error('Error saving data:', error);
		}
	};

	return (
		<div className='container mt-2'>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='header' className='form-label'>
						Header
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
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

const HomeSliderCard = ({ slider }) => {
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteHome(slider._id));
	};

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{slider.title}</h5>
					<p className='card-text'>{slider.description}</p>
					<button className='btn btn-secondary'>
						<Link
							to={`/home-slider/${slider._id}`}
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

export default function HomeSliderFormPage() {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.home.status);
	const homeSliderData = useSelector((state) => state.home.data);
	const tracker = useSelector((state) => state.home.tracker);
	console.log(homeSliderData);

	useEffect(() => {
		dispatch(fetchHomeFormData());
	}, [tracker]);

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
		return <div>Error loading Home Slider data.</div>;
	}

	return (
		<div>
			<div className='wrapper'>
				<NavSidebar />
				<div className='content-page'>
					<div className='content'>
						<div className='container-fluid'>
							<HomeSliderForm />
							<div className='d-flex flex-wrap'>
								{status === 'succeeded' &&
									homeSliderData.map((slider) => (
										<HomeSliderCard key={slider._id} slider={slider} />
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
