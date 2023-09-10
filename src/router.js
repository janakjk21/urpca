import { createBrowserRouter, useParams } from 'react-router-dom';
import Home from './components/Home/Hero';

import './Assets/css/style.css';
import Aboutus from './components/Aboutus/Aboutus';
import Faq from './components/FAQ/Faq';
import Pricingplan from './components/Pricing/Pricingplan1';
import Consulting from './components/Consulting/Consulting';
import CaseStudy from './components/CaseStudy/CaseStudy';
import CaseStudySingle from './components/CaseStudy/CaseStudySingle';
import Dashboard from './components/Dashboard/Dashboard';
import Faqfullpage from './components/FAQ/Faqfullpage';
import Login from './components/login/Login';
import Orderlist from './components/Dashboard/Orderlist';

import CaseStudyform from './components/Dashboard/CaseStudy';
import FAQForm from './components/Dashboard/FAQForm ';
import Book from './components/books/Book';
import Booksform from './components/Dashboard/Booksform';
import HomeSlider from './components/Dashboard/HomeSlider';
import Services from './components/Dashboard/Services';
import Personaldetails from './components/personaldetails/Personaldetails';
import Singlenews from './components/News/Singlenews';
import News from './components/News/News';
import NewsForm from './components/Dashboard/NewsForm';
import Industries from './components/Industries/Industries';

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
		path: '/services/:id',
		element: <Consulting />,
	},
	{
		path: '/industry/:id',
		element: <Industries />,
	},
	{
		path: '/tax',
		element: <CaseStudy />,
	},
	{
		path: '/tax/:id',
		element: <CaseStudySingle />,
	},
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
		path: 'news/:id',
		element: <News></News>,
	},

	{
		path: '/books',
		element: <Book></Book>,
	},

	{
		path: '/dashboard',
		element: <Dashboard></Dashboard>,
	},
	{
		path: '/login',
		element: <Login></Login>,
	},
	{
		path: '/orderlist',
		element: <Orderlist></Orderlist>,
	},
	{
		path: '/editcase',
		element: <CaseStudyform></CaseStudyform>,
	},
	{
		path: '/faqform',
		element: <FAQForm></FAQForm>,
	},

	{
		path: '/bookform',
		element: <Booksform></Booksform>,
	},
	{
		path: '/homesliderform',
		element: <HomeSlider></HomeSlider>,
	},
	{
		path: '/serviceform',
		element: <Services></Services>,
	},

	{
		path: 'newsform',
		element: <NewsForm></NewsForm>,
	},
]);
