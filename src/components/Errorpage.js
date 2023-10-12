import React, { useState, useEffect } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const Errorpage = ({ message }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
		}, 5000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{show && (
				<div
					style={{
						position: 'fixed',
						bottom: '0',
						right: '0',
						transform: 'translate(0, 0)',
						maxWidth: '500px',
						zIndex: '9999',
						backgroundColor: '#ff4d4f',
					}}
					className='alert alert-dismissible fade show position-fixed bottom-0  translate-middle-x'
					role='alert'>
					<div>
						<FaExclamationTriangle style={{ marginRight: '10px' }} />
						{message}
					</div>
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='alert'
						aria-label='Close'
						onClick={() => setShow(false)}></button>
				</div>
			)}
		</>
	);
};

export default Errorpage;
