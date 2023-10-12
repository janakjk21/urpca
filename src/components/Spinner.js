import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Spinner = () => {
	return (
		<div
			style={{
				position: 'fixed',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}>
			<InfinitySpin
				color='#536CE3'
				style={{
					width: '200px',
				}}
			/>
		</div>
	);
};

export default Spinner;
