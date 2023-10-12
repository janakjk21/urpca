import React, { useEffect } from 'react';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import Singlenews from './Singlenews.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchNewsById } from '../redux/dashboardslicers/newsFormSlice';

export default function News() {
	const pageTitle = 'News';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'News' }];

	const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(() => {
		dispatch(fetchNewsById(id));
	}, []);

	const newsData = useSelector((state) => state.news.data);
	const status = useSelector((state) => state.news.status);
	console.log(newsData, 'investNepalData');

	return (
		<div>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			{status === 'succeeded' ? (
				<Singlenews newsData={newsData}></Singlenews>
			) : (
				// <CaseStudySingle taxData={taxData}></CaseStudySingle>
				<h2>loading</h2>
			)}
		</div>
	);
}
