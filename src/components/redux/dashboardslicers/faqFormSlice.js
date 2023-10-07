// faqFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/faq'; // Changed the API URL to /faq
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;
// take the token data from local storage

const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchFAQFormData = createAsyncThunk(
	'faqs/fetchFAQFormData',
	async () => {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitFAQForm = createAsyncThunk(
	'faqs/submitFAQForm',
	async (formData) => {
		console.log(formData);
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.post(API_URL, formData, config);
			console.log(response);
			if (!(response.status === 200 || response.status === 201)) {
				throw new Error('Submitting data failed');
			}
			return response.data;
		} catch (error) {
			throw new Error('Submitting data failed');
		}
	}
);

export const updateFAQ = createAsyncThunk(
	'faqs/updateFAQ',
	async ({ id, data }) => {
		console.log(id, data);
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await axios.put(`${API_URL}/${id}`, data, config);
		return response.data;
	}
);

export const deleteFAQ = createAsyncThunk('faqs/deleteFAQ', async (faqid) => {
	try {
		const response = await axios.delete(`${API_URL}/${faqid}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return response.data;
	} catch (error) {
		throw new Error('Deleting data failed');
	}
});
const faqFormSlice = createSlice({
	name: 'faqs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFAQFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchFAQFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchFAQFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitFAQForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitFAQForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitFAQForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteFAQ.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteFAQ.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.tracker = 'success deleted';
			})
			.addCase(deleteFAQ.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateFAQ.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateFAQ.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(updateFAQ.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			});
	},
});

export const selectFAQForm = (state) => state.faqs.formData;
export const selectFAQFormStatus = (state) => state.faqs.status;
export const selectFAQFormError = (state) => state.faqs.error;

export default faqFormSlice.reducer;
