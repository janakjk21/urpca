// newsformSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/news'; // Change to the appropriate news API endpoint
const token =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiamFuYWsiLCJlbWFpbCI6ImphbmFrNTVAZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiSXNzdWJzY3JpYmVkIjpmYWxzZSwic3Vic2NyaXB0aW9udHlwZSI6ImZyZWUiLCJzdWJzY3JpcHRpb25kYXRlIjoiMjAyMy0xMC0wMVQxMToyMTowOS43ODlaIiwic3Vic2NyaXB0aW9uZW5kZGF0ZSI6IjIwMjMtMTAtMDFUMTE6MjE6MDkuODE5WiIsIl9pZCI6IjY1MTk1NjM0NTFhNjBkZDE3NjBjYTYxMCIsImlhdCI6MTY5NjI1NDczMiwiZXhwIjoxNjk2MzQxMTMyfQ.J_UhPIwOBcIAH0ul9mpvV1ntixoXG70bwEgieX1TF0w';
const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchById: null,
};

export const fetchNewsFormData = createAsyncThunk(
	'news/fetchNewsFormData',
	async () => {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitNewsForm = createAsyncThunk(
	'news/submitNewsForm',
	async (formData) => {
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
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

export const updateNews = createAsyncThunk(
	'news/updateNews',
	async ({ id, data }) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		const response = await axios.put(`${API_URL}/${id}`, data, config);
		return response.data;
	}
);

export const deleteNews = createAsyncThunk(
	'news/deleteNews',
	async (newsId) => {
		try {
			const response = await axios.delete(`${API_URL}/${newsId}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response.data;
		} catch (error) {
			throw new Error('Deleting data failed');
		}
	}
);

export const fetchNewsById = createAsyncThunk(
	'news/fetchNewsById',
	async (id) => {
		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		try {
			const response = await axios.get(`${API_URL}/${id}`, config);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

const newsformSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNewsFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchNewsFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchNewsFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitNewsForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitNewsForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitNewsForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteNews.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteNews.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success delete';
			})
			.addCase(deleteNews.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Deletion failed';
			})
			.addCase(updateNews.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateNews.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(updateNews.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Update failed';
				state.tracker = 'success';
			})
			.addCase(fetchNewsById.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchNewsById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.fetchById = action.payload;
			})
			.addCase(fetchNewsById.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching by Id failed';
			});
	},
});

export const selectNewsForm = (state) => state.news.formData;
export const selectNewsFormStatus = (state) => state.news.status;
export const selectNewsFormError = (state) => state.news.error;

export default newsformSlice.reducer;
