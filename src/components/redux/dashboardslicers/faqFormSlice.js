// faqFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/faq'; // Changed the API URL to /faq
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFuYWsiLCJlbWFpbCI6ImphbmFrQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsIklzc3Vic2NyaWJlZCI6ZmFsc2UsInN1YnNjcmlwdGlvbnR5cGUiOiJmcmVlIiwic3Vic2NyaXB0aW9uZGF0ZSI6IjIwMjMtMDktMzBUMDU6MDU6NTcuNDkwWiIsInN1YnNjcmlwdGlvbmVuZGRhdGUiOiIyMDIzLTA5LTMwVDA1OjA1OjU3LjUyMFoiLCJfaWQiOiI2NTE3YWNlZTYwZTE2MGJjMWEzMTRmMjkiLCJpYXQiOjE2OTYwNTA0MzYsImV4cCI6MTY5NjEzNjgzNn0.NPyCu7Ylwm-9n43BlqO-aYO_k41h1GWcIx1QsE7o3hk';
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
