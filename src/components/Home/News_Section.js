import React, { useEffect } from 'react';
import news1 from '../../Assets/images/news/01.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsFormData } from '../redux/dashboardslicers/newsFormSlice';
import { Link } from 'react-router-dom';
export default function News_Section() {
	const dispatch = useDispatch();
	const status = useSelector((state) => state.news.status);
	const newsData = useSelector((state) => state.news.data);
	const trackerStatus = useSelector((state) => state.news.tracker);

	console.log(trackerStatus, 'trackerStatus', newsData);

	useEffect(() => {
		dispatch(fetchNewsFormData());
	}, []);

	const unpaidNewsData =
		newsData && newsData.length > 0
			? newsData.filter((data) => data.payment === 'unpaid').slice(0, 4)
			: [];

	console.log(unpaidNewsData, 'unpaidNewsData');
	return (
		<>
			{/* Clients Section End */}
			{/* News Section Start */}
			<section
				className='bg-silver-light pdt-105 pdb-80'
				data-background='images/bg/abs-bg4.png'>
				<div className='section-title mrb-30 mrb-md-60'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 col-xl-6'>
								<h5 className='mrb-15 text-primary-color sub-title-side-line'>
									News And Updates
								</h5>
								<h2 className='mrb-30'>Let's Checkout our All Latest News</h2>
							</div>
							<div className='col-lg-4 col-xl-6 align-self-center text-left text-lg-right'>
								<a href='#' className='cs-btn-one btn-gradient-color btn-md'>
									All News
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='section-content'>
					<div className='container'>
						<div className='row'>
							{/* {newsData.map((newsItem, index) => (
								<div className='col-md-6 col-lg-6 col-xl-4' key={index}>
									<NewsItem {...newsItem} />
								</div>
							))} */}
							{unpaidNewsData.map((newsItem, index) => (
								<div className='col-md-6 col-lg-6 col-xl-4' key={index}>
									<NewsItem
										imageSrc={`https://hello231.onrender.com${newsItem.image}`}
										category={newsItem.category}
										title={newsItem.title}
										date={newsItem.date}
										author={newsItem.author}
										_id={newsItem._id}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

const NewsItem = ({ imageSrc, category, title, date, author, _id }) => {
	return (
		<div className='news-wrapper mrb-30 mrb-sm-40'>
			<div className='news-thumb'>
				<img className='img-full' src={imageSrc} alt='' />
				<div className='news-top-meta'>
					<span className='entry-category'>{category}</span>
				</div>
			</div>
			<div className='news-details'>
				<div className='news-description mb-20'>
					<h4 className='the-title mrb-30'>
						<Link to={`/news/${_id}`}>{title}</Link>
					</h4>
					<div className='news-bottom-meta'>
						<span className='entry-date mrr-20'>
							<i className='far fa-calendar-alt mrr-10 text-primary-color' />
							{date}
						</span>
						<span className='entry-author'>
							<i className='far fa-user mrr-10 text-primary-color' />
							{author}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
