import React, { useEffect, useRef, useState } from 'react';
import team1 from '../../Assets/images/about/ab3.jpg';
import image2 from '../../Assets/images/about/ab3.jpg';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaGooglePlus,
} from 'react-icons/fa';

import CustomAccordion from '../FAQ/CustomAccordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployeeFormData } from '../redux/dashboardslicers/employeeSlicer';
import { fetchFAQFormData } from '../redux/dashboardslicers/faqFormSlice';
export default function Team_Title_section() {
	const dispatch = useDispatch();

	const employedata = useSelector((state) => state.employee.data);
	console.log(employedata, 'employedata');
	useEffect(() => {
		dispatch(fetchEmployeeFormData());
	}, []);
	return (
		<>
			{/*Team Section Titile End */}
			{/*Team Section Start*/}

			<section
				className='pdt-110 pdb-150 section-white-typo'
				data-background='images/bg/5.jpg'
				data-overlay-dark={8}>
				<div
					className='section-title text-center wow fadeInUp'
					data-wow-delay='0ms'
					data-wow-duration='1500ms'>
					<div className='container'>
						<div className='row'>
							<div className='col' />
							<div className='col-lg-8 col-xl-6'>
								<div className='section-title-block'>
									<h5 className='text-primary-color anim-box-objects line-both-side mrb-15'>
										Meet Our Team
									</h5>
									<h2>We Have a Professional Consulting Team</h2>
								</div>
							</div>
							<div className='col' />
						</div>
					</div>
				</div>
			</section>
			<section
				className='pdt-0 pdb-210 pdb-md-110 minus-mrt-130 bg-pos-center-bottom'
				data-background='images/bg/abs-bg1.png'>
				<div className='section-content'>
					<div className='container'>
						<div className='row  d-flex justify-content-center'>
							{/* // if data is in employedata map it  */}
							{employedata ? (
								employedata.map((employee) => (
									<SingleTeam
										key={employee.id}
										imgSrc={`https://hello231.onrender.com${employee.image}`}
										name={employee.name}
										designation={employee.designation}
									/>
								))
							) : (
								<></>
							)}
						</div>
						<FAQ></FAQ>
					</div>
				</div>
			</section>
		</>
	);
}

const SingleTeam = ({ imgSrc, name, designation }) => {
	console.log(
		imgSrc,
		'imgSrc',
		'this is image ',
		`https://hello231.onrender.com${imgSrc}`
	);
	return (
		<div className='col-md-6 col-lg-6 col-xl-3'>
			<div className='team-block mrb-30'>
				<div className='team-upper-part'>
					<img className='img-full' src={imgSrc} alt='' />
				</div>
				<div className='team-bottom-part'>
					<h4 className='team-title mrb-5'>
						<a href='page-single-team.html'>{name}</a>
					</h4>
					<h6 className='designation'>{designation}</h6>
					<ul className='social-list vertical-style list-sm'>
						<li>
							<a href='#'>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaTwitter />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaGooglePlus />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

function FAQ() {
	// const data = [
	// 	{
	// 		title: 'Q: What happens during Freshers',
	// 		content:
	// 			' Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporatestrategy foster collaborative thinking to further the overallvalue proposition. Organically grow the holistic world view ofdisruptive innovation via workplace diversity and empowerment',
	// 	},

	// 	{
	// 		title: 'Two',
	// 		content:
	// 			' Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporatestrategy foster collaborative thinking to further the overallvalue proposition. Organically grow the holistic world view ofdisruptive innovation via workplace diversity and empowerment',
	// 	},
	// 	{
	// 		title: 'Q: What happens during Freshers',
	// 		content:
	// 			' Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporatestrategy foster collaborative thinking to further the overallvalue proposition. Organically grow the holistic world view ofdisruptive innovation via workplace diversity and empowerment',
	// 	},
	// 	{
	// 		title: 'Q: What happens during Freshers',
	// 		content:
	// 			' Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporatestrategy foster collaborative thinking to further the overallvalue proposition. Organically grow the holistic world view ofdisruptive innovation via workplace diversity and empowerment',
	// 	},
	// ];
	const dispatch = useDispatch();

	const data = useSelector((state) => state.faqForm.data);
	useEffect(() => {
		dispatch(fetchFAQFormData());
	}, []);
	return (
		<>
			<section
				className='request-a-call-back pdt-110 pdb-95'
				data-background='img/bg/6.html'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-5'>
							<h5 className='sub-title-side-line text-primary-color mrt-0 mrb-15'>
								Frequently Asked Question
							</h5>
							<h2 className='faq-title mrb-30'>Have Any Questions?</h2>
							<p className='mrb-40'>
								Distinctively exploit revolutionary catalysts for chang the
								Seamlessly optimal rather than just in web &amp; apps
								development optimal alignments for intuitive.
							</p>
							<a
								href='#'
								className='cs-btn-one btn-gradient-color btn-md mrb-lg-60'>
								More Question?
							</a>
						</div>
						<div className='col-lg-7'>
							<div className='faq-block'>
								{data ? <CustomAccordion items={data} /> : <></>}
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
