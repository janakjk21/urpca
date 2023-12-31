import React, { useEffect, useState } from 'react';

import Content1 from './Content1';
import '../../Assets/css/app-modern.min.css';
import NavSidebar from './NavSidebar';
export default function Dashboard() {
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth <= 768); // You can adjust the breakpoint
		};

		window.addEventListener('resize', handleResize);
		handleResize(); // Initial check

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className='wrapper'>
			<NavSidebar></NavSidebar>
			<Content1></Content1>
		</div>
	);
}
