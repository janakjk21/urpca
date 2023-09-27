// employeeSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	name: 'employee',
	data: null,
	status: 'idle',
	error: null,
};

const fetchEmployeeData = createAsyncThunk(
	'employee/fetchEmployeeData',
	async () => {
		try {
			const response = await fetch('http://localhost:3000/employe');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			throw error;
		}
	}
);
const postEmployeeData = createAsyncThunk(
	'employee/postEmployeeData',
	async (formData) => {
		console.log(formData, 'inside the data');
		try {
			const formDataObj = new FormData();
			for (const key in formData) {
				if (key === 'image') {
					formDataObj.append(key, formData[key][0]); // add the first file in the array
				} else {
					formDataObj.append(key, formData[key]);
				}
			}

			const response = await fetch('http://localhost:3000/employee', {
				method: 'POST',
				body: formDataObj,
			});
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			console.log(data);
			return data;
		} catch (error) {
			throw error;
		}
	}
);

const editEmployeeData = createAsyncThunk(
	'employee/editEmployeeData',
	async ({ id, formData }) => {
		try {
			const response = await fetch(
				`https://hello231.onrender.com/employee/${id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			throw error;
		}
	}
);

const deleteEmployeeData = createAsyncThunk(
	'employee/deleteEmployeeData',
	async (id) => {
		try {
			const response = await fetch(
				`https://hello231.onrender.com/employee/${id}`,
				{
					method: 'DELETE',
				}
			);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			throw error;
		}
	}
);

const getEmployeeDataById = createAsyncThunk(
	'employee/getEmployeeDataById',
	async (id) => {
		try {
			const response = await fetch(
				`https://hello231.onrender.com/employee/${id}`
			);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			return data;
		} catch (error) {
			throw error;
		}
	}
);

const employeeSlice = createSlice({
	name: initialState.name,
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchEmployeeData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchEmployeeData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(editEmployeeData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Handle the successful EDIT response data if needed
			})
			.addCase(deleteEmployeeData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
				// Handle the successful DELETE response data if needed
			})
			.addCase(getEmployeeDataById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			});
	},
});

export {
	fetchEmployeeData,
	postEmployeeData,
	editEmployeeData,
	deleteEmployeeData,
	getEmployeeDataById,
};
export default employeeSlice.reducer;
