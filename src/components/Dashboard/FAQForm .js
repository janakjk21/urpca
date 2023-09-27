import React, { useEffect, useState } from 'react';
import NavSidebar from './NavSidebar';
import { useDispatch } from 'react-redux';
import { postFAQData } from '../redux/dashboardslicers/faqFormSlice';
import { useSelector } from 'react-redux';
import {
	fetchFAQData,
	deleteFAQData,
} from '../redux/dashboardslicers/faqFormSlice';
import {
	FaEdit,
	FaHeart,
	FaLongArrowAltRight,
	FaShoppingCart,
	FaStar,
	FaTrash,
} from 'react-icons/fa';

const FAQForm = ({ data }) => {
	const dispatch = useDispatch();
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [ispaid, setIspaid] = useState(false); // Updated to boolean

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = { question, answer, ispaid }; // Updated

		const data = dispatch(postFAQData(formData));
		console.log(data);
	};

	const faqData = useSelector((state) => state.faqForm.data);
	const status = useSelector((state) => state.faqForm.status);
	const requestMade = useSelector((state) => state.faqForm.requestMade);

	useEffect(() => {
		dispatch(fetchFAQData());
	}, [requestMade]);
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
											<h1>FAQ Form</h1>
											<form onSubmit={handleSubmit}>
												<div className='mb-3'>
													<label htmlFor='question' className='form-label'>
														Question
													</label>
													<input
														type='text'
														id='question'
														className='form-control'
														value={question}
														onChange={(e) => setQuestion(e.target.value)}
													/>
												</div>

												<div className='mb-3'>
													<label htmlFor='answer' className='form-label'>
														Answer
													</label>
													<textarea
														id='answer'
														className='form-control'
														value={answer}
														onChange={(e) => setAnswer(e.target.value)}
													/>
												</div>

												{/* Dropdown menu for ispaid */}
												<div className='mb-3'>
													<label htmlFor='ispaid' className='form-label'>
														Payment Status
													</label>
													<select
														id='ispaid'
														className='form-select'
														value={ispaid}
														onChange={(e) =>
															setIspaid(e.target.value === 'true')
														} // Updated
													>
														<option value={true}> paid</option> {/* Updated */}
														<option value={false}>Unpaid</option>{' '}
														{/* Updated */}
													</select>
												</div>

												<button type='submit' className='btn btn-primary'>
													Submit
												</button>
											</form>
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
};

export default FAQForm;

const ProductCard = ({ data }) => {
	const dispatch = useDispatch();
	const handledelete = (e, id) => {
		console.log(id);
		e.preventDefault();
		console.log(id);
		const data = dispatch(deleteFAQData(id));
		console.log(data);

		console.log('delete');
	};
	// render this component when any request on faq data is made

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

										<p className='text-truncate mb-4 mb-md-0'>{item.answer}</p>
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
