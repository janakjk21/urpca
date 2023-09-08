import React from 'react';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaGooglePlus,
	FaCheck,
} from 'react-icons/fa';

import personlalimage from '../../Assets/images/team/team01.jpg';
import { useParams } from 'react-router-dom';
const personalDetailsData = [
	{
		id: 1,
		name: 'Micky Aurther',
		designation: 'Business Consultant',
		email: 'demomail@gmail.com',
		phone: '(+46) 844 0319 0125',
		website: 'name@domain.com',
		address: '121 King Street, Melbourne',
		socialLinks: {
			facebook: 'https://facebook.com/micky.aurther',
			twitter: 'https://twitter.com/micky_aurther',
			instagram: 'https://instagram.com/micky_aurther',
			googlePlus: 'https://plus.google.com/micky_aurther',
		},
		personalDescription:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum eos, earum laborum nesciunt! Dolor, ipsam. Ratione neque itaque maxime sit fugiat autem expedita omnis ducimus soluta quia, eius laudantium..',
		professionalSkills: [
			'Business Consulting',
			'Market Analysis',
			'Money Management',
			'Business Growth',
		],
		careerExperience: [
			'Revolutionary catalysts for change',
			'Catalysts for change seamlessly',
			'Business applications through',
			'Procedures whereas processes',
		],
		awardAchievement: [
			'Revolutionary catalysts for change',
			'Catalysts for change seamlessly',
			'Business applications through',
			'Procedures whereas processes',
		],
	},
	{
		id: 2,
		name: 'Sanjog',
		designation: 'Finance Consultant',
		email: 'sanjog@gmail.com',
		phone: '(+46) 844 0319 0126',
		website: 'sanjog@domain.com',
		address: '123 Queen Street, Sydney',
		socialLinks: {
			facebook: 'https://facebook.com/sanjog',
			twitter: 'https://twitter.com/sanjog',
			instagram: 'https://instagram.com/sanjog',
			googlePlus: 'https://plus.google.com/sanjog',
		},
		personalDescription:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus nostrum eos, earum laborum nesciunt! Dolor, ipsam. Ratione neque itaque maxime sit fugiat autem expedita omnis ducimus soluta quia, eius laudantium..',
		professionalSkills: [
			'Finance Consulting',
			'Data Analysis',
			'Investment Management',
			'Financial Planning',
		],
		careerExperience: [
			'Strategic financial planning',
			'Financial analysis and reporting',
			'Investment portfolio management',
			'Risk assessment and management',
		],
		awardAchievement: [
			'Outstanding Finance Consultant Award',
			'Best Financial Analyst Award',
			'Top Investment Manager Recognition',
		],
	},
	// Add more objects for other persons
];

export default function Personaldetails() {
	const { id } = useParams();
	const selectedItem = personalDetailsData.find(
		(item) => item.id === parseInt(id)
	);
	return (
		<div>
			<section
				className='team-details-page pdt-110 pdb-90'
				data-background='images/bg/abs-bg4.png'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 col-sm-12 col-lg-4'>
							<div className='single-team-img'>
								<img className='img-full' src={personlalimage} alt='' />
							</div>
							<div className='team-member-info mrt-20'>
								<h4 className='team-title mrb-5'>
									<a href='page-team-details.html'>{selectedItem.name}</a>
								</h4>
								<h6 className='designation text-gray f-weight-400'>
									{selectedItem.designation}
								</h6>
								<ul className='list-items mrt-15 mrb-25'>
									<li>
										<strong className='mrr-5'>Email:</strong>
										<span> {selectedItem.email}</span>
									</li>
									<li>
										<strong className='mrr-5'>Phone:</strong>
										<span> {selectedItem.phone}</span>
									</li>
									<li>
										<strong className='mrr-5'>Website:</strong>
										<span> {selectedItem.website}</span>
									</li>
									<li>
										<strong className='mrr-5'>Address:</strong>
										<span> {selectedItem.address}</span>
									</li>
								</ul>
								<ul className='social-list list-primary-color clearfix mrt-20 mrb-md-50'>
									<li>
										<a href={selectedItem.socialLinks.facebook}>
											<FaFacebook />
										</a>
									</li>
									<li>
										<a href={selectedItem.socialLinks.twitter}>
											<FaTwitter />
										</a>
									</li>
									<li>
										<a href={selectedItem.socialLinks.instagram}>
											<FaInstagram />
										</a>
									</li>
									<li>
										<a href={selectedItem.socialLinks.googlePlus}>
											<FaGooglePlus />
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-md-12 col-sm-12 col-lg-8'>
							<div className='personal-details'>
								<h3 className='personal-details-title title-under-line mrb-60'>
									Personal Details
								</h3>
								<p>{selectedItem.personalDescription}</p>
								<h3 className='mrb-15'>Professional Skills</h3>
								<div className='skills mrb-30'>
									{selectedItem.professionalSkills.map((skill, index) => (
										<div className='skill-item' key={index}>
											<div className='skill-header'>
												<h6 className='skill-title'>{skill}</h6>
											</div>
										</div>
									))}
								</div>
								<div className='row'>
									<div className='col-lg-6'>
										<h3 className='mrb-15'>Career & Experience</h3>
										<ul className='order-list primary-color mrb-md-30'>
											{selectedItem.careerExperience.map(
												(experience, index) => (
													<li key={index}>
														<FaCheck className='blue-icon' /> {experience}
													</li>
												)
											)}
										</ul>
									</div>
									<div className='col-lg-6'>
										<h3 className='mrb-15'>Award & Achievement</h3>
										<ul className='order-list primary-color'>
											{selectedItem.awardAchievement.map(
												(achievement, index) => (
													<li key={index}>
														<FaCheck className='blue-icon' /> {achievement}
													</li>
												)
											)}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
