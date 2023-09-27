// industriesFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'https://hello231.onrender.com/industries';

const initialState = {
	data: null,
	status: 'idle',
	error: null,
};

export const fetchIndustriesFormData = createAsyncThunk(
	'industries/fetchIndustriesFormData',
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

export const submitIndustriesForm = createAsyncThunk(
	'industries/submitIndustriesForm',
	async (formData) => {
		console.log(formData, 'inside the data');
		try {
			const formDataObj = new FormData();
			for (const key in formData) {
				formDataObj.append(key, formData[key]);
			}

			const response = await fetch('http://localhost:3000/industry', {
				method: 'POST',
				body: formDataObj,
			});
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			console.log(data);
			return data;
		} catch (error) {
			throw error;
		}
	}
);

const industriesFormSlice = createSlice({
	name: 'industries',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchIndustriesFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchIndustriesFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchIndustriesFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitIndustriesForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitIndustriesForm.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(submitIndustriesForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			});
	},
});

export const selectIndustriesForm = (state) => state.industries.formData;
export const selectIndustriesFormStatus = (state) => state.industries.status;
export const selectIndustriesFormError = (state) => state.industries.error;

export default industriesFormSlice.reducer;
