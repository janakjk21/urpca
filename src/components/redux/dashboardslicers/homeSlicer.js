// homeSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://hello231.onrender.com/slider';
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFuYWsiLCJlbWFpbCI6ImphbmFrNTVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiSXNzdWJzY3JpYmVkIjpmYWxzZSwic3Vic2NyaXB0aW9udHlwZSI6ImZyZWUiLCJzdWJzY3JpcHRpb25kYXRlIjoiMjAyMy0xMC0wMVQxMToyMTowOS43ODlaIiwic3Vic2NyaXB0aW9uZW5kZGF0ZSI6IjIwMjMtMTAtMDFUMTE6MjE6MDkuODE5WiIsIl9pZCI6IjY1MTk1NjM0NTFhNjBkZDE3NjBjYTYxMCIsImlhdCI6MTY5NjY5NzEyMiwiZXhwIjoxNjk2NzgzNTIyfQ.rK5GOqHGNkTDLBdTM7eKJpAMhPHamyfQqb_LWp7dXXs';
const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchHomeFormData = createAsyncThunk(
	'home/fetchHomeFormData',
	async () => {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitHomeForm = createAsyncThunk(
	'home/submitHomeForm',
	async (formData, { getState }) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		};
		try {
			//convert formData into json
			const jsonFormData = JSON.stringify(formData);
			console.log(formData, ' this is home dat');

			const response = await axios.post(API_URL, jsonFormData, config);

			if (!(response.status === 200 || response.status === 201)) {
				throw new Error('Submitting data failed');
			}

			return response.data;
		} catch (error) {
			throw new Error('Submitting data failed');
		}
	}
);

export const updateHome = createAsyncThunk(
	'home/updateHome',
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

export const deleteHome = createAsyncThunk(
	'home/deleteHome',
	async (homeId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${homeId}`, {
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

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHomeFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchHomeFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchHomeFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitHomeForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitHomeForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitHomeForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteHome.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteHome.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success deleted';
			})
			.addCase(deleteHome.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateHome.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateHome.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(updateHome.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			});
	},
});

export const selectHomeForm = (state) => state.home.formData;
export const selectHomeFormStatus = (state) => state.home.status;
export const selectHomeFormError = (state) => state.home.error;

export default homeSlice.reducer;
