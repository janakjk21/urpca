import React, { useRef, useEffect, useState } from 'react';
import aboutuus1 from '../../Assets/images/about/2.png';
import aboutuus2 from '../../Assets/images/about/2.png';
import { FaUser, FaThumbsUp, FaTrophy, FaBriefcase } from 'react-icons/fa';
import CountUp from 'react-countup';
export default function Feature_Section() {
	const iconSize = 50; // You can adjust the size as needed
	const iconColor = 'blue'; // You can use any valid color value

	const funFactRefs = useRef([]);
	const [shouldStartCountUp, setShouldStartCountUp] = useState([]);

	const observer = useRef(null);

	useEffect(() => {
		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const index = funFactRefs.current.indexOf(entry.target);
					if (index !== -1) {
						setShouldStartCountUp((prev) => {
							const updatedArray = [...prev];
							updatedArray[index] = true;
							return updatedArray;
						});
					}
				}
			});
		});

		funFactRefs.current.forEach((ref) => {
			observer.current.observe(ref);
		});

		return () => {
			observer.current.disconnect();
		};
	}, []);
	return (
		<>
			{/* Feature Section End */}
			{/* About Section Start */}
			<section className='about-section anim-object pdt-110 pdb-50 pdb-lg-80'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-md-12 col-xl-6'>
							<div className='about-image-block mrb-lg-60'>
								<img className='img-full' src={aboutuus1} alt='' />
							</div>
						</div>
						<div className='col-md-12 col-xl-6'>
							<h2 className='title-under-line mrb-70'>
								We have 32+{' '}
								<span className='f-weight-400'>Years Business Experiences</span>
							</h2>
							<h5 className='mrb-30 text-primary-color'>
								Trusted Business Consulting Service Provider
							</h5>
							<p className='mrb-40'>
								Distinctively exploit optimal alignments for intuitive. Quickly
								coordinate business applications through revolutionary catalysts
								for chang the Seamlessly optimal testing procedures whereas
								processes. Synerg stically evolve 2.0 technologies rather than
								just in web &amp; apps development optimal alignments for
								intuitive.
							</p>
							<div className='signature mrb-30'>
								{/* <img src='images/about/signature.png' alt='' /> */}
							</div>
							<a href='#' className='cs-btn-one btn-gradient-color btn-lg'>
								Read More
							</a>
						</div>
					</div>
					<div className='row mrt-100 mrt-lg-90'>
						<div className='col-md-6 col-lg-6 col-xl-3'>
							<div
								className={`funfact mrb-lg-30 mrb-60 ${
									funFactRefs.current[0] ? 'in-view' : ''
								}`}
								ref={(el) => (funFactRefs.current[0] = el)}>
								<div className='icon'>
									<FaUser size={iconSize} color={iconColor} />
								</div>
								<CountUp
									start={shouldStartCountUp[0] ? 0 : null}
									end={1500}
									duration={3}
									delay={0}>
									{({ countUpRef }) => (
										<h2 className='counter' ref={countUpRef} />
									)}
								</CountUp>
								<h5 className='title'>Happy Customers</h5>
							</div>
						</div>
						<div className='col-md-6 col-lg-6 col-xl-3'>
							<div
								className={`funfact mrb-lg-30 mrb-60 ${
									funFactRefs.current[1] ? 'in-view' : ''
								}`}
								ref={(el) => (funFactRefs.current[1] = el)}>
								<div className='icon'>
									<FaThumbsUp size={iconSize} color={iconColor} />
								</div>
								<CountUp
									start={shouldStartCountUp[1] ? 0 : null}
									end={2000}
									duration={3}
									delay={0}>
									{({ countUpRef }) => (
										<h2 className='counter' ref={countUpRef} />
									)}
								</CountUp>
								<h5 className='title'>Peoples Likes</h5>
							</div>
						</div>
						<div className='col-md-6 col-lg-6 col-xl-3'>
							<div
								className={`funfact mrb-lg-30 mrb-60 ${
									funFactRefs.current[2] ? 'in-view' : ''
								}`}
								ref={(el) => (funFactRefs.current[2] = el)}>
								<div className='icon'>
									<FaTrophy size={iconSize} color={iconColor} />
								</div>
								<CountUp
									start={shouldStartCountUp[2] ? 0 : null}
									end={150}
									duration={3}
									delay={0}>
									{({ countUpRef }) => (
										<h2 className='counter' ref={countUpRef} />
									)}
								</CountUp>
								<h5 className='title'>Awards Achieved</h5>
							</div>
						</div>
						<div className='col-md-6 col-lg-6 col-xl-3'>
							<div
								className={`funfact mrb-lg-30 mrb-60 ${
									funFactRefs.current[3] ? 'in-view' : ''
								}`}
								ref={(el) => (funFactRefs.current[3] = el)}>
								<div className='icon'>
									<FaBriefcase size={iconSize} color={iconColor} />
								</div>
								<CountUp
									start={shouldStartCountUp[3] ? 0 : null}
									end={50}
									duration={3}
									delay={0}>
									{({ countUpRef }) => (
										<h2 className='counter' ref={countUpRef} />
									)}
								</CountUp>
								<h5 className='title'>Experiences</h5>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
