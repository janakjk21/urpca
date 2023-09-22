// orderListSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
	orders: [],
	status: 'idle',
	error: null,
};

// Define a thunk for fetching orders
export const fetchOrders = createAsyncThunk(
	'orderList/fetchOrders',
	async () => {
		const response = await fetch('https://hello231.onrender.com/orderlist');
		const data = await response.json();
		return data;
	}
);

// Define a thunk for deleting an order
export const deleteOrder = createAsyncThunk(
	'orderList/deleteOrder',
	async (orderId) => {
		const response = await fetch(
			`https://hello231.onrender.com/orderlist/${orderId}`,
			{
				method: 'DELETE',
			}
		);
		const data = await response.json();
		return data;
	}
);

// Define a thunk for editing an order
export const editOrder = createAsyncThunk(
	'orderList/editOrder',
	async ({ orderId, updatedOrder }) => {
		const response = await fetch(
			`https://hello231.onrender.com/orderlist/${orderId}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedOrder),
			}
		);
		const data = await response.json();
		return data;
	}
);

const orderListSlice = createSlice({
	name: 'orderList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrders.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchOrders.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.orders = action.payload;
			})
			.addCase(fetchOrders.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(deleteOrder.fulfilled, (state) => {
				// Handle delete success if needed
			})
			.addCase(deleteOrder.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(editOrder.fulfilled, (state) => {
				// Handle edit success if needed
			})
			.addCase(editOrder.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export { fetchOrders, deleteOrder, editOrder };
export const selectOrders = (state) => state.orderList.orders;
export const selectStatus = (state) => state.orderList.status;
export const selectError = (state) => state.orderList.error;

export default orderListSlice.reducer;
