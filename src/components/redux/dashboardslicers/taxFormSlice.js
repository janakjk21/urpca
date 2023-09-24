import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your initial state here
const initialState = {
	name: 'work', // Name is required
	data: null,
	status: 'idle',
	error: null,
};

// Define an async thunk to fetch data from the work endpoint
const fetchWorkData = createAsyncThunk('work/fetchWorkData', async () => {
	try {
		const response = await fetch('http://localhost:3000/tax');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
});

// Define an async thunk to post data to the work endpoint
const postWorkData = createAsyncThunk('work/postWorkData', async (formData) => {
	console.log(formData, 'inside the data');
	try {
		const formDataObj = new FormData();
		for (const key in formData) {
			formDataObj.append(key, formData[key]);
		}

		const response = await fetch('http://localhost:3000/tax', {
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
});

const editWorkData = createAsyncThunk(
	'work/editWorkData',
	async ({ id, formData }) => {
		try {
			const response = await fetch(`https://hello231.onrender.com/tax/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
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

const deleteWorkData = createAsyncThunk('work/deleteWorkData', async (id) => {
	console.log(id, 'inside the deleteWorkData');
	try {
		const response = await fetch(`http://localhost:3000/tax/?${id}`, {
			method: 'DELETE',
		});
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
});

const getWorkDataById = createAsyncThunk('work/getWorkDataById', async (id) => {
	try {
		const response = await fetch(`https://hello231.onrender.com/work/${id}`);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		throw error;
	}
});

const workSlice = createSlice({
	name: initialState.name,

	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(fetchWorkData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchWorkData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(editWorkData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				// Handle the successful EDIT response data if needed
			})
			.addCase(deleteWorkData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
				// Handle the successful DELETE response data if needed
			})
			.addCase(getWorkDataById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			});
	},
});

export {
	fetchWorkData,
	postWorkData,
	editWorkData,
	deleteWorkData,
	getWorkDataById,
};
export default workSlice.reducer;
