import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import CaseStudyimg from '../../Assets/images/case-study/case-study_01.jpg';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import Footer from '../Footer';
import CaseStudy from './CaseStudySingle';
import { useDispatch, useSelector } from 'react-redux';
import CaseStudySingle from './CaseStudySingle';
import { fetchTaxById } from '../redux/dashboardslicers/taxFormSlice';

export default function Tax() {
	const pageTitle = 'About Us';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'CaseStudy' }];
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTaxById(id));
	}, []);
	const status = useSelector((state) => state.tax.status);
	const taxData = useSelector((state) => state.tax.data);
	console.log(taxData, 'taxData');

	return (
		<div>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			<section
				className='bg-silver-light pdt-105 pdb-80'
				data-background='images/bg/abs-bg4.png'>
				<div className='section-content'>
					<div className='container'>
						<div className='row'>
							{status === 'succeeded' ? (
								<CaseStudySingle taxData={taxData}></CaseStudySingle>
							) : (
								// <CaseStudySingle taxData={taxData}></CaseStudySingle>
								<h2>loading</h2>
							)}
							{/* <CaseStudySingle></CaseStudySingle> */}
							{/* {caseStudies.map((study, index) => (
								<CaseStudyItem
									key={index}
									imageSrc={study.imageSrc}
									category={study.category}
									title={study.title}
									id={study.id}
								/>
							))} */}
						</div>
					</div>
				</div>
			</section>
			<Footer></Footer>
		</div>
	);
}
