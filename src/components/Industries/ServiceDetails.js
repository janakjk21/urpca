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
const serviceDetailsData = [
	{
		id: 1,
		title: 'Bussiness',
		description: 'Leverage agile frameworks to provide...jasldfjalsdjfa l',
		imageSrc: `${serviceimage2}`,
		imageAlt: 'Service Image',
		additionalDescription: 'Leverage agile frameworks to provide a robust...',
		innerImage1Src: `${innerimage}`,
		innerImage1Alt: 'Inner Image 1',
		subtitle: 'we do the bestt ',

		// Other details specific to Business Consulting
	},
	{
		id: 2,
		title: 'finance',
		description: ' Leverage agile frameworks to provide a robust...',
		imageSrc: `${serviceimage2}`,
		imageAlt: 'Service Image',
		additionalDescription: 'Leverage agile frameworks to provide a robust...',
		innerImage1Src: `${innerimage}`,
		innerImage1Alt: 'Inner Image 1',
		subtitle: 'we do the bestt ',
		// Other details specific to Finance Consulting
	},
	// Add more entries for other titles
];

export default function ServiceDetails({ Title }) {
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

	const selectedItem = serviceDetailsData.find(
		(item) => item.id === parseInt(id)
	);
	console.log(id, selectedItem);
	const sidebardata = serviceDetailsData.map((item) => ({
		id: item.id,
		title: item.title,
	}));
	console.log(sidebardata);

	return (
		<section className='service-details-page pdt-110 pdb-90'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-8 col-lg-7'>
						<ServiceDetailContent details={selectedItem} />
						<div className='col-lg-12'>
							<h3 className='mrb-20'>Frequently Asked Question</h3>
						</div>
						<CustomAccordion items={data}></CustomAccordion>
					</div>
					<div className='col-xl-4 col-lg-5 sidebar-right'>
						<SidebarNav data={sidebardata} />
						<BrochureDownload />
						<ContactInfo />
					</div>
				</div>
			</div>
		</section>
	);
}
