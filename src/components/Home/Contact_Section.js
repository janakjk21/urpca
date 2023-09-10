import React, { useState } from 'react';
import contactus_background from '../../Assets/images/bg/vid.jpg';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		serviceType: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// You can perform form submission logic here
		console.log('Form data submitted:', formData);
		// Reset the form if needed
		setFormData({
			name: '',
			phone: '',
			email: '',
			serviceType: '',
		});
	};

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
								<form onSubmit={handleSubmit}>
									<div className='row'>
										<div className='col-lg-12'>
											<div className='form-group'>
												<input
													type='text'
													placeholder='Name'
													className='form-control'
													name='name'
													value={formData.name}
													onChange={handleChange}
													required
												/>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='form-group'>
												<input
													type='text'
													placeholder='Phone'
													className='form-control'
													name='phone'
													value={formData.phone}
													onChange={handleChange}
													required
												/>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='form-group'>
												<input
													type='email'
													placeholder='Email'
													className='form-control'
													name='email'
													value={formData.email}
													onChange={handleChange}
													required
												/>
											</div>
										</div>
										<div className='col-lg-12'>
											<div className='form-group'>
												<select
													name='serviceType'
													className='custom-select-categories'
													value={formData.serviceType}
													onChange={handleChange}
													required>
													<option value=''>Choose Service Type</option>
													<option value='Computer'>Computer</option>
													<option value='Business'>Business</option>
													<option value='Chemistry'>Chemistry</option>
													<option value='Physics'>Physics</option>
													<option value='Photoshop'>Photoshop</option>
													<option value='Management'>Management</option>
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
