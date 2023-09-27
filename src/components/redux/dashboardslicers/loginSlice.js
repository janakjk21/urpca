// loginSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	status: 'idle',
	error: null,
};

export const loginUser = createAsyncThunk(
	'login/loginUser',
	async (credentials) => {
		try {
			const response = await fetch('http://localhost:3000/user/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(credentials),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message);
			}

			const data = await response.json();
			localStorage.setItem('user', JSON.stringify(data));
			console.log(data, 'data from');
			return data;
		} catch (error) {
			throw error;
		}
	}
);

const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.user = action.payload;
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export default loginSlice.reducer;
