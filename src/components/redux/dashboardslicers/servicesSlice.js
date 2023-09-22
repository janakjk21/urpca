// servicesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://hello231.onrender.com/services';

// Define the initial state
const initialState = {
	formData: null,
	status: 'idle',
	error: null,
};

// Define a thunk for fetching the initial form data
export const fetchServiceFormData = createAsyncThunk(
	'services/fetchServiceFormData',
	async () => {
		try {
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error('Fetching data failed');
			}

			const data = await response.json();
			return data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

// Define a thunk for submitting service form data
export const submitServiceForm = createAsyncThunk(
	'services/submitServiceForm',
	async (formData) => {
		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Submission failed');
			}

			const data = await response.json();
			return data;
		} catch (error) {
			throw new Error('Submission failed');
		}
	}
);

const servicesSlice = createSlice({
	name: 'services',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchServiceFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchServiceFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.formData = action.payload;
			})
			.addCase(fetchServiceFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitServiceForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitServiceForm.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(submitServiceForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			});
	},
});

export const selectServiceForm = (state) => state.services.formData;
export const selectServiceFormStatus = (state) => state.services.status;
export const selectServiceFormError = (state) => state.services.error;

export default servicesSlice.reducer;
