import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	registrationSuccess: false,
};
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		registrationStart: (state) => {
			state.loading = true;
			state.error = null;
			state.registrationSuccess = false;
		},
		registrationSuccess: (state) => {
			state.loading = false;
			state.registrationSuccess = true;
		},
		registrationFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			state.registrationSuccess = false;
		},
	},
});

export const registerUser = createAsyncThunk(
	'auth/registerUser',
	async (userData) => {
		const response = await fetch('http://localhost:3000/user/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});
		if (!response.ok) {
			throw new Error('Registration failed.');
		} else {
			const data = await response.json();
			console.log(data);
		}
	}
);

export const { registrationStart, registrationSuccess, registrationFailure } =
	authSlice.actions;

export default authSlice.reducer;
