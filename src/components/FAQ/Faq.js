import React from 'react';
import Pagetitle from '../Pagetitle';
import Nav from '../Nav';
import CustomAccordion from './CustomAccordion';
import 'react-accessible-accordion/dist/fancy-example.css';

export default function FAQ() {
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
								<CustomAccordion items={data} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
