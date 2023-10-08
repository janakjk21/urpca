// servicesSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// const user = JSON.parse(localStorage.getItem('user'));

const API_URL = 'https://hello231.onrender.com/service';
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;
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
		console.log(formData, 'inside the thunk ');
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.post(
				'https://hello231.onrender.com/service',
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
