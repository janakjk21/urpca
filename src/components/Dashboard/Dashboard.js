import React from 'react';
import Nav from './Nav';
import './css/app-modern.min.css';
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
