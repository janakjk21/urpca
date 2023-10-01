// faqFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/faq'; // Changed the API URL to /faq
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFuYWsiLCJlbWFpbCI6ImphbmFrNTVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiSXNzdWJzY3JpYmVkIjpmYWxzZSwic3Vic2NyaXB0aW9udHlwZSI6ImZyZWUiLCJzdWJzY3JpcHRpb25kYXRlIjoiMjAyMy0xMC0wMVQxMToyMTowOS43ODlaIiwic3Vic2NyaXB0aW9uZW5kZGF0ZSI6IjIwMjMtMTAtMDFUMTE6MjE6MDkuODE5WiIsIl9pZCI6IjY1MTk1NjM0NTFhNjBkZDE3NjBjYTYxMCIsImlhdCI6MTY5NjE1OTMyNywiZXhwIjoxNjk2MjQ1NzI3fQ.GZEz-eT9qj2ViMgcjR3zzWrP5O-97FqoXZ8ib1oiJV4';

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
