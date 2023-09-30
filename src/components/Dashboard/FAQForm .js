import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
	fetchFAQFormData,
	updateFAQ,
	deleteFAQ,
	submitFAQForm,
} from '../redux/dashboardslicers/faqFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import NavSidebar from './NavSidebar';
import { Link, useNavigate, useParams } from 'react-router-dom';

const initialState = {
	question: '',
	answer: '',
	ispaid: '',
};
export default function FaqForm() {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.faqForm.status);
	const faqData = useSelector((state) => state.faqForm.data);
	const trackerStatus = useSelector((state) => state.faqForm.tracker);

	useEffect(() => {
		dispatch(fetchFAQFormData());
	}, [trackerStatus]);

	if (status === 'loading') {
		return (
			<div className='spinner-border text-primary' role='status'>
				<span className='sr-only'>Loading...</span>
			</div>
		);
	}

	if (status === 'error') {
		return <div>Error loading FAQs.</div>;
	}

	return (
		<div>
			<div className='wrapper'>
				<NavSidebar />
				<div className='content-page'>
					<div className='content'>
						<div className='container-fluid'>
							<FAQForm />
							<div className='d-flex mt-2 flex-wrap'>
								{status === 'succeeded' &&
									faqData.map((faq) => <FaqCard key={faq._id} faq={faq} />)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const FAQForm = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();
	const faqData = useSelector((state) => state.faqForm.data);

	const [formData, setFormData] = useState({
		question: '',
		answer: '',
		ispaid: '',
	});

	useEffect(() => {
		if (id) {
			const faq = faqData.find((faq) => faq._id === id);
			setFormData({
				question: faq.question,
				answer: faq.answer,
				ispaid: faq.ispaid,
			});
		}
	}, [id, faqData]);

	const { question, answer, ispaid } = formData;

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
			question,
			answer,
			ispaid,
		};

		if (id) {
			try {
				dispatch(updateFAQ({ id, data: formDataToSend }));
				navigate('/faqform'); // Assuming you want to navigate to /faq after updating
				console.log('Data saved successfully');
			} catch (error) {
				console.error('Error saving data:', error);
			}
		} else {
			try {
				dispatch(submitFAQForm(formDataToSend));
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
					<label htmlFor='question' className='form-label'>
						Question
					</label>
					<input
						type='text'
						className='form-control'
						id='question'
						name='question'
						value={question}
						onChange={handleChange}
						placeholder='Question'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='answer' className='form-label'>
						Answer
					</label>
					<input
						type='text'
						className='form-control'
						id='answer'
						name='answer'
						value={answer}
						onChange={handleChange}
						placeholder='Answer'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='ispaid' className='form-label'>
						ispaid
					</label>
					<select
						className='form-select'
						id='ispaid'
						name='ispaid'
						value={ispaid}
						onChange={handleChange}>
						<option value='free'>Free</option>
						<option value='paid'>Paid</option>
					</select>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

const FaqCard = ({ faq }) => {
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		console.log(faq._id);
		e.preventDefault();
		dispatch(deleteFAQ(faq._id));
	};

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{faq.question}</h5>
					<p className='card-text'>{faq.answer}</p>
					<button className='btn btn-secondary'>
						<Link to={`/faqform/${faq._id}`} style={{ textDecoration: 'none' }}>
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
