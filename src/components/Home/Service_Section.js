import React from 'react';
import { FaLightbulb, FaUser } from 'react-icons/fa';

export default function Service_Section() {
	return (
		<section
			className='serivce-section bg-silver-light pdt-105 pdb-80'
			data-background='images/bg/abs-bg7.png'>
			<div className='section-title'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-5'>
							<div className='section-title-left-part mrb-sm-30'>
								<div className='section-left-sub-title mb-20'>
									<h5 className='sub-title text-primary-color'>
										Service We Offer
									</h5>
								</div>
								<h2 className='title'>Our Services</h2>
							</div>
						</div>
						<div className='offset-lg-1 col-lg-6'>
							<div className='section-title-right-part'>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
									aperiam porro necessitatibus, consequuntur, reiciendis dolore
									doloribus id repellendus tempora vitae quia voluptas ipsum
									eligendi hic.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='section-content'>
				<div className='container'>
					<div className='row'>
						<ServiceBox
							title='Online Business'
							content='We always provide people a complete solution focused on any business.'
							icon={<FaLightbulb size={50} color='blue' />}
						/>
						<ServiceBox
							title='Human Resource'
							content='We always provide people a complete solution focused on any business.'
							icon={<FaUser size={50} color='blue' />}
						/>
						<ServiceBox
							title='Human Resource'
							content='We always provide people a complete solution focused on any business.'
							icon={<FaUser size={50} color='blue' />}
						/>
						<ServiceBox
							title='Human Resource'
							content='We always provide people a complete solution focused on any business.'
							icon={<FaUser size={50} color='blue' />}
						/>
						{/* Repeat the same pattern for other service boxes */}
					</div>
				</div>
			</div>
		</section>
	);
}

const ServiceBox = ({ title, content }) => {
	return (
		<div className='col-md-6 col-xl-3'>
			<div className='service-box'>
				<div className='service-icon'>
					<FaLightbulb size={50} color='blue' />
				</div>
				<div className='service-content'>
					<div className='title'>
						<a href='#'>
							<h3>{title}</h3>
						</a>
					</div>
					<div className='para'>
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
