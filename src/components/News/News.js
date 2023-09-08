import React from 'react';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import Singlenews from './Singlenews';

export default function News() {
	const pageTitle = 'News';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'News' }];

	return (
		<div>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			<Singlenews></Singlenews>
		</div>
	);
}
