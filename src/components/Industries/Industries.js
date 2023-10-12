import React, { useEffect } from 'react';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import ServiceDetails from './ServiceDetails.js';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchIndustryFormById } from '../redux/dashboardslicers/industriesFormSlice';

export default function Industries({ Title }) {
	const pageTitle = 'Consulting';
	const dispatch = useDispatch();

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'Consulting' }];
	const industriesData = useSelector((state) => state.industry.data);
	const status = useSelector((state) => state.industry.status);

	const { id } = useParams();

	console.log(industriesData, 'investNepalData,', status);

	useEffect(() => {
		dispatch(fetchIndustryFormById(id));
	}, []);
	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			{status === 'succeeded' ? (
				<ServiceDetails industriesData={industriesData}></ServiceDetails>
			) : (
				<h2>loading</h2>
			)}
			<Footer></Footer>
		</>
	);
}
