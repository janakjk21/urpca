import { createBrowserRouter, useParams } from 'react-router-dom';
import Home from './components/Home/Hero';
// import './Assets/css/bootstrap.min.css';
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
// import './Assets/css/responsive.css';
// import './Assets/css/custom-animation.css';
// import './Assets/css/magnific-popup.css';
// import './Assets/css/meanmenu.min.css';
// import './Assets/css/owl.carousel.min.css';

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
		path: '/faq',
		element: <Faq />,
	},
	{
		path: '/faqfullpage',
		element: <Faqfullpage />,
	},
	{
		path: '/Pricing',
		element: <Pricingplan />,
	},
	{
		path: '/Consulting',
		element: <Consulting Title='Business Consulting' />,
	},
	{
		path: '/Consulting/finance',
		element: <Consulting Title='Finance Consulting' />,
	},
	{
		path: '/Casestudy',
		element: <CaseStudy />,
	},
	{
		path: '/case-studies/:id',
		element: <CaseStudySingle />,
	},
	{
		path: '/case-studies/:id',
		element: <CaseStudySingle />,
	},

	{
		path: '/dashboard',
		element: <Dashboard></Dashboard>,
	},
	{
		path: '/login',
		element: <Login></Login>,
	},
]);
