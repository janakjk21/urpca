import React from 'react';
import Nav from './Nav';

import Sidebar from './Sidebar';
import Content1 from './Content1';
export default function Dashboard() {
	return (
		<div className='wrapper'>
			<Nav></Nav>
			<Sidebar></Sidebar>
			<Content1></Content1>
		</div>
	);
}
