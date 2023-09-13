// registrationSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an initial state for registration
const initialState = {
	user: null,
	status: 'idle',
	error: null,
};

// Define an async thunk for user registration
export const registerUser = createAsyncThunk(
	'registration/registerUser',
	async (userData) => {
		try {
			const response = await axios.post(
				'http://localhost:5000/',
				userData
            );
            console.log(response.data, 'response');
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

// Create a registration slice
const registrationSlice = createSlice({
	name: 'registration',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(registerUser.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
				state.error = null;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

// Export the async action creator

// Export the reducer
export default registrationSlice.reducer;
