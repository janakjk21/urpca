import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarNav = ({ data }) => {
	return (
		<div className='service-link-list mb-30'>
			<ul>
				{data.map((item) => (
					<li key={item.id}>
						<Link to={`/consulting/${item.id}`}>
							<FaChevronRight /> {item.title}
						</Link>
					</li>
				))}
				{/* ... and so on */}
			</ul>
		</div>
	);
};

export default SidebarNav;
