import React, { useRef, useEffect, useState } from 'react';
import aboutuus1 from '../../Assets/images/about/2.png';
import aboutuus2 from '../../Assets/images/about/2.png';
import { FaUser, FaThumbsUp, FaTrophy, FaBriefcase } from 'react-icons/fa';
import CountUp from 'react-countup';
export default function Feature_Section() {
	const iconSize = 50; // You can adjust the size as needed
	const iconColor = 'blue'; // You can use any valid color value

	return (
		<>
			{/* Feature Section End */}
			{/* About Section Start */}
			<section className='about-section anim-object pdt-110 pdb-50 pdb-lg-80'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-12 col-xl-6'>
							<div className='about-image-block mrb-lg-60'>
								<img className='img-full' src={aboutuus1} alt='' />
							</div>
						</div>
						<div className='col-md-12 col-xl-6'>
							<h2 className='title-under-line mrb-70'>
								We have 32+{' '}
								<span className='f-weight-400'>Years Business Experiences</span>
							</h2>
							<h5 className='mrb-30 text-primary-color'>
								Trusted Business Consulting Service Provider
							</h5>
							<p className='mrb-40'>
								Distinctively exploit optimal alignments for intuitive. Quickly
								coordinate business applications through revolutionary catalysts
								for chang the Seamlessly optimal testing procedures whereas
								processes. Synerg stically evolve 2.0 technologies rather than
								just in web &amp; apps development optimal alignments for
								intuitive.
							</p>
							<div className='signature mrb-30'>
								{/* <img src='images/about/signature.png' alt='' /> */}
							</div>
							<a href='#' className='cs-btn-one btn-gradient-color btn-lg'>
								Read More
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
