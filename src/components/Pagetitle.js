import React from 'react';
import { Link } from 'react-router-dom';
export default function Pagetitle({ title, breadcrumbs }) {
	return (
		<section className='page-title-section'>
			<div className='container'>
				<div className='row'>
					<div className='col-xl-12 text-center'>
						<div className='page-title-content'>
							<h3 className='title text-white'>{title}</h3>
							<nav aria-label='breadcrumb'>
								<ol className='breadcrumb'>
									{breadcrumbs.map((breadcrumb, index) => (
										<li
											className={`breadcrumb-item${
												index === breadcrumbs.length - 1 ? ' active' : ''
											}`}
											aria-current='page'
											key={index}>
											{breadcrumb.link ? (
												<Link to={breadcrumb.link}>{breadcrumb.label}</Link>
											) : (
												<span>{breadcrumb.label}</span>
											)}
										</li>
									))}
								</ol>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
