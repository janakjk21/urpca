import React from 'react';
import { FaCampground } from 'react-icons/fa';
// import CustomAccordion from './CustomAccordion';

const ServiceDetailContent = ({ industryData }) => {
	console.log(industryData, 'industryData');
	return (
		<>
			<div className='service-detail-text'>
				<h1 className='mrb-20 text-dark'>{industryData.title}</h1>
				<p className='mrb-40'>{industryData.description}</p>
				<div className='blog-standared-img slider-blog mrb-35'>
					<img
						className='img-full'
						src={
							industryData.image
								? `https://hello231.onrender.com${industryData.image}`
								: '/images/default-image.jpg'
						}
						alt='News Image'
					/>
				</div>
			</div>
			<div className='service-detail-text'>
				{/* <h3 className='mrb-20'>{industryData.subtitle}</h3> */}

				<div className='blog-standared-img slider-blog mrb-35'></div>
				<p className='mrb-40'>{industryData.additionalDescription}</p>
			</div>
		</>
	);
};

export default ServiceDetailContent;
