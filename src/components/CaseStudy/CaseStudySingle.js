import React from 'react';
import { useParams } from 'react-router-dom';
import Pagetitle from '../Pagetitle';
import Nav from '../Nav';
import Footer from '../Footer';
import casesingle from '../../Assets/images/project/single-project.jpg';
const caseStudyData = [
	{
		id: 1,
		imageUrl: casesingle,
		title: 'Project One',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicingelit. Delectus, natus numquam unde qui pariatur porronecessitatibus harum libero commodi rem veritatis innisi vero odit tenetur esse quidem inventore ex. Suntnam mollitia, accusantium voluptates recusandae dolor',

		projectDate: 'March 19, 2022',
		client: 'Client A',
		// Add other properties as needed
	},
	{
		id: 2,
		imageUrl: 'images/project/project2.jpg',
		title: 'Project Two',
		description: 'Description of Project Two...',
		projectDate: 'April 25, 2022',
		client: 'Client B',
		// Add other properties as needed
	},
	// Add more case study objects as needed
];

export default function CaseStudySingle() {
	const { id } = useParams(); // Get the id from the URL parameter
	const selectedCaseStudy = caseStudyData.find(
		(caseStudy) => caseStudy.id === parseInt(id)
	);
	const pageTitle = 'Case Study';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'About Us' }];
	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			<section className='project-details-page pdt-110 pdb-110'>
				<SingleCaseStudyContent
					caseStudyData={selectedCaseStudy}></SingleCaseStudyContent>
			</section>
			<Footer></Footer>
		</>
	);
}

const SingleCaseStudyContent = ({ caseStudyData }) => {
	return (
		<div className='container'>
			<div className='row mrb-60'>
				<div className='col-xl-12'>
					<div className='blog-standared-img slider-blog'>
						<img className='img-full' src={caseStudyData.imageUrl} alt='' />
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='col-lg-7 col-xl-8'>
					<div className='project-detail-text'>
						<h3 className='project-details-title mrt-0 mrb-15'>
							Project Description
						</h3>
						<div className='project-details-content'>
							<div className='row mrb-10'>
								<div className='col-lg-12'>
									<p>{caseStudyData.description}</p>
								</div>
							</div>
							<div className='row mrb-10'>
								<div className='col-lg-12'>
									<p>{caseStudyData.description}</p>
								</div>
							</div>
							<div className='single-post-navigation mrt-30'>
								<div className='navigation-links'>
									<div className='nav-previous f-left f-left-sm-none mrb-sm-15'>
										<a
											href='#'
											className='f-weight-700 cs-btn-one btn-sm text-primary-color'>
											<i className='fa fa-angle-left' /> Prev Project
										</a>
									</div>
									<div className='nav-next text-left text-sm-right'>
										<a
											href='#'
											className='f-weight-700 cs-btn-one btn-sm text-primary-color'>
											Next Project <i className='fa fa-angle-right' />
										</a>
									</div>
								</div>
							</div>
							{/* ... Other sections */}
						</div>
					</div>
				</div>
				<div className='col-lg-5 col-xl-4 first-priority'>
					<div className='sidebar-widget'>
						<div className='project-sidebar'>
							<h4 className='mrb-40 widget-title'>Project Information</h4>
							<ul className='list project-info-list'>
								<li>
									<span>
										<i className='far fa-clock' /> Project Date:
									</span>{' '}
									March 19, 2020
								</li>
								<li>
									<span>
										<i className='far fa-user' /> Client:
									</span>{' '}
									<a href='#'>Fapster</a>
								</li>
								<li>
									<span>
										<i className='far fa-hdd' /> Categories:
									</span>{' '}
									<a href='#'>Investment, Trading</a>
								</li>
								<li>
									<span>
										<i className='far fa-gem' /> Skills:
									</span>{' '}
									<a href='#'>Business Planning</a>
								</li>
								<li>
									<span>
										<i className='far fa-money-bill-alt' /> Budgets:
									</span>{' '}
									<a href='#'>$25,00,000</a>
								</li>
								<li className='mrt-15'>
									<a
										href='#'
										className='cs-btn-one btn-block text-center text-white'>
										<i className='fa fa-eye mrr-15' />
										Live Preview{' '}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
