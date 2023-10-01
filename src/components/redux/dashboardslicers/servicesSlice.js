// servicesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const user = JSON.parse(localStorage.getItem('user'));

const API_URL = 'http://localhost:3000/service';
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFuYWsiLCJlbWFpbCI6ImphbmFrNTVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiSXNzdWJzY3JpYmVkIjpmYWxzZSwic3Vic2NyaXB0aW9udHlwZSI6ImZyZWUiLCJzdWJzY3JpcHRpb25kYXRlIjoiMjAyMy0xMC0wMVQxMToyMTowOS43ODlaIiwic3Vic2NyaXB0aW9uZW5kZGF0ZSI6IjIwMjMtMTAtMDFUMTE6MjE6MDkuODE5WiIsIl9pZCI6IjY1MTk1NjM0NTFhNjBkZDE3NjBjYTYxMCIsImlhdCI6MTY5NjE1OTMyNywiZXhwIjoxNjk2MjQ1NzI3fQ.GZEz-eT9qj2ViMgcjR3zzWrP5O-97FqoXZ8ib1oiJV4';

// Define the initial state
const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

// Define a thunk for fetching the initial form data
export const fetchServiceFormData = createAsyncThunk(
	'services/fetchServiceFormData',
	async () => {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitServiceForm = createAsyncThunk(
	'services/submitServiceForm',
	async (formData, { getState }) => {
		console.log(formData, 'inside the thunk');
		const token =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFuYWsiLCJlbWFpbCI6ImphbmFrNTVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiSXNzdWJzY3JpYmVkIjpmYWxzZSwic3Vic2NyaXB0aW9udHlwZSI6ImZyZWUiLCJzdWJzY3JpcHRpb25kYXRlIjoiMjAyMy0xMC0wMVQxMToyMTowOS43ODlaIiwic3Vic2NyaXB0aW9uZW5kZGF0ZSI6IjIwMjMtMTAtMDFUMTE6MjE6MDkuODE5WiIsIl9pZCI6IjY1MTk1NjM0NTFhNjBkZDE3NjBjYTYxMCIsImlhdCI6MTY5NjE1OTMyNywiZXhwIjoxNjk2MjQ1NzI3fQ.GZEz-eT9qj2ViMgcjR3zzWrP5O-97FqoXZ8ib1oiJV4';
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.post(
				'http://localhost:3000/service',
				formData,
				config
			);
			console.log(response);

			if (!response.status === 200 && 201) {
				throw new Error('Submitting data failed');
			}

			return response.data;
		} catch (error) {
			console.log(error);
			throw new Error('Submitting data failed');
		}
	}
);

export const updateService = createAsyncThunk(
	'services/updateService',
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

export const deleteService = createAsyncThunk(
	'services/deleteService',
	async (serviceId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${serviceId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log(response);
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Deleting data failed');
		}
	}
);
export const fetchServiceById = createAsyncThunk(
	'services/fetchServiceById',
	async (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.get(`${API_URL}/${id}`, config);
			console.log(response, 'response');
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
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
				state.data = action.payload;
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
				state.tracker = 'successfully submitted';
			})
			.addCase(submitServiceForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteService.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteService.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(deleteService.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateService.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateService.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(updateService.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			})
			.addCase(fetchServiceById.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchServiceById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.fetchbyid = action.payload;
			})
			.addCase(fetchServiceById.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const selectServiceForm = (state) => state.services.formData;
export const selectServiceFormStatus = (state) => state.services.status;
export const selectServiceFormError = (state) => state.services.error;

export default servicesSlice.reducer;
