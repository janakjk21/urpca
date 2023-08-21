import React from 'react';
import Nav from '../Nav';
import Header_Section from './Header_Section';
import Feature_Section from './Feature_Section';
import Team_Title_section from './Team_Title_section';
import Footer from '../Footer';

import consultingarea1 from '../../Assets/images/case-study/case-study_01.jpg';

import contactus_background from '../../Assets/images/bg/vid.jpg';
import contactus_background1 from '../../Assets/images/bg/3.jpg';
import { FaLightbulb, FaUser } from 'react-icons/fa';
import { FaLongArrowAltRight } from 'react-icons/fa';

import news1 from '../../Assets/images/news/01.jpg';
import Home_Section from './Home_Section';
import Service_Section from './Service_Section';
import Consulting_section from './Consulting_section';
import News_Section from './News_Section';
import Contact_Section from './Contact_Section';

export default function Hero() {
	return (
		<div>
			<Nav></Nav>
			<Header_Section></Header_Section>
			<Home_Section></Home_Section>
			<Feature_Section></Feature_Section>
			<Service_Section></Service_Section>

			<Team_Title_section></Team_Title_section>
			<Contact_Section></Contact_Section>
			<Consulting_section></Consulting_section>

			<News_Section></News_Section>
			<Footer></Footer>
		</div>
	);
}
