// store.js
import { configureStore } from '@reduxjs/toolkit';
import registrationSlice from './registrationSlice';
import userSlice from './userSlice';
import faqFormSlice from './dashboardslicers/faqFormSlice';
import employeeSlice from './dashboardslicers/employeeSlicer';
import homeSlice from './dashboardslicers/homeSlicer';
import industrySlice from './dashboardslicers/industriesFormSlice';
import investnepalSlice from './dashboardslicers/InvestNepalSlicer';
import loginSlice from './dashboardslicers/loginSlice';
import newsSlice from './dashboardslicers/newsFormSlice';
import orderSlice from './dashboardslicers/orderSlice';
import serviceSlice from './dashboardslicers/servicesSlice';
import signupSlice from './dashboardslicers/signupSlice';
import taxSlice from './dashboardslicers/taxFormSlice';
import bookSlice from './dashboardslicers/bookSlice';
import titleSlicer from './dashboardslicers/titleSlicer';

const store = configureStore({
	reducer: {
		registration: registrationSlice,
		user: userSlice,
		faqForm: faqFormSlice,
		employee: employeeSlice,
		home: homeSlice,
		industry: industrySlice,
		investnepal: investnepalSlice,
		login: loginSlice,
		news: newsSlice,
		order: orderSlice,
		service: serviceSlice,
		signup: signupSlice,
		tax: taxSlice,
		book: bookSlice,
		title: titleSlicer,
	},
});
console.log(store.getState(), 'store');

export default store;
