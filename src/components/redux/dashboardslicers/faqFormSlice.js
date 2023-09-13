// faqFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your initial state here
const initialState = {
	data: null,
	status: 'idle',
	error: null,
};

// Define an async thunk to fetch data from the FAQ endpoint
const fetchFAQData = createAsyncThunk('faqForm/fetchFAQData', async () => {
	try {
		const response = await fetch('https://hello231.onrender.com/faq');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
});

// Define an async thunk to post data to the FAQ endpoint
const postFAQData = createAsyncThunk(
	'faqForm/postFAQData',
	async (formData) => {
		console.log(formData);
		try {
			const response = await fetch('https://hello231.onrender.com/faq', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(formData),
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

// Create a slice with reducers and actions
const faqFormSlice = createSlice({
	name: 'faqForm',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFAQData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchFAQData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchFAQData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(postFAQData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(postFAQData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Handle the successful POST response data if needed
			})
			.addCase(postFAQData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

// Export the async thunks and the reducer
export { fetchFAQData, postFAQData };

export default faqFormSlice.reducer;
