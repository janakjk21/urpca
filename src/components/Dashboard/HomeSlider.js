import React, { useEffect, useState } from 'react';
import NavSidebar from './NavSidebar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	fetchHomeSliderData,
	postHomeSliderData,
	deleteHomeSliderData,
} from '../redux/dashboardslicers/homeSlicer';
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function HomeSlider() {
	const dispatch = useDispatch();
	const faqData = useSelector((state) => state.home.data);
	const status = useSelector((state) => state.home.status);

	useEffect(() => {
		dispatch(fetchHomeSliderData());
	}, [dispatch]);
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
				{status === 'succeeded' ? (
					<ProductCard data={faqData} />
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
}

const ProductForm = () => {
	const dispatch = useDispatch();
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
		const data = { title: formData.title, subtitle: formData.subtitle };
		console.log(formData);

		dispatch(postHomeSliderData(data));
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

const ProductCard = ({ data }) => {
	const dispatch = useDispatch();
	const handledelete = (e, id) => {
		console.log(id);
		e.preventDefault();

		const data = dispatch(deleteHomeSliderData(id));
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
										<h5>{item.question}</h5>

										<p className='text-truncate mb-4 mb-md-0'>{item.title}</p>
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
