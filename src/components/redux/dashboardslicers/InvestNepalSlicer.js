// investNepalSlicer.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://hello231.onrender.com/invest';
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;
const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchInvestNepalFormData = createAsyncThunk(
	'investNepal/fetchInvestNepalFormData',
	async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.get(API_URL, config);
			console.log(response.data, 'response.data');
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitInvestNepalForm = createAsyncThunk(
	'investNepal/submitInvestNepalForm',
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

export const updateInvestNepal = createAsyncThunk(
	'investNepal/updateInvestNepal',
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

export const deleteInvestNepal = createAsyncThunk(
	'investNepal/deleteInvestNepal',
	async (investNepalId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${investNepalId}`, {
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
export const fetchInvestNepalFormById = createAsyncThunk(
	'investNepal/fetchInvestNepalFormById',
	async (id) => {
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
	}
);

const investNepalSlicer = createSlice({
	name: 'investNepal',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInvestNepalFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchInvestNepalFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				console.log(action.payload, 'action.payload');
				state.data = action.payload;
			})
			.addCase(fetchInvestNepalFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitInvestNepalForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitInvestNepalForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitInvestNepalForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteInvestNepal.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteInvestNepal.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
				state.tracker = 'success delete';
			})
			.addCase(deleteInvestNepal.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateInvestNepal.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateInvestNepal.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success update';
			})
			.addCase(updateInvestNepal.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			})
			.addCase(fetchInvestNepalFormById.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchInvestNepalFormById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchInvestNepalFormById.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			});
	},
});

export const selectInvestNepalForm = (state) => state.investNepal.formData;
export const selectInvestNepalFormStatus = (state) => state.investNepal.status;
export const selectInvestNepalFormError = (state) => state.investNepal.error;

export default investNepalSlicer.reducer;
