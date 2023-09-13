// store.js
import { configureStore } from '@reduxjs/toolkit';
import registrationSlice from './registrationSlice';
import userSlice from './userSlice';
import faqFormReducer from './dashboardslicers/faqFormSlice';

const store = configureStore({
	reducer: {
		registration: registrationSlice,
		user: userSlice,
		faqForm: faqFormReducer,
	},
});

export default store;
