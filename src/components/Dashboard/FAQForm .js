import React, { useState } from 'react';
import NavSidebar from './NavSidebar';
import { useDispatch } from 'react-redux';
import { postFAQData } from '../redux/dashboardslicers/faqFormSlice';

const FAQForm = ({ data }) => {
	const dispatch = useDispatch();
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [ispaid, setIspaid] = useState(false); // Updated to boolean

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = { question, answer, ispaid }; // Updated

		dispatch(postFAQData(formData));
	};

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
			</div>
		</div>
	);
};

export default FAQForm;
