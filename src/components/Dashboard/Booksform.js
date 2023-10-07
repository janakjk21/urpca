// BookCard.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
	fetchBookFormData,
	submitBookForm,
	updateBook,
	deleteBook,
} from '../redux/dashboardslicers/bookSlice';
import NavSidebar from './NavSidebar';
const BookCard = ({ book }) => {
	const dispatch = useDispatch();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(deleteBook(book._id));
	};

	return (
		<div className='col-md-4 mb-3'>
			<div className='card'>
				<div className='card-body'>
					<h5 className='card-title'>{book.name}</h5>
					<p className='card-text'>{book.author}</p>
					<button className='btn btn-secondary'>
						<Link
							to={`/bookform/${book._id}`}
							style={{ textDecoration: 'none' }}>
							<FaEdit /> Edit
						</Link>
					</button>
					<button className='btn btn-danger ml-2' onClick={handleDelete}>
						<FaTrash /> Delete
					</button>
				</div>
			</div>
		</div>
	);
};

const BookForm = () => {
	const bookData = useSelector((state) => state.book.data);
	const [formData, setFormData] = useState({
		name: '',
		author: '',
		price: '',
		pdfFile: null,
	});
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		if (id) {
			const book = bookData.find((book) => book._id === id);
			setFormData({
				name: book.name,
				author: book.author,
				price: book.price,
				pdfFile: book.pdfFile,
			});
		}
	}, [id]);

	const { name, author, price, pdfFile } = formData;

	const handleChange = (e) => {
		if (e.target.name === 'pdfFile') {
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
		formDataToSend.append('Name', name);
		formDataToSend.append('Author', author);
		formDataToSend.append('Price', price);
		

		formDataToSend.append('PDF', pdfFile);
		console.log(formDataToSend, 'formDataToSend');

		try {
			dispatch(submitBookForm(formDataToSend));
			console.log('Data saved successfully');
		} catch (error) {
			console.error('Error saving data:', error);
		}
	};

	return (
		<div className='container mt-2'>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label'>
						Name
					</label>
					<input
						type='text'
						className='form-control'
						id='name'
						name='name'
						value={name}
						onChange={handleChange}
						placeholder='Name'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='author' className='form-label'>
						Author
					</label>
					<input
						type='text'
						className='form-control'
						id='author'
						name='author'
						value={author}
						onChange={handleChange}
						placeholder='Author'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='price' className='form-label'>
						Price
					</label>
					<input
						type='text'
						className='form-control'
						id='price'
						name='price'
						value={price}
						onChange={handleChange}
						placeholder='Price'
					/>
				</div>
				<div className='mb-3'>
					<label htmlFor='pdfFile' className='form-label'>
						PDF File
					</label>
					<input
						type='file'
						className='form-control'
						id='pdfFile'
						name='pdfFile'
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

// Books.js

const Books = () => {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.book.status);
	const bookData = useSelector((state) => state.book.data);
	const trackerStatus = useSelector((state) => state.book.tracker);

	useEffect(() => {
		dispatch(fetchBookFormData());
	}, [trackerStatus]);

	if (status === 'loading') {
		return (
			<div className='spinner-border text-primary' role='status'>
				<span className='sr-only'>Loading...</span>
			</div>
		);
	}

	if (status === 'error') {
		return <div>Error loading books.</div>;
	}

	return (
		<div>
			<div className='wrapper'>
				<NavSidebar></NavSidebar>
				{/* Include your navigation sidebar if needed */}
			</div>
			<div className='content-page'>
				<div className='content'>
					<div className='container-fluid'>
						<BookForm />
						<div className='d-flex mt-2 flex-wrap'>
							{status === 'succeeded' &&
								bookData.map((book) => <BookCard key={book._id} book={book} />)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Books;
