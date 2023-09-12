import React, { useState } from 'react';
import NavSidebar from './NavSidebar';

export default function InvestNepalform() {
	return (
		<div className='wrapper'>
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
												<h1>News</h1>
												<Form></Form>
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
}

function Form({ addNewsItem }) {
	const [formData, setFormData] = useState({
		category: '',
		author: '',
		date: '',
		title: '',
		content: '',
		quote: {
			text: '',
			author: '',
		},
	});

	const { category, author, date, title, content, quote } = formData;

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleContentChange = (e, index) => {
		const updatedContent = [...content];
		updatedContent[index] = e.target.value;
		setFormData({
			...formData,
			content: updatedContent,
		});
	};

	const handleQuoteChange = (e) => {
		setFormData({
			...formData,
			quote: {
				...quote,
				[e.target.name]: e.target.value,
			},
		});
	};

	const addContentField = () => {
		setFormData({
			...formData,
			content: [...content, ''],
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		// Handle form submission here
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='category' className='form-label'>
					Category
				</label>
				<input
					type='text'
					id='category'
					className='form-control'
					name='category'
					value={category}
					onChange={handleChange}
					required
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='title' className='form-label'>
					Title
				</label>
				<input
					type='text'
					id='title'
					className='form-control'
					name='title'
					value={title}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='author' className='form-label'>
					Author
				</label>
				<input
					type='text'
					id='author'
					className='form-control'
					name='author'
					value={author}
					onChange={handleChange}
					required
				/>
			</div>

			<div className='mb-3'>
				<label htmlFor='content' className='form-label'>
					Content
				</label>
				<input
					type='text'
					id='author'
					className='form-control'
					name='author'
					value={content}
					onChange={handleChange}
					required
				/>
			</div>

			<button type='submit' className='btn btn-primary'>
				Add News
			</button>
		</form>
	);
}
