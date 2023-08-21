import React from 'react';
import { FaCampground } from 'react-icons/fa';
// import CustomAccordion from './CustomAccordion';

const ServiceDetailContent = ({ details, features, includedItems }) => {
	return (
		<div className='service-detail-text'>
			<h3 className='mrb-20'>{details.title}</h3>
			<p className='mrb-40'>{details.description}</p>
			<div className='blog-standared-img slider-blog mrb-35'>
				<img
					className='img-full'
					src={details.imageSrc}
					alt={details.imageAlt}
				/>
			</div>
			<p className='mrb-40'>{details.additionalDescription}</p>
			<div className='service-details-content'>
				<div className='row d-flex mrb-40'>
					<div className='col-lg-12 col-xl-6'>
						<img
							className='img-full mrb-lg-40'
							src={details.innerImage1Src}
							alt={details.innerImage1Alt}
						/>
					</div>
					<div className='col-lg-12 col-xl-6'>
						<h3 className='mrb-20'>{features.title}</h3>
						{features.items.map((feature, index) => (
							<div className='service-features-item d-flex mrb-20' key={index}>
								<div className='service-features-icon'>{feature.icon}</div>
								<div className='service-features-details'>
									<h5>{feature.title}</h5>
									<p className='mrb-0'>{feature.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className='row d-flex mrb-40'>
					<div className='col-lg-12 col-xl-6'>
						<h3 className='mrb-20'>{includedItems.title}</h3>
						<ul className='order-list primary-color mrb-lg-40'>
							{includedItems.items.map((item, index) => (
								<li key={index}>
									{' '}
									<FaCampground style={{ marginRight: '10px' }}></FaCampground>
									{item}
								</li>
							))}
						</ul>
					</div>
					<div className='col-lg-12 col-xl-6'>
						<img
							className='img-full'
							src={includedItems.imageSrc}
							alt={includedItems.imageAlt}
						/>
					</div>
				</div>
				{/* <CustomAccordion items={accordionData} /> */}
			</div>
		</div>
	);
};

export default ServiceDetailContent;
