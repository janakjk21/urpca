// newsFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
	newsData: [],
	status: 'idle',
	error: null,
};

// Define a thunk for fetching news data
export const fetchNewsData = createAsyncThunk(
	'newsForm/fetchNewsData',
	async () => {
		const response = await fetch('https://hello231.onrender.com/news'); // Replace with your API endpoint
		const data = await response.json();
		return data;
	}
);

// Define a thunk for posting news data
export const postNewsData = createAsyncThunk(
	'newsForm/postNewsData',
    async (formData) => {
        console.log(formData);
		const response = await fetch('https://hello231.onrender.com/news', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});
		const data = await response.json();
		return data;
	}
);

// Create a slice
const newsFormSlice = createSlice({
	name: 'newsForm',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNewsData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchNewsData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.newsData = action.payload;
			})
			.addCase(fetchNewsData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(postNewsData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.newsData.push(action.payload);
			})
			.addCase(postNewsData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default newsFormSlice.reducer;
