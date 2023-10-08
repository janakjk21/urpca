import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const user = JSON.parse(localStorage.getItem('user'));
const token = user?.token;

const initialState = {
	name: 'order',
	orderData: [], // This will store the order data
	status: 'idle',
	error: null,
};

// Define a thunk for fetching order data
export const fetchOrderData = createAsyncThunk(
	'order/fetchOrderData',
	async () => {
		try {
			const response = await fetch('https://api.example.com/orders'); // Replace with your API endpoint
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error fetching order data:', error);
			throw error;
		}
	}
);

// Define a thunk for creating a new order
export const createOrder = createAsyncThunk(
	'order/createOrder',
	async (orderData) => {
		try {
			const response = await fetch('https://api.example.com/orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(orderData),
			});
			const data = await response.json();
			return data;
		} catch (error) {
			console.error('Error creating order:', error);
			throw error;
		}
	}
);

// Define a thunk for updating an order
export const updateOrder = createAsyncThunk(
	'order/updateOrder',
	async ({ orderId, orderData }) => {
		try {
			const response = await fetch(
				`https://api.example.com/orders/${orderId}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(orderData),
				}
			);
			const data = await response.json();
			return { orderId, data };
		} catch (error) {
			console.error('Error updating order:', error);
			throw error;
		}
	}
);

// Define a thunk for deleting an order
export const deleteOrder = createAsyncThunk(
	'order/deleteOrder',
	async (orderId) => {
		try {
			const response = await fetch(
				`https://api.example.com/orders/${orderId}`,
				{
					method: 'DELETE',
				}
			);
			const data = await response.json();
			return { orderId, data };
		} catch (error) {
			console.error('Error deleting order:', error);
			throw error;
		}
	}
);

const orderSlice = createSlice({
	name: initialState.name,
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrderData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.orderData = action.payload;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.orderData.push(action.payload.data);
			})
			.addCase(updateOrder.fulfilled, (state, action) => {
				state.status = 'succeeded';
				const updatedOrder = action.payload.data;
				const existingOrderIndex = state.orderData.findIndex(
					(order) => order.id === updatedOrder.id
				);
				if (existingOrderIndex !== -1) {
					state.orderData[existingOrderIndex] = updatedOrder;
				}
			})
			.addCase(deleteOrder.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.orderData = state.orderData.filter(
					(order) => order.id !== action.payload.orderId
				);
			});
	},
});

export default orderSlice.reducer;
