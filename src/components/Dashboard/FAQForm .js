import React, { useState } from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';

const FAQForm = ({ data }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		setTitle('');
		setContent('');
	};

	console.log(title, content);
	return (
		<div className='wrapper'>
			<div className='wrapper'>
				<Nav></Nav>
				<Sidebar></Sidebar>
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
														<label htmlFor='title' className='form-label'>
															Title
														</label>
														<input
															type='text'
															id='title'
															className='form-control'
															value={title}
															onChange={(e) => setTitle(e.target.value)}
														/>
													</div>

													<div className='mb-3'>
														<label htmlFor='content' className='form-label'>
															Content
														</label>
														<textarea
															id='content'
															className='form-control'
															value={content}
															onChange={(e) => setContent(e.target.value)}
														/>
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
		</div>
	);
};

export default FAQForm;
