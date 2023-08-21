import React, { useEffect, useRef, useState } from 'react';
import team1 from '../../Assets/images/about/ab3.jpg';
import image2 from '../../Assets/images/about/ab3.jpg';
import {
	FaFacebook,
	FaTwitter,
	FaInstagram,
	FaGooglePlus,
} from 'react-icons/fa';
export default function Team_Title_section() {
	return (
		<>
			{/*Team Section Titile End */}
			{/*Team Section Start*/}

			<section
				className='pdt-110 pdb-150 section-white-typo'
				data-background='images/bg/5.jpg'
				data-overlay-dark={8}>
				<div
					className='section-title text-center wow fadeInUp'
					data-wow-delay='0ms'
					data-wow-duration='1500ms'>
					<div className='container'>
						<div className='row'>
							<div className='col' />
							<div className='col-lg-8 col-xl-6'>
								<div className='section-title-block'>
									<h5 className='text-primary-color anim-box-objects line-both-side mrb-15'>
										Meet Our Team
									</h5>
									<h2>We Have a Professional Consulting Team</h2>
								</div>
							</div>
							<div className='col' />
						</div>
					</div>
				</div>
			</section>
			<section
				className='pdt-0 pdb-210 pdb-md-110 minus-mrt-130 bg-pos-center-bottom'
				data-background='images/bg/abs-bg1.png'>
				<div className='section-content'>
					<div className='container'>
						<div className='row'>
							<SingleTeam
								imgSrc={team1}
								name='Jack Mehoff'
								designation='Engineer'
							/>
							<SingleTeam
								imgSrc={team1}
								name='Jack Mehoff'
								designation='Engineer'
							/>
							<SingleTeam
								imgSrc={team1}
								name='Jack Mehoff'
								designation='Engineer'
							/>
							<SingleTeam
								imgSrc={team1}
								name='Jack Mehoff'
								designation='Engineer'
							/>
						</div>
						<ProfessionalSkillsSection></ProfessionalSkillsSection>
					</div>
				</div>
			</section>
		</>
	);
}

const SingleTeam = ({ imgSrc, name, designation }) => {
	return (
		<div className='col-md-6 col-lg-6 col-xl-3'>
			<div className='team-block mrb-30'>
				<div className='team-upper-part'>
					<img className='img-full' src={imgSrc} alt='' />
				</div>
				<div className='team-bottom-part'>
					<h4 className='team-title mrb-5'>
						<a href='page-single-team.html'>{name}</a>
					</h4>
					<h6 className='designation'>{designation}</h6>
					<ul className='social-list vertical-style list-sm'>
						<li>
							<a href='#'>
								<FaFacebook />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaTwitter />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaInstagram />
							</a>
						</li>
						<li>
							<a href='#'>
								<FaGooglePlus />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

const ProfessionalSkillsSection = () => {
	const skillsData = [
		{ title: 'Business Consulting', percentage: 85, speed: 2100 },
		{ title: 'Market Analysis', percentage: 96, speed: 2000 },
		{ title: 'Money Management', percentage: 90, speed: 1900 },
		{ title: 'Business Growth', percentage: 88, speed: 1800 },
	];

	const skillRefs = useRef([]);
	const observer = useRef(null);

	useEffect(() => {
		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = skillRefs.current.indexOf(entry.target);
					if (index !== -1) {
						const { percentage, speed } = skillsData[index];
						let currentPercentage = 0;
						const interval = setInterval(() => {
							if (currentPercentage <= percentage) {
								const skillPercentageElem =
									skillRefs.current[index].querySelector('.count-box');
								const progressBarElem =
									skillRefs.current[index].querySelector('.progress-line');

								if (skillPercentageElem && progressBarElem) {
									skillPercentageElem.textContent = currentPercentage + '%';
									progressBarElem.style.width = currentPercentage + '%';
									currentPercentage++;
								}
							} else {
								clearInterval(interval);
							}
						}, speed / percentage);
					}
				}
			});
		});

		skillRefs.current.forEach((ref) => {
			observer.current.observe(ref);
		});

		return () => {
			observer.current.disconnect();
		};
	}, []);

	const faqData = [
		{
			question: "What happens during Freshers' Week?",
			answer: 'Leverage agile frameworks to provide a robust synopsis...',
		},
		{
			question: 'What is the transfer application process?',
			answer: 'Leverage agile frameworks to provide a robust synopsis...',
		},
		{
			question: 'Why should I attend community college?',
			answer: 'Leverage agile frameworks to provide a robust synopsis...',
		},
	];

	return (
		<div className='row align-items-center pdt-80'>
			<div className='col-md-12 col-xl-6'>
				<h5 className='mrb-15 text-primary-color sub-title-side-line'>
					Professional Skills
				</h5>
				<h2 className='mrb-30'>
					We Help You to Grow <br />
					<span className='f-weight-400'>Your Business</span> Quickly
				</h2>
				<p className='mrb-30'>
					Distinctively exploit optimal alignments for intuitive. Quickly
					coordinate business applications through revolutionary cataly
					technologies rather than development optimal alignments for intuitive.
				</p>
				<div className='skills mrb-lg-60'>
					{skillsData.map((skill, index) => (
						<div
							className='skill-item'
							key={index}
							ref={(el) => (skillRefs.current[index] = el)}>
							<div className='skill-header'>
								<h6 className='skill-title'>{skill.title}</h6>
								<div className='skill-bar'>
									<div className='bar-inner'>
										<div
											className='bar progress-line'
											style={{
												width: `${skill.percentage}%`,
												backgroundColor: 'blue',
											}}
										/>
									</div>
								</div>
								<div className='skill-percentage'>
									<div className='count-box'>0%</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			{/* faq quesiton */}
			<div
				className='col-md-12 col-xl-6 wow fadeInLeft mrb-lg-40'
				data-wow-delay='0ms'
				data-wow-duration='1000ms'>
				<h5 className='mrb-15 text-primary-color sub-title-side-line'>
					Some Important FAQ's
				</h5>
				<h2 className='mrb-20'>Common Frequently Asked Questions</h2>
				<div className='faq-block'>
					<div className='accordion'>
						{faqData.map((faq, index) => (
							<FAQItem
								key={index}
								question={faq.question}
								answer={faq.answer}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className={`accordion-item ${isOpen ? 'active' : ''}`}>
			<div className='accordion-header' onClick={toggleAccordion}>
				<h5 className='title'>{`Q: ${question}`}</h5>
				<span className={`fas fa-arrow-${isOpen ? 'down' : 'right'}`} />
			</div>
			{isOpen && (
				<div className='accordion-body'>
					<p>{`A: ${answer}`}</p>
				</div>
			)}
		</div>
	);
};
