import React from 'react';
import {
	FaHeart,
	FaMoneyBillAlt,
	FaShoppingCart,
	FaTags,
} from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import book1 from '../../Assets/Image-8-480x693.jpg.webp';
import Nav from '../Nav';
import Pagetitle from '../Pagetitle';
import feature1 from '../../Assets/images/feature/f1.png';
import feature2 from '../../Assets/images/feature/f2.png';
import feature3 from '../../Assets/images/feature/f3.png';
import { FaLightbulb, FaUser } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
export default function Book() {
	const pageTitle = 'Consulting';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'Consulting' }];

	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />
			<div className='container' style={{ marginTop: '50px' }}>
				<div className='row'>
					<Home_Section></Home_Section>
				</div>
			</div>
		</>
	);
}

function Home_Section() {
	const book = {
		name: 'The Great Book',
		author: 'John Doe',
		price: 25,
		discountPrice: 20,
		discountPercent: 20,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
		imageUrl: `${book1}`,
	};
	return (
		<>
			<section style={{ backgroundColor: '#eee' }}>
				<div className='container py-5'>
					<ProductCard {...book} />
					<ProductCard {...book} />
					<ProductCard {...book} />
					<ProductCard {...book} />
					<ProductCard {...book} />
					<ProductCard {...book} />
				</div>
			</section>
		</>
	);
}

const ProductCard = ({
	name,
	author,
	price,
	discountPrice,
	discountPercent,
	description,
	imageUrl,
}) => {
	return (
		<div className='row justify-content-center mb-3'>
			<div className='col-md-12 col-xl-10'>
				<div className='card shadow-0 border rounded-3'>
					<div className='card-body'>
						<div className='row'>
							<div className='col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0'>
								<div className='bg-image hover-zoom ripple rounded ripple-surface'>
									<img src={imageUrl} className='w-100' alt={name} />
									<a href='#!'>
										<div className='hover-overlay'>
											<div
												className='mask'
												style={{
													backgroundColor: 'rgba(253, 253, 253, 0.15)',
												}}
											/>
										</div>
									</a>
								</div>
							</div>
							<div className='col-md-6 col-lg-6 col-xl-6'>
								<h5>{name}</h5>
								<div className='d-flex flex-row'>
									<div className='text-danger mb-1 me-2'>
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</div>
									<span>310</span>
								</div>
								<div className='mt-1 mb-0 text-muted small'>
									<span>{author}</span>
									<span className='text-primary'> • </span>
									<span>{description}</span>
									<span className='text-primary'> • </span>
									<span>
										Best finish
										<br />
									</span>
								</div>
								<div className='mb-2 text-muted small'>
									<span>Unique design</span>
									<span className='text-primary'> • </span>
									<span>For men</span>
									<span className='text-primary'> • </span>
									<span>
										Casual
										<br />
									</span>
								</div>
								<p className='text-truncate mb-4 mb-md-0'>{description}</p>
							</div>
							<div className='col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start'>
								<div className='d-flex flex-row align-items-center mb-1'>
									<h4 className='mb-1 me-1'>${price}</h4>
									<span className='text-danger'>
										<s>${discountPrice}</s>
									</span>
								</div>
								<h6 className='text-success'>Free shipping</h6>
								<div className='d-flex flex-column mt-4'>
									<button className='btn btn-primary btn-sm' type='button'>
										Details <FaLongArrowAltRight />
									</button>
									<button
										className='btn btn-outline-primary btn-sm mt-2'
										type='button'>
										Add to wishlist <FaHeart />
									</button>
									<button
										className='btn btn-outline-primary btn-sm mt-2'
										type='button'>
										Add to cart <FaShoppingCart />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
