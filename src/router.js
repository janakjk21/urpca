import React from 'react';

import { createBrowserRouter, useParams } from 'react-router-dom';
import Home from './components/Home/Hero';

import './Assets/css/style.css';
import Aboutus from './components/Aboutus/Aboutus';
import Faq from './components/FAQ/Faq';
import Pricingplan from './components/Pricing/Pricingplan1';
import Consulting from './components/Consulting/Consulting';
import CaseStudy from './components/Tax/Tax';
import CaseStudySingle from './components/Tax/CaseStudySingle';
import Dashboard from './components/Dashboard/Dashboard';
import Faqfullpage from './components/FAQ/Faqfullpage';
import Login from './components/login/Login';
import Orderlist from './components/Dashboard/Orderlist';

import Taxform from './components/Dashboard/Tax';
import FAQForm from './components/Dashboard/FAQForm ';
// import Book from './components/books/Book';
import Booksform from './components/Dashboard/Booksform';
import HomeSlider from './components/Dashboard/HomeSlider';
import Services from './components/Dashboard/Services';
import Personaldetails from './components/personaldetails/Personaldetails';
import Singlenews from './components/News/Singlenews.jsx';
import News from './components/News/News';
import NewsForm from './components/Dashboard/NewsForm';
import Industries from './components/Industries/Industries';
import EmployeForm from './components/Dashboard/EmployeForm';
import Tax from './components/Tax/Tax';
import Investinnepal from './components/investinnepal/Investinnepal';
import Industriesform from './components/Dashboard/Industriesform';
import InvestNepalform from './components/Dashboard/InvestNepalform';
import { Usertable } from './components/Dashboard/Usertable';
import NewTaxhome from './components/Tax/NewTaxhome';
import { UserPrivateRoute, AdminPrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/aboutus',
		element: <Aboutus />,
	},
	{
		path: '/services/:id?',
		element: <Consulting />,
	},
	{
		path: '/industry/:id?',
		element: <Industries />,
	},

	{
		path: '/taxhome',
		element: <NewTaxhome />,
	},
	{
		path: '/tax/:id?',
		element: <Tax />,
	},
	{ path: '/investinnepal/:id?', element: <Investinnepal></Investinnepal> },
	{
		path: '/faq',
		element: <Faq />,
	},
	{
		path: '/faqfullpage',
		element: <Faqfullpage />,
	},
	{
		path: '/personaldetails/:id',
		element: <Personaldetails />,
	},
	{
		path: 'news/:id?',
		element: <News></News>,
	},

	// {
	// 	path: '/books',
	// 	element: <Book></Book>,
	// },
	// priveate dashboard routes
	{
		path: '/login',
		element: <Login></Login>,
	},
	{
		path: '/dashboard',
		element: <AdminPrivateRoute element={<Dashboard />} />,
	},

	{
		path: '/orderlist',
		element: <AdminPrivateRoute element={<Orderlist />} />,
	},
	{
		path: '/taxform/:id?',
		element: <AdminPrivateRoute element={<Taxform></Taxform>} />,
	},
	{
		path: '/faqform/:id?',
		element: <AdminPrivateRoute element={<FAQForm></FAQForm>} />,
	},
	{
		path: '/booksform/:id?',
		element: <AdminPrivateRoute element={<Booksform></Booksform>} />,
	},

	{
		path: '/homesliderform/:id?',
		element: <AdminPrivateRoute element={<HomeSlider></HomeSlider>} />,
	},
	{
		path: '/serviceform/:id?',
		element: <AdminPrivateRoute element={<Services></Services>} />,
	},

	{
		path: 'newsform/:id?',
		element: <AdminPrivateRoute element={<NewsForm></NewsForm>} />,
	},
	{
		path: 'employeform/:id?',
		element: <AdminPrivateRoute element={<EmployeForm></EmployeForm>} />,
	},
	{
		path: 'industryform/:id?',
		element: <AdminPrivateRoute element={<Industriesform></Industriesform>} />,
	},
	{
		path: 'investnepalform/:id?',
		element: (
			<AdminPrivateRoute element={<InvestNepalform></InvestNepalform>} />
		),
	},
	{
		path: 'usertable/:id?',
		element: <AdminPrivateRoute element={<Usertable></Usertable>} />,
	},
]);
