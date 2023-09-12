// store.js
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
const store = configureStore({
	reducer: {
		books: booksReducer,
		// Add more slices here if needed
	},
});

export default store;
