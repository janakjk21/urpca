import React, { useEffect, useState } from 'react';
import Nav from './Nav';

import Sidebar from './Sidebar';
import Content1 from './Content1';
import '../../Assets/css/app-modern.min.css';
export default function NavSidebar() {
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
		<>
			{isSmallScreen ? (
				<>
					<Nav></Nav>
				</>
			) : (
				<>
					{' '}
					<Nav></Nav>
					<Sidebar></Sidebar>
				</>
			)}
		</>
	);
}
