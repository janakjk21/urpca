import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	name: 'homeSlider',
	data: null,
	status: 'idle',
	error: null,
};

const fetchHomeSliderData = createAsyncThunk(
	'homeSlider/fetchHomeSliderData',
	async () => {
		try {
			const response = await fetch('http://localhost:3000/slider');
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

const postHomeSliderData = createAsyncThunk(
	'homeSlider/postHomeSliderData',
	async (formData) => {
		try {
			const formDataObj = new FormData();

			const response = await fetch('http://localhost:3000/slider', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const data = await response.json();
			console.log(data, 'data created');
			return data;
		} catch (error) {
			throw error;
		}
	}
);

// ... Add other async thunks (edit, delete, get by ID) similarly
const deleteHomeSliderData = createAsyncThunk(
	'homeSlider/deleteHomeSliderData',
	async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/slider/${id}`, {
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
	}
);

const getHomeSliderDataById = createAsyncThunk(
	'homeSlider/getHomeSliderDataById',
	async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/slider/${id}`);
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

const homeSliderSlice = createSlice({
	name: initialState.name,
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchHomeSliderData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchHomeSliderData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(deleteHomeSliderData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			})
			.addCase(getHomeSliderDataById.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.data = action.payload;
			});
	},
});

export {
	fetchHomeSliderData,
	postHomeSliderData,
	deleteHomeSliderData,
	getHomeSliderDataById,
};

export default homeSliderSlice.reducer;
