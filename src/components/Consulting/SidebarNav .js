import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarNav = () => {
	return (
		<div className='service-link-list mb-30'>
			<ul>
				<li>
					<Link to='/consulting'>
						<FaChevronRight /> Business Maintenance
					</Link>
				</li>
				<li>
					<Link to='/consulting/finance'>
						<FaChevronRight /> Finance &amp; Management
					</Link>
				</li>
				<li>
					<Link to='/consulting/finance'>
						<FaChevronRight /> Some Other Category
					</Link>
				</li>
				{/* ... and so on */}
			</ul>
		</div>
	);
};

export default SidebarNav;
