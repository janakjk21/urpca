import React from 'react';
import contactus_background from '../../Assets/images/bg/vid.jpg';

export default function () {
	return (
		<section
			className='pdb-110'
			data-background='images/bg/3.jpg'
			data-overlay-dark={8}>
			<div className='section-content'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-8'>
							<div className='popup-video-block video-popup'>
								<img
									className='img-full d-none d-lg-block'
									src={contactus_background}
									alt=''
								/>
								<a
									href='https://www.youtube.com/watch?v=Fvae8nxzVz4'
									className='popup-video popup-youtube'>
									<i
										className='webexflaticon flaticon-play-button-2'
										aria-hidden='true'
									/>
									<span className='pulse-animation' />
								</a>
							</div>
						</div>
						<div className='col-lg-4 mrb-sm-110'>
							<div className='request-a-call-back-form'>
								<h3 className='mrt-0 mrb-20 solid-bottom-line'>
									Feel Free to Contact Us
								</h3>
								<p className='mrb-30'>
									Distinctively exploit optimal alignments for intuitive
									coordinate business applications technologies
								</p>
								<form action='#'>
									<div className='row'>
										<div className='col-lg-12'>
											<div className='form-group'>
												<input
													type='text'
													placeholder='Name'
													className='form-control'
												/>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='form-group'>
												<input
													type='text'
													placeholder='Phone'
													className='form-control'
												/>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='form-group'>
												<input
													type='email'
													placeholder='Email'
													className='form-control'
												/>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='form-group'>
												<select
													name='categories'
													className='custom-select-categories'
													required>
													<option value>Choose Service Type</option>
													<option>Computer</option>
													<option>Business</option>
													<option>Chemistry</option>
													<option>Physics</option>
													<option>Photoshop</option>
													<option>Management</option>
												</select>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='form-group mrb-0'>
												<button
													type='submit'
													className='cs-btn-one btn-primary-color btn-md btn-block'>
													Request for Submit
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
