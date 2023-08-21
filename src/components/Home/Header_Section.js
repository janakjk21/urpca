import React from 'react';

import Slider from 'react-slick';

// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../Assets/images/bg/1.jpg';
import image2 from '../../Assets/images/bg/2.jpg';
import image3 from '../../Assets/images/bg/3.jpg';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export default function Header_Section() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		fade: true,
	};
	return (
		<>
			<section className='banner-section'>
				{' '}
				<div className='home-carousel'>
					<Slider {...settings}>
						<SlideItem
							image={image1}
							title='Make a Good Plan & Grow Your Business'
							description='We have almost 35+ years of experience for providing consulting services solutions'
						/>
						<SlideItem
							image={image2}
							title='Make a Good Plan & Grow Your Business'
							description='We have almost 35+ years of experience for providing consulting services solutions'
						/>
						<SlideItem
							image={image3}
							title='Make a Good Plan & Grow Your Business'
							description='We have almost 35+ years of experience for providing consulting services solutions'
						/>
					</Slider>
				</div>
			</section>
		</>
	);
}

const SlideItem = ({ image, title, description }) => {
	return (
		<div className='slide-item' style={{ backgroundImage: `url(${image})` }}>
			<div className='image-layer' />
			<div className='auto-container'>
				<div className='row clearfix'>
					<div className='col-xl-8 col-lg-12 col-md-12 content'>
						<div className='content-box'>
							<h1>{title}</h1>
							<p>{description}</p>
							<div className='btn-box'>
								<a href='#' className='cs-btn-one btn-gradient-color'>
									Get a Quote
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function SampleNextArrow(props) {
	const { className, onClick } = props;

	return (
		<div
			className={className}
			style={{
				fontSize: '20px',
				height: '50px',
				borderRadius: '50%',
				paddingRight: '60px',
				lineHeight: '50px',

				width: '60px',
				background: 'linear-gradient(45deg, #0E90D5, #3032A2)',
				MozTransform: 'translate(0, -50%)',
				OTransform: 'translate(0, -50%)',
				msTransform: 'translate(0, -50%)',
				WebkitTransform: 'translate(0, -50%)',
				transform: 'translate(0, -50%)',
				MozTransition: 'all 600ms ease 0ms',
				WebkitTransition: 'all 600ms ease 0ms',
				msTransition: 'all 600ms ease 0ms',
				OTransition: 'all 600ms ease 0ms',
				transition: 'all 600ms ease 0ms',

				// Added for right arrow
			}}
			onClick={onClick}></div>
	);
}

function SamplePrevArrow(props) {
	const { className, onClick } = props;
	return (
		<div
			className={className}
			style={{
				fontSize: '20px',
				height: '50px',
				borderRadius: '50%',

				lineHeight: '50px',
				paddingRight: '60px',

				top: '50%',
				width: '50px',
				background: 'linear-gradient(45deg, #0E90D5, #3032A2)',
				MozTransform: 'translate(0, -50%)',
				OTransform: 'translate(0, -50%)',
				msTransform: 'translate(0, -50%)',
				WebkitTransform: 'translate(0, -50%)',
				transform: 'translate(0, -50%)',
				MozTransition: 'all 600ms ease 0ms',
				WebkitTransition: 'all 600ms ease 0ms',
				msTransition: 'all 600ms ease 0ms',
				OTransition: 'all 600ms ease 0ms',
				transition: 'all 600ms ease 0ms',

				zIndex: '100',
				// Added for right arrow
			}}
			onClick={onClick}>
			<FaAngleLeft />
		</div>
	);
}
