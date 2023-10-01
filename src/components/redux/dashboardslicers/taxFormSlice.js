// taxFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/tax';
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFuYWsiLCJlbWFpbCI6ImphbmFrNTVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiSXNzdWJzY3JpYmVkIjpmYWxzZSwic3Vic2NyaXB0aW9udHlwZSI6ImZyZWUiLCJzdWJzY3JpcHRpb25kYXRlIjoiMjAyMy0xMC0wMVQxMToyMTowOS43ODlaIiwic3Vic2NyaXB0aW9uZW5kZGF0ZSI6IjIwMjMtMTAtMDFUMTE6MjE6MDkuODE5WiIsIl9pZCI6IjY1MTk1NjM0NTFhNjBkZDE3NjBjYTYxMCIsImlhdCI6MTY5NjE1OTMyNywiZXhwIjoxNjk2MjQ1NzI3fQ.GZEz-eT9qj2ViMgcjR3zzWrP5O-97FqoXZ8ib1oiJV4'; // Replace with your actual token
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
			});
	},
});

export const selectTaxForm = (state) => state.taxForm.formData;
export const selectTaxFormStatus = (state) => state.taxForm.status;
export const selectTaxFormError = (state) => state.taxForm.error;

export default taxFormSlice.reducer;
