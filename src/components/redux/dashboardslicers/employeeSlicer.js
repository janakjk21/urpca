// employeeSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/employee';
const token = 'YOUR_EMPLOYEE_TOKEN_HERE'; // Replace with your actual token

const initialState = {
	data: null,
	status: 'idle',
	error: null,
	tracker: '',
	fetchbyid: null,
};

export const fetchEmployeeFormData = createAsyncThunk(
	'employees/fetchEmployeeFormData',
	async () => {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			throw new Error('Fetching data failed');
		}
	}
);

export const submitEmployeeForm = createAsyncThunk(
	'employees/submitEmployeeForm',
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

export const updateEmployee = createAsyncThunk(
	'employees/updateEmployee',
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

export const deleteEmployee = createAsyncThunk(
	'employees/deleteEmployee',
	async (employeeId, { rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${employeeId}`, {
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

const employeeSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEmployeeFormData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchEmployeeFormData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(fetchEmployeeFormData.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Fetching data failed';
			})
			.addCase(submitEmployeeForm.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(submitEmployeeForm.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'successfully submitted';
			})
			.addCase(submitEmployeeForm.rejected, (state) => {
				state.status = 'failed';
				state.error = 'Submission failed';
			})
			.addCase(deleteEmployee.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(deleteEmployee.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(deleteEmployee.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			})
			.addCase(updateEmployee.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(updateEmployee.fulfilled, (state) => {
				state.status = 'succeeded';
				state.tracker = 'success';
			})
			.addCase(updateEmployee.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
				state.tracker = 'success';
			});
	},
});

export const selectEmployeeForm = (state) => state.employees.formData;
export const selectEmployeeFormStatus = (state) => state.employees.status;
export const selectEmployeeFormError = (state) => state.employees.error;

export default employeeSlicer.reducer;
