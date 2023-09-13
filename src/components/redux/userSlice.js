// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an initial state for user data
const initialState = {
	data: null,
	status: 'idle',
	error: null,
};

// Define an async thunk for fetching user data
export const fetchUserData = createAsyncThunk(
	'user/fetchUserData',
	async () => {
		try {
			const response = await axios.get('https://hello231.onrender.com/user');
			console.log(response.data, 'response');
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

// Create a user data slice
const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchUserData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
				state.error = null;
			})
			.addCase(fetchUserData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

// Export the async action creator

// Export the reducer
export default userSlice.reducer;
