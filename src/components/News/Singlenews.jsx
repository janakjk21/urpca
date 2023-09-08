import React from 'react';
import newsimage from '../../Assets/images/news/single-news.jpg';
import { useParams } from 'react-router-dom';
export default function Singlenews() {
	// convert the following html to jsx
	// <div>
	const newsData = [
		{
			id: 1,
			category: 'Business',
			author: 'Admin',
			date: '01 Jan, 2020',
			title: 'Nanotech immersion along the highway',
			content: [
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum voluptas harum provident fugiat tempora...',
				'provident fugiat tempora architecto mollitia quos maiores perspiciatis obcaecati placeat aunty koi thako...',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus dolor eaque officia impedit corporis exercitationem vel nulla iure sequi ipsam...',
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem rerum voluptas harum provident fugiat tempora architecto mollitia quos maiores perspiciatis, obcaecati, placeat aut. Architecto eaque accusamus minima quis in earum dignissimos suscipit esse, saepe repudiandae similique, expedita sed quam dolore impedit deleniti atque.',
			],
			quote: {
				text: 'provident fugiat tempora architecto mollitia quos maiores perspiciatis obcaecati placeat aunty koi thako Architecto eaque accusamus minima in earum impedit atque',
				author: 'Sophie Brown of Google Inc.',
			},
		},
		// Add more news items here...
	];
	const { id } = useParams();

	const selectedItem = newsData.find((item) => item.id === parseInt(id));
	return (
		<div>
			<section className='blog-single-news pdt-110 pdb-90'>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-8 col-lg-7'>
							<div className='single-news-details news-wrapper mrb-30'>
								<div className='news-thumb'>
									<img className='img-full' src={newsimage} alt='' />
									<div className='news-top-meta'>
										<span className='entry-category'>
											{selectedItem.category}
										</span>
									</div>
								</div>
								<div className='single-news-content'>
									<div className='news-bottom-meta mrt-20 mrb-10'>
										<span className='entry-author mrr-20'>
											<i className='far fa-user mrr-10 text-primary-color' />
											{selectedItem.author}
										</span>
										<span className='entry-date'>
											<i className='far fa-calendar-alt mrr-10 text-primary-color' />
											{selectedItem.date}
										</span>
									</div>
									<h3 className='entry-title text-capitalize mrb-20'>
										<a href='#'>{selectedItem.title}</a>
									</h3>
									<div className='entry-content'>
										{selectedItem.content.map((paragraph, index) => (
											<p key={index}>{paragraph}</p>
										))}
										<blockquote className='block-quote'>
											<p>{selectedItem.quote.text}</p>
											<span>
												<strong className='text-secondary-color'>
													- {selectedItem.quote.author}
												</strong>
											</span>
										</blockquote>
									</div>
									<div className='single-news-tag-social-area clearfix'>
										{/* Add related tags and social share here */}
									</div>
								</div>
							</div>
						</div>
						<div className='col-xl-4 col-lg-5 sidebar-right'>
							<aside className='news-sidebar-widget'>
								<div className='widget sidebar-widget widget-popular-posts'>
									<h4 className='mrb-30 single-blog-widget-title'>
										Popular Posts
									</h4>
									<div className='single-post media mrb-20'>
										<div className='post-image mrr-20'>
											<img src='images/footer/recent-post_01.png' alt='' />
										</div>
										<div className='post-content media-body align-self-center'>
											<h5 className='mrb-5'>
												<a href='#'>Business Solution</a>
											</h5>
											<span className='post-date'>
												<i className='fa fa-clock-o mrr-5' />
												26 April, 2019
											</span>
										</div>
									</div>
									<div className='single-post media mrb-20'>
										<div className='post-image mrr-20'>
											<img src='images/footer/recent-post_02.png' alt='' />
										</div>
										<div className='post-content media-body align-self-center'>
											<h5 className='mrb-5'>
												<a href='#'>Business Solution</a>
											</h5>
											<span className='post-date'>
												<i className='fa fa-clock-o mrr-5' />
												26 April, 2019
											</span>
										</div>
									</div>
									<div className='single-post media'>
										<div className='post-image mrr-20'>
											<img src='images/footer/recent-post_03.png' alt='' />
										</div>
										<div className='post-content media-body align-self-center'>
											<h5 className='mrb-5'>
												<a href='#'>Business Solution</a>
											</h5>
											<span className='post-date'>
												<i className='fa fa-clock-o mrr-5' />
												26 April, 2019
											</span>
										</div>
									</div>
								</div>
								<div className='widget sidebar-widget widget-tags'>
									<h4 className='mrb-30 single-blog-widget-title'>Tags</h4>
									<ul className='list'>
										<li>
											<a href='#'>Consulting</a>
										</li>
										<li>
											<a href='#'>Finance</a>
										</li>
										<li>
											<a href='#'>Law</a>
										</li>
										<li>
											<a href='#'>Corporate</a>
										</li>
										<li>
											<a href='#'>Taxes</a>
										</li>
										<li>
											<a href='#'>Meeting</a>
										</li>
										<li>
											<a href='#'>Business</a>
										</li>
										<li>
											<a href='#'>Investment</a>
										</li>
									</ul>
								</div>
							</aside>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
