import React from 'react';
import { FaCampground } from 'react-icons/fa';
// import CustomAccordion from './CustomAccordion';

const ServiceDetailContent = ({ details, features, includedItems }) => {
	return (
		<>
			<div className='service-detail-text'>
				<h1 className='mrb-20 text-dark'>{details.title}</h1>
				<p className='mrb-40'>{details.description}</p>
				<div className='blog-standared-img slider-blog mrb-35'>
					<img
						className='img-full'
						src={details.imageSrc}
						alt={details.imageAlt}
					/>
				</div>
			</div>
			<div className='service-detail-text'>
				<h3 className='mrb-20'>{details.subtitle}</h3>

				<div className='blog-standared-img slider-blog mrb-35'></div>
				<p className='mrb-40'>{details.additionalDescription}</p>
			</div>
		</>
	);
};

export default ServiceDetailContent;
