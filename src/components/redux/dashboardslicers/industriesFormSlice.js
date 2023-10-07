// industriesFormSlicer.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/industry';
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFuYWsiLCJlbWFpbCI6ImphbmFrNTVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiSXNzdWJzY3JpYmVkIjpmYWxzZSwic3Vic2NyaXB0aW9udHlwZSI6ImZyZWUiLCJzdWJzY3JpcHRpb25kYXRlIjoiMjAyMy0xMC0wMVQxMToyMTowOS43ODlaIiwic3Vic2NyaXB0aW9uZW5kZGF0ZSI6IjIwMjMtMTAtMDFUMTE6MjE6MDkuODE5WiIsIl9pZCI6IjY1MTk1NjM0NTFhNjBkZDE3NjBjYTYxMCIsImlhdCI6MTY5NjI1NDczMiwiZXhwIjoxNjk2MzQxMTMyfQ.J_UhPIwOBcIAH0ul9mpvV1ntixoXG70bwEgieX1TF0w';
const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchIndustryFormData = createAsyncThunk(
	'industries/fetchIndustryFormData',

	async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.get(API_URL, config);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitIndustryForm = createAsyncThunk(
	'industries/submitIndustryForm',
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

export const updateIndustry = createAsyncThunk(
	'industries/updateIndustry',
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

export const deleteIndustry = createAsyncThunk(
	'industries/deleteIndustry',
	async (industryId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${industryId}`, {
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

const industriesFormSlicer = createSlice({
	name: 'industries',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchIndustryFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchIndustryFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchIndustryFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitIndustryForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitIndustryForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitIndustryForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteIndustry.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteIndustry.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(deleteIndustry.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateIndustry.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateIndustry.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success update';
			})
			.addCase(updateIndustry.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			});
	},
});

export const selectIndustryForm = (state) => state.industries.formData;
export const selectIndustryFormStatus = (state) => state.industries.status;
export const selectIndustryFormError = (state) => state.industries.error;

export default industriesFormSlicer.reducer;
