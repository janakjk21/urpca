import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://hello231.onrender.com'; // Changed the API URL to /faq
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;

const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
};

export const fetchTitleData = createAsyncThunk(
	'title/fetchTitleData',
	async () => {
		try {
			const response = await axios.get(API_URL, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

const titleSlice = createSlice({
	name: 'title',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTitleData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchTitleData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchTitleData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			});
	},
});

export const selectTitleData = (state) => state.title.data;
export const selectTitleStatus = (state) => state.title.status;
export const selectTitleError = (state) => state.title.error;

export default titleSlice.reducer;
