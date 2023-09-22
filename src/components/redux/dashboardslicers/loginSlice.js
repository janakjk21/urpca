// loginSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	status: 'idle',
	error: null,
};

export const login = createAsyncThunk('login/login', async (credentials) => {
	try {
		// Perform the login request here (replace with your actual login logic)
		// For simplicity, we'll simulate a successful login with a fake user
		const response = await fakeLoginRequest(credentials);
		return response;
	} catch (error) {
		throw error;
	}
});

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(login.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

const fakeLoginRequest = async (credentials) => {
	// Simulating a successful login with a fake user for demonstration
	return { username: credentials.username, token: 'fakeToken' };
};


export default loginSlice.reducer;
