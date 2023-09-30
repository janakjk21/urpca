// orderListSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/orderList';
const token = 'YOUR_ORDERLIST_TOKEN_HERE'; // Replace with your actual token

const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchOrderListFormData = createAsyncThunk(
	'orderList/fetchOrderListFormData',
	async () => {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitOrderListForm = createAsyncThunk(
	'orderList/submitOrderListForm',
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

export const updateOrderList = createAsyncThunk(
	'orderList/updateOrderList',
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

export const deleteOrderList = createAsyncThunk(
	'orderList/deleteOrderList',
	async (orderListId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${orderListId}`, {
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

const orderListSlice = createSlice({
	name: 'orderList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrderListFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchOrderListFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchOrderListFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitOrderListForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitOrderListForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitOrderListForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteOrderList.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteOrderList.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(deleteOrderList.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateOrderList.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateOrderList.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(updateOrderList.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			});
	},
});

export const selectOrderListForm = (state) => state.orderList.formData;
export const selectOrderListFormStatus = (state) => state.orderList.status;
export const selectOrderListFormError = (state) => state.orderList.error;

export default orderListSlice.reducer;
