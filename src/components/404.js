import React from 'react';

export default function () {
	return (
		<div>
			<div
				className='error-area vh d-flex'
				data-background='images/bg/404.jpg'
				data-overlay-light={94}>
				<div className='container'>
					<div className='row'>
						<div className='col-xl-12'>
							<div className='error-inner text-center'>
								<h1 className='error-title'>
									4<span className='text-primary-color'>0</span>4
								</h1>
								<h2 className='error-text'>Sorry, something went wrong!</h2>
								<p>
									This page is temporarily unavailable due to maintenance. We
									will back very soon thanks for your patien
								</p>
								<a
									className='cs-btn-one btn-md btn-primary-color'
									href='index.html'>
									Return Home
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>2
		</div>
	);
}
