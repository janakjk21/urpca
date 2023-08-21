import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { FaArrowDown } from 'react-icons/fa';
const CustomAccordion = ({ items }) => {
	const accordionStyles = {
		cursor: 'pointer',
		color: '#253c61',
		position: 'relative',
		background: '#edf0fa',
		margin: 0,
		padding: '24px 20px 20px 70px',
		fontSize: '18px',
	};

	const activeStyles = {
		background: 'linear-gradient(-20deg, #0E90D5, #3032A2) !important',
		color: '#fff',
	};

	const triggerStyles = {
		// display: 'flex',

		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative',

		margin: 5,
		padding: '24px 20px',
		fontSize: '18px',
		borderBottom: '1px solid #ccc',
		cursor: 'pointer',
		background: 'linear-gradient(-20deg, #0E90D5, #3032A2)',
		borderRadius: '5px',
	};

	const arrowStyles = {
		fontSize: '20px',
		marginRight: '5px',
	};
	return (
		<>
			<div className='accordion'>
				{items.map((item, index) => (
					<Collapsible
						key={index}
						// transitionCloseTime='200'
						easing='ease-in-out'
						trigger={
							<div
								className='accordion-header active'
								style={{
									...triggerStyles,
								}}>
								<h4 style={{ color: 'black' }}>
									{' '}
									<FaArrowDown
										className={item.open ? 'active' : ''}
										style={arrowStyles}
									/>
									{`${item.title}`}
								</h4>
							</div>
						}>
						<div class='accordion-item'>
							<div class='accordion-header active'></div>
							<div class='accordion-body'>
								<p>{item.content}</p>
							</div>
						</div>
					</Collapsible>
				))}
			</div>
		</>
	);
};

export default CustomAccordion;
