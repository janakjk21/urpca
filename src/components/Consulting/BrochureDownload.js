import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

const BrochureDownload = () => {
	return (
		<div className='sidebar-widget'>
			<div className='brochure-download'>
				<h4 className='mrb-40 widget-title'>Brochure Download</h4>
				<p>Please click the download button to get the brochure file</p>
				<a href='#' className='cs-btn-one'>
					<span className='far fa-file-pdf mrr-10'>
						<FaFilePdf className='mrr-10' />
					</span>
					Download PDF
				</a>
			</div>
		</div>
	);
};

export default BrochureDownload;
