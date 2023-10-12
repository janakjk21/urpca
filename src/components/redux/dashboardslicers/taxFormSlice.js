// taxFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://hello231.onrender.com/tax';
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;
console.log(token, 'this is token');
const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchTaxFormFormData = createAsyncThunk(
	'taxForm/fetchTaxFormFormData',
	async () => {
		try {
			console.log(token, 'this is token');
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitTaxForm = createAsyncThunk(
	'taxForm/submitTaxForm',
	async (formData, { getState }) => {
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

export const updateTaxForm = createAsyncThunk(
	'taxForm/updateTaxForm',
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

export const deleteTaxForm = createAsyncThunk(
	'taxForm/deleteTaxForm',
	async (taxFormId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${taxFormId}`, {
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
export const fetchTaxById = createAsyncThunk('tax/fetchTaxById', async (id) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	try {
		const response = await axios.get(`${API_URL}/${id}`, config);
		console.log(response.data, 'response.data');
		return response.data;
	} catch (error) {
		throw new Error('Fetching data failed');
	}
});

const taxFormSlice = createSlice({
	name: 'taxForm',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTaxFormFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTaxFormFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchTaxFormFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitTaxForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitTaxForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitTaxForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteTaxForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteTaxForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(deleteTaxForm.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateTaxForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateTaxForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(updateTaxForm.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			})
			.addCase(fetchTaxById.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTaxById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchTaxById.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			});
	},
});

export const selectTaxForm = (state) => state.taxForm.formData;
export const selectTaxFormStatus = (state) => state.taxForm.status;
export const selectTaxFormError = (state) => state.taxForm.error;

export default taxFormSlice.reducer;
