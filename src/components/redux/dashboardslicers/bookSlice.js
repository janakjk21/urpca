// bookSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://hello231.onrender.com/book'; // Update the API URL for books
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;
const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchBookFormData = createAsyncThunk(
	'books/fetchBookFormData',
	async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.get(API_URL, config);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitBookForm = createAsyncThunk(
	'books/submitBookForm',
	async (formData) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.post(API_URL, formData, config);

			if (!(response.status === 200 || response.status === 201)) {
				throw new Error('Submitting data failed');
			}

			return response.data;
		} catch (error) {
			throw new Error('Submitting data failed');
		}
	}
);

export const updateBook = createAsyncThunk(
	'books/updateBook',
	async ({ id, data }) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await axios.put(`${API_URL}/${id}`, data, config);
		return response.data;
	}
);

export const deleteBook = createAsyncThunk(
	'books/deleteBook',
	async (bookId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${bookId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Deleting data failed');
		}
	}
);

const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBookFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchBookFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchBookFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitBookForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitBookForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitBookForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteBook.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteBook.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(deleteBook.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateBook.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateBook.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(updateBook.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			});
	},
});

export const selectBookForm = (state) => state.books.formData;
export const selectBookFormStatus = (state) => state.books.status;
export const selectBookFormError = (state) => state.books.error;

export default bookSlice.reducer;
