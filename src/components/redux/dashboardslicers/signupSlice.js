// signupSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	status: 'idle',
	error: null,
};

export const signup = createAsyncThunk('signup/signup', async (formData) => {
	try {
		// Perform the signup request here (replace with your actual signup logic)
		// For simplicity, we'll simulate a successful signup with a fake user
		const response = await fakeSignupRequest(formData);
		return response;
	} catch (error) {
		throw error;
	}
});

const signupSlice = createSlice({
	name: 'signup',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(signup.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(signup.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase(signup.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

const fakeSignupRequest = async (formData) => {
	// Simulating a successful signup with a fake user for demonstration
	return {
		username: formData.username,
		email: formData.email,
		token: 'fakeToken',
	};
};

export default signupSlice.reducer;
