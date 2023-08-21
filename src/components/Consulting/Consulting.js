import React from 'react';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import ServiceDetails from './ServiceDetails.js';
import Footer from '../Footer';

export default function Consulting({ Title }) {
	const pageTitle = 'Consulting';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'Consulting' }];
	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			<ServiceDetails Title={Title}></ServiceDetails>
			<Footer></Footer>
		</>
	);
}
