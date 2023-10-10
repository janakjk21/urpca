import React, { useEffect, useState } from 'react';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import Singlenews from './Singlenews.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInvestNepalFormById } from '../redux/dashboardslicers/InvestNepalSlicer';
import { useParams } from 'react-router-dom';

export default function Investinnepal() {
	const dispatch = useDispatch();
	const [selectedData, setSelectedData] = useState({});
	const pageTitle = 'News';

	const breadcrumbs = [
		{ label: 'Home', link: '/' },
		{ label: 'Invest in nepal' },
	];

	const investNepalData = useSelector((state) => state.investnepal.data);
	const status = useSelector((state) => state.investnepal.status);

	const { id } = useParams();

	console.log(investNepalData, 'investNepalData');
	console.log(selectedData, 'selectedData');

	useEffect(() => {
		dispatch(fetchInvestNepalFormById(id));
	}, []);
	return (
		<div>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />

			{status === 'succeeded' ? (
				<Singlenews newsData={investNepalData}></Singlenews>
			) : (
				<h2>loading</h2>
			)}
			{/* <Singlenews newsData={newsData}></Singlenews> */}
		</div>
	);
}
