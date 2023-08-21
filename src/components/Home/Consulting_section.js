import React from 'react';

import consultingarea1 from '../../Assets/images/case-study/case-study_01.jpg';

export default function Consulting_section() {
	return (
		<>
			{/* Divider Section End */}
			{/* Case Study Section Start */}
			<section
				className='bg-silver-light pdt-105 pdb-80'
				data-background='images/bg/abs-bg4.png'>
				<div className='section-title mrb-30 mrb-md-60'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-8 col-xl-6'>
								<h5 className='mrb-15 text-primary-color sub-title-side-line'>
									Project Completed
								</h5>
								<h2 className='mrb-30'>Consulting Area</h2>
							</div>
							<div className='col-lg-4 col-xl-6 align-self-center text-left text-lg-right'>
								<a href='#' className='cs-btn-one btn-gradient-color btn-md'>
									All Project
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='section-content'>
					<div className='container'>
						<div className='row'>
							<CaseStudyItem
								imageSrc={consultingarea1}
								link='page-single-case-study.html'
								category='Consulting'
								title='Business Solution'
							/>
							<CaseStudyItem
								imageSrc={consultingarea1}
								link='page-single-case-study.html'
								category='Consulting'
								title='Another Solution'
							/>

							<CaseStudyItem
								imageSrc={consultingarea1}
								link='page-single-case-study.html'
								category='Consulting'
								title='Another Solution'
							/>
							<CaseStudyItem
								imageSrc={consultingarea1}
								link='page-single-case-study.html'
								category='Consulting'
								title='Another Solution'
							/>
							<CaseStudyItem
								imageSrc={consultingarea1}
								link='page-single-case-study.html'
								category='Consulting'
								title='Another Solution'
							/>
							<CaseStudyItem
								imageSrc={consultingarea1}
								link='page-single-case-study.html'
								category='Consulting'
								title='Another Solution'
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

const CaseStudyItem = ({ imageSrc, link, category, title }) => {
	return (
		<div className='col-md-6 col-lg-6 col-xl-4'>
			<div className='case-study-item mrb-30'>
				<div className='case-study-thumb'>
					<img className='img-full' src={imageSrc} alt='' />
					<div className='case-study-link-icon'>
						<a href={link}>
							<i className='webex-icon-attachment1' />
						</a>
					</div>
					<div className='case-study-details p-4'>
						<h6 className='case-study-category side-line mrb-5'>{category}</h6>
						<h4 className='case-study-title'>{title}</h4>
					</div>
				</div>
			</div>
		</div>
	);
};
