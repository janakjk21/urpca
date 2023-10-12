import React from 'react';
import Nav from './Nav';
import Footer from '../Footer';
import News from '../News/News';
import Tax from './Tax';
import News_Section from '../Home/News_Section';

export default function NewTaxhome() {2
	return (
		<div>
			<Nav></Nav>
			{/* <News></News> */}
			<News_Section></News_Section> <Footer></Footer>
		</div>
	);
}
