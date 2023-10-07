import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ element }) => {
	const isAuthenticated = () => {
		const user = JSON.parse(localStorage.getItem('user'));
		const token = user?.token;
		const userRole = user?.user?.role;
		console.log(
			userRole,
			'userRole',
			token,
			user,
			!!user && !!token && userRole === 'admin'
		);

		// Check if user is authenticated and has the 'admin' role
		return !!user && !!token && userRole === 'admin';
	};

	return isAuthenticated() ? element : <Navigate to='/login' />;
};

const UserPrivateRoute = ({ element }) => {
	const isAuthenticated = () => {
		const user = JSON.parse(localStorage.getItem('user'));
		const token = user?.token;
		const userRole = user?.role;
		const paymentStatus = user?.user?.subscriptiontype;
		// Check if user is authenticated, has the 'user' role, and has paid
		return !!user && !!token && userRole === 'user' && paymentStatus === 'paid';
	};

	return isAuthenticated() ? element : <Navigate to='/login' />;
};
const isAuthenticatedadmin = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const token = user?.token;
	const userRole = user?.user?.role;
	console.log(
		userRole,
		'userRole',
		token,
		user,
		!!user && !!token && userRole === 'admin'
	);

	// Check if user is authenticated and has the 'admin' role
	return !!user && !!token && userRole === 'admin';
};
const isAuthenticatedpaiduser = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	const token = user?.token;
	const userRole = user?.role;
	const paymentStatus = user?.user?.subscriptiontype;
	// Check if user is authenticated, has the 'user' role, and has paid
	return !!user && !!token && userRole === 'user' && paymentStatus === 'paid';
};
export {
	AdminPrivateRoute,
	UserPrivateRoute,
	isAuthenticatedadmin,
	isAuthenticatedpaiduser,
};
