// homeSlicer.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
	formData: null,
	status: 'idle',
	error: null,
};

// Define a thunk for submitting the product form
export const submitProductForm = createAsyncThunk(
	'homeSlicer/submitProductForm',
	async (formData) => {
		try {
			// Simulate a submission to a server
			const response = await new Promise((resolve) => {
				setTimeout(() => {
					resolve({ success: true });
				}, 1000); // Simulate a delay of 1 second
			});

			return response;
		} catch (error) {
			throw new Error('Submission failed');
		}
	}
);

// Define a thunk for editing the product form
export const editProductForm = createAsyncThunk(
	'homeSlicer/editProductForm',
	async ({ id, formData }) => {
		try {
			// Simulate an edit request to a server
			const response = await new Promise((resolve) => {
				setTimeout(() => {
					resolve({ success: true });
				}, 1000); // Simulate a delay of 1 second
			});

			return response;
		} catch (error) {
			throw new Error('Edit failed');
		}
	}
);

// Define a thunk for deleting the product form
export const deleteProductForm = createAsyncThunk(
	'homeSlicer/deleteProductForm',
	async (id) => {
		try {
			// Simulate a deletion request to a server
			const response = await new Promise((resolve) => {
				setTimeout(() => {
					resolve({ success: true });
				}, 1000); // Simulate a delay of 1 second
			});

			return response;
		} catch (error) {
			throw new Error('Deletion failed');
		}
	}
);

const homeSlicer = createSlice({
	name: 'homeSlicer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(submitProductForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitProductForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.formData = null; // Reset the form data after successful submission
			})
			.addCase(submitProductForm.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(editProductForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(editProductForm.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(editProductForm.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(deleteProductForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteProductForm.fulfilled, (state) => {
				state.status = 'succeeded';
			})
			.addCase(deleteProductForm.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const selectProductFormStatus = (state) => state.homeSlicer.status;
export const selectProductFormError = (state) => state.homeSlicer.error;

export default homeSlicer.reducer;
