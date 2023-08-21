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

const serviceDetailsData = {
	'Business Consulting': {
		title: 'Bussiness',
		description: 'Leverage agile frameworks to provide...',
		imageSrc: `${serviceimage2}`,
		imageAlt: 'Service Image',
		additionalDescription: 'Leverage agile frameworks to provide a robust...',
		innerImage1Src: `${innerimage}`,
		innerImage1Alt: 'Inner Image 1',
		// Other details specific to Business Consulting
	},
	'Finance Consulting': {
		title: 'finance',
		description: 'Leverage agile frameworks to provide...',
		imageSrc: `${serviceimage2}`,
		imageAlt: 'Service Image',
		additionalDescription: 'Leverage agile frameworks to provide a robust...',
		innerImage1Src: `${innerimage}`,
		innerImage1Alt: 'Inner Image 1',
		// Other details specific to Finance Consulting
	},
	// Add more entries for other titles
};

export default function ServiceDetails({ Title }) {
	const selectedDetails = serviceDetailsData[Title] || {};
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

	const features = {
		title: 'Service Features',
		items: [
			{
				title: 'Creative Design',
				icon: <FaPrescription className='webexflaticon flaticon-search-1' />,
				text: 'Leverage agile frameworks to provide a robust',
			},
			{
				title: 'Complete Analysis',
				icon: <FaSearch className='webexflaticon flaticon-search-1' />,
				text: 'Leverage agile frameworks to provide a robust',
			},
			// ... other feature items
		],
	};

	const includedItems = {
		title: 'Service Included',
		items: [
			'revolutionary catalysts for chang',
			'catalysts for chang the Seamlessly',
			'business applications through',
			'procedures whereas processes',
		],
		imageSrc: `${serviceimage}`,
		imageAlt: 'Included Image',
	};
	return (
		<section className='service-details-page pdt-110 pdb-90'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-8 col-lg-7'>
						<ServiceDetailContent
							details={selectedDetails}
							features={features}
							includedItems={includedItems}
						/>
						<div className='col-lg-12'>
							<h3 className='mrb-20'>Frequently Asked Question</h3>
						</div>
						<CustomAccordion items={data}></CustomAccordion>
					</div>
					<div className='col-xl-4 col-lg-5 sidebar-right'>
						<SidebarNav />
						<BrochureDownload />
						<ContactInfo />
					</div>
				</div>
			</div>
		</section>
	);
}
