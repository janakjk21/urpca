// newsFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
	name: 'newsForm', // Name is required
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
		console.log(data);
		return data;
	}
);

export const editNewsData = createAsyncThunk(
	'newsForm/editNewsData',
	async ({ id, formData }) => {
		const response = await fetch(`https://hello231.onrender.com/news/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		});
		const data = await response.json();
		return data;
	}
);

// Define a thunk for deleting news data
export const deleteNewsData = createAsyncThunk(
	'newsForm/deleteNewsData',
	async (id) => {
		const response = await fetch(`https://hello231.onrender.com/news/${id}`, {
			method: 'DELETE',
		});
		const data = await response.json();
		return data;
	}
);

// Define a thunk for getting news data by ID
export const getNewsDataById = createAsyncThunk(
	'newsForm/getNewsDataById',
	async (id) => {
		const response = await fetch(`https://hello231.onrender.com/news/${id}`);
		const data = await response.json();
		return data;
	}
);

// ... rest of the code ...

const newsFormSlice = createSlice({
	name: initialState.name,
	initialState,
	// ... previous code ...

	extraReducers: (builder) => {
		builder
			// ... previous code ...

			.addCase(editNewsData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Update the state based on the EDIT response data
				// For example, find the edited news item and update it in the newsData array
				const editedNewsIndex = state.newsData.findIndex(
					(news) => news.id === action.payload.id
				);
				if (editedNewsIndex !== -1) {
					state.newsData[editedNewsIndex] = action.payload;
				}
			})

			.addCase(deleteNewsData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Update the state based on the DELETE response data
				// For example, remove the deleted news item from the newsData array
				state.newsData = state.newsData.filter(
					(news) => news.id !== action.payload.id
				);
			})

			.addCase(getNewsDataById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Update the state based on the GET by ID response data
				// For example, store the retrieved news item in the newsData array
				state.newsData = [action.payload];
			});

		// ... rest of the code ...
	},

	// ... rest of the code ...
});
// ... rest of the code ...

export default newsFormSlice.reducer;
