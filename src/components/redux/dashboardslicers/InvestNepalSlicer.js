// investNepalSlicer.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
	name: 'investNepal', // Updated name
	investNepalData: [],
	status: 'idle',
	error: null,
};

// Define a thunk for fetching Invest Nepal data
export const fetchInvestNepalData = createAsyncThunk(
	'investNepal/fetchInvestNepalData',
	async () => {
		const response = await fetch('https://hello231.onrender.com/investNepal'); // Replace with your API endpoint
		const data = await response.json();
		return data;
	}
);

// Define a thunk for posting Invest Nepal data
export const postInvestNepalData = createAsyncThunk(
	'investNepal/postInvestNepalData',
	async (formData) => {
		console.log(formData);
		const response = await fetch('https://hello231.onrender.com/investNepal', {
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

export const editInvestNepalData = createAsyncThunk(
	'investNepal/editInvestNepalData',
	async ({ id, formData }) => {
		const response = await fetch(
			`https://hello231.onrender.com/investNepal/${id}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			}
		);
		const data = await response.json();
		return data;
	}
);

// Define a thunk for deleting Invest Nepal data
export const deleteInvestNepalData = createAsyncThunk(
	'investNepal/deleteInvestNepalData',
	async (id) => {
		const response = await fetch(
			`https://hello231.onrender.com/investNepal/${id}`,
			{
				method: 'DELETE',
			}
		);
		const data = await response.json();
		return data;
	}
);

// Define a thunk for getting Invest Nepal data by ID
export const getInvestNepalDataById = createAsyncThunk(
	'investNepal/getInvestNepalDataById',
	async (id) => {
		const response = await fetch(
			`https://hello231.onrender.com/investNepal/${id}`
		);
		const data = await response.json();
		return data;
	}
);

// ... rest of the code ...

const investNepalSlicer = createSlice({
	name: initialState.name,
	initialState,
	// ... previous code ...

	extraReducers: (builder) => {
		builder
			// ... previous code ...

			.addCase(editInvestNepalData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Update the state based on the EDIT response data
				// For example, find the edited Invest Nepal item and update it in the investNepalData array
				const editedInvestNepalIndex = state.investNepalData.findIndex(
					(item) => item.id === action.payload.id
				);
				if (editedInvestNepalIndex !== -1) {
					state.investNepalData[editedInvestNepalIndex] = action.payload;
				}
			})

			.addCase(deleteInvestNepalData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Update the state based on the DELETE response data
				// For example, remove the deleted Invest Nepal item from the investNepalData array
				state.investNepalData = state.investNepalData.filter(
					(item) => item.id !== action.payload.id
				);
			})

			.addCase(getInvestNepalDataById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Update the state based on the GET by ID response data
				// For example, store the retrieved Invest Nepal item in the investNepalData array
				state.investNepalData = [action.payload];
			});

		// ... rest of the code ...
	},

	// ... rest of the code ...
});

// ... rest of the code ...

export default investNepalSlicer.reducer;
