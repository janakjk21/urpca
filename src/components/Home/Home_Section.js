import React from 'react';

import feature1 from '../../Assets/images/feature/f1.png';
import feature2 from '../../Assets/images/feature/f2.png';
import feature3 from '../../Assets/images/feature/f3.png';
import { FaLightbulb, FaUser } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';
export default function Home_Section() {
	return (
		<>
			{/* Home Slider End */}
			{/* Feature Section Start */}
			<section
				className='feature-section pdt-110 pdb-130 bg-silver-light bg-no-repeat'
				data-background='images/bg/abs-bg5.png'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 col-xl-4'>
							<div className='feature-box mrb-lg-60'>
								<div className='feature-thumb'>
									<img className='img-full' src={feature1} alt='' />
								</div>
								<div className='feature-content'>
									<div className='title'>
										<h3>Creative Design</h3>
									</div>
									<div className='para'>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Est amet similique ipsum reprehenderit sed.
										</p>
									</div>
									<div className='link'>
										<a href='#'>
											<FaLongArrowAltRight size={32} color={'blue'} />
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-xl-4'>
							<div className='feature-box mrb-lg-60'>
								<div className='feature-thumb'>
									<img className='img-full' src={feature2} alt='' />
								</div>
								<div className='feature-content'>
									<div className='title'>
										<h3>Complete Analysis</h3>
									</div>
									<div className='para'>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Est amet similique ipsum reprehenderit sed.
										</p>
									</div>
									<div className='link'>
										<a href='#'>
											<FaLongArrowAltRight size={32} color={'blue'} />
											{/* <i className='fas fa-long-arrow-alt-right' /> */}
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='col-md-6 col-xl-4'>
							<div className='feature-box'>
								<div className='feature-thumb'>
									<img className='img-full' src={feature3} alt='' />
								</div>
								<div className='feature-content'>
									<div className='title'>
										<h3>Optimal Solution</h3>
									</div>
									<div className='para'>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit.
											Est amet similique ipsum reprehenderit sed.
										</p>
									</div>
									<div className='link'>
										<a href='#'>
											<FaLongArrowAltRight size={32} color={'blue'} />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
