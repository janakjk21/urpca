import React from 'react';
import CustomAccordion from './CustomAccordion';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import Footer from '../Footer';

export default function Faqfullpage() {
	const pageTitle = 'Frequently Asked Questions';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'FAQ' }];
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
	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			<div className='container' style={{ padding: '40px' }}>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<h5 className='sub-title-side-line text-primary-color mrt-0 mrb-15'>
							Frequently Asked Question
						</h5>
						<h2 className='faq-title mrb-30'>Have Any Questions?</h2>
					</div>
				</div>
				<div className='row justify-content-center'>
					<div className='col-lg-12'>
						<div className='faq-block'>
							<CustomAccordion items={data} />
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
}
