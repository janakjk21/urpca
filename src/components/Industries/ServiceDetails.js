import React from 'react';
import SidebarNav from './SidebarNav ';
import BrochureDownload from './BrochureDownload';
import ContactInfo from './ContactInfo';
import CustomAccordion from '../FAQ/CustomAccordion';
import ServiceDetailContent from './ServiceDetailContent ';
import { FaPrayingHands, FaPrescription, FaSearch } from 'react-icons/fa';
// Import other icons you might need

import serviceimage from '../../Assets/images/service/service-details-inner-img2.jpg';
import innerimage from '../../Assets/images/service/service-details-inner-img1.jpg';
import serviceimage2 from '../../Assets/images/service/service-details1.jpg';
import { Link, useParams } from 'react-router-dom';

export default function ServiceDetails({ industriesData }) {
	const data = [
		{
			title: 'Q: What happens during Freshers',
			content:
				' Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporatestrategy foster collaborative thinking to further the overallvalue proposition. Organically grow the holistic world view ofdisruptive innovation via workplace diversity and empowerment',
		},

		{
			title: 'Two',
			content:
				' Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporatestrategy foster collaborative thinking to further the overallvalue proposition. Organically grow the holistic world view ofdisruptive innovation via workplace diversity and empowerment',
		},
		{
			title: 'Q: What happens during Freshers',
			content:
				' Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporatestrategy foster collaborative thinking to further the overallvalue proposition. Organically grow the holistic world view ofdisruptive innovation via workplace diversity and empowerment',
		},
		{
			title: 'Q: What happens during Freshers',
			content:
				' Leverage agile frameworks to provide a robust synopsis forhigh level overviews. Iterative approaches to corporatestrategy foster collaborative thinking to further the overallvalue proposition. Organically grow the holistic world view ofdisruptive innovation via workplace diversity and empowerment',
		},
	];

	const { id } = useParams(); // Get the id from the URL parameter
	// get the data for the selected id from the serviceDetailsData array
	console.log(industriesData);
	return (
		<section className='service-details-page pdt-110 pdb-90'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-8 col-lg-7'>
						<ServiceDetailContent industryData={industriesData} />
						<div className='col-lg-12'>
							<h3 className='mrb-20'>Frequently Asked Question</h3>
						</div>
						<CustomAccordion items={data}></CustomAccordion>
					</div>
					<div className='col-xl-4 col-lg-5 sidebar-right'>
						{/* <SidebarNav data={sidebardata} /> */}
						<BrochureDownload />
						<ContactInfo />
					</div>
				</div>
			</div>
		</section>
	);
}
