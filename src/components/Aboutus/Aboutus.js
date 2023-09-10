import React from 'react';
import Nav from '../Nav';
import Feature_Section from '../Home/Feature_Section';
import Home_Section from '../Home/Home_Section';
import Team_Title_section from '../Home/Team_Title_section';
import Pagetitle from '../Pagetitle';
import Footer from '../Footer';
import Personaldetails from '../personaldetails/Personaldetails';

export default function Aboutus() {
	const pageTitle = 'About Us';

	const breadcrumbs = [{ label: 'Home', link: '/' }, { label: 'About Us' }];
	return (
		<>
			<Nav></Nav>
			<Pagetitle title={pageTitle} breadcrumbs={breadcrumbs} />

			<Home_Section></Home_Section>
			<Feature_Section></Feature_Section>
			<Team_Title_section></Team_Title_section>
			{/* <Personaldetails></Personaldetails> */}
			<Footer></Footer>
		</>
	);
}
