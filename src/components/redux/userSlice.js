// userSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://hello231.onrender.com/user';
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;
const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchUserFormData = createAsyncThunk(
	'user/fetchUserFormData',
	async () => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.get(API_URL, config);
			console.log(response, 'this is response');
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitUserForm = createAsyncThunk(
	'user/submitUserForm',
	async (formData, { getState }) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.post(API_URL, formData, config);

			if (!(response.status === 200 || response.status === 201)) {
				throw new Error('Submitting data failed');
			}

			return response.data;
		} catch (error) {
			throw new Error('Submitting data failed');
		}
	}
);

export const updateUser = createAsyncThunk(
	'user/updateUser',
	async ({ id, data }) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await axios.put(
			`${API_URL}/editsuersubscription/${id}`,
			data,
			config
		);
		return response.data;
	}
);

export const deleteUser = createAsyncThunk(
	'user/deleteUser',
	async (userId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/deleteuser/${userId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue('Deleting data failed');
		}
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchUserFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchUserFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitUserForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitUserForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitUserForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteUser.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success delete';
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateUser.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateUser.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success update';
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const selectUserForm = (state) => state.user.formData;
export const selectUserFormStatus = (state) => state.user.status;
export const selectUserFormError = (state) => state.user.error;

export default userSlice.reducer;
