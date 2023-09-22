// faqFormSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your initial state here
const initialState = {
	name: 'faqForm', // Name is required
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
const editFAQData = createAsyncThunk(
	'faqForm/editFAQData',
	async ({ id, formData }) => {
		try {
			const response = await fetch(`https://hello231.onrender.com/faq/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			throw error;
		}
	}
);

const deleteFAQData = createAsyncThunk('faqForm/deleteFAQData', async (id) => {
	console.log(id, 'indise the deleteFAQData');
	try {
		const response = await fetch(`https://hello231.onrender.com/faq/${id}`, {
			method: 'DELETE',
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
});

const getFAQDataById = createAsyncThunk(
	'faqForm/getFAQDataById',
	async (id) => {
		try {
			const response = await fetch(`https://hello231.onrender.com/faq/${id}`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			throw error;
		}
	}
);

// ... rest of the code ...

const faqFormSlice = createSlice({
	name: initialState.name,
	initialState,

	// ... rest of the code ...
	extraReducers: (builder) => {
		builder
			.addCase(fetchFAQData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchFAQData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			// ... rest of the code ...
			.addCase(editFAQData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Handle the successful EDIT response data if needed
			})
			.addCase(deleteFAQData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
				// Handle the successful DELETE response data if needed
			})
			.addCase(getFAQDataById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			});
		// ... rest of the code ...
	},
});

export {
	fetchFAQData,
	postFAQData,
	editFAQData,
	deleteFAQData,
	getFAQDataById,
};
// Create a slice with reducers and actions
export default faqFormSlice.reducer;
