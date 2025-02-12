

import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";

import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import PropTypes from "prop-types";
import './footerStyle.css'


const socialLinks = [
	{ icon: <MdOutlinePhoneAndroid />, href: "tel:+989383211689" },
	{ icon: <IoMailOutline />, href: "mailto:amirhossein.maleki1990@gmail.com" },
	{ icon: <FaLinkedin />, href: "https://www.linkedin.com/in/amirhmalekijoo1990/" },
	{ icon: <FaTelegram />, href: "https://t.me/amirhmalekijoo" },
];

const infoList = [
	// { label: "Born in", value: "Iran" },
	{ label: "Experience:", value: "+10 Years" },
	{ label: "Date of Birth:", value: "16 . 12 . 1990" },
];

const ProfileKeyInfo = ({ data }) => (
	<div>
		{infoList.map((info, i) => (
			<p className="fs-4 mb-1" key={i}>
				<span className="opacity-50 me-2 fw-light">{info.label}</span>
				<strong>{info.value}</strong>
			</p>
		))}
	</div>
);

ProfileKeyInfo.propTypes = {
	data: PropTypes.array.isRequired,
};

const SocialLinks = ({ links }) => (
	<Nav className="ezy__header9-social d-inline-flex mt-4">
		{links.map((link, i) => (
			<li key={i}>
				<a href={link.href}>
					{link.icon}
				</a>
			</li>
		))}
	</Nav>
);

SocialLinks.propTypes = {
	links: PropTypes.array.isRequired,
};

const HeroHeader = () => {
	return (
		<section className="ezy__header9 dark">
			<Container className="position-relative">
				<Row className="align-items-center justify-content-center">
					<Col lg={5} xl={4} className="mb-4 mb-lg-0 text-center text-lg-start">
					</Col>
					<Col lg={7} className="ps-lg-4 ps-xl-5">
						<p className="ezy__header9-sub-heading mb-2 opacity-50">
							AI ML Specialist | Researcher | Coach and Mentor
						</p>
						<h2 className="ezy__header9-heading mb-4">Amir H. Malekijoo</h2>
						<p className="ezy__header9-sub-heading opacity-75" style={{'text-align': 'justify'}}>
                        This website's design evokes the neon-drenched streets of my childhood, reminiscent of Grand Theft Auto: Vice City.
						That game sparked my creativity then, and I now channel that same passion into cutting-edge AI and machine learning projects. 
						My journey began with a BSc in Software Engineering, followed by an MSc in AI and Robotics.  
						Over the years, I've explored Interactive AI, Human-Computer Interaction (HCI), and generative AI,
						integrating core concepts and methods into research that pushes the boundaries of technology.  
						Whether I'm coaching students and young developers, developing advanced AI models, or writing research papers, I thrive on solving complex problems and bringing ideas to fruition.  When I'm not coding or mentoring, I enjoy playing video games or brainstorming the next innovation. Welcome to my digital space!
						</p>
						<p className="ezy__header9-sub-heading opacity-75" style={{'text-align': 'justify'}}>
						Do not hesitate to contact me! I am ready to work on academic or industrial ideas. Moreover, if you need a mentor for your academic life or a coach for your projects, I am more than happy to pass on my experience.
						</p>
						<div className="mt-5 ms-lg-5 p-3 px-md-5 py-lg-4 border-start border-secondary ezy__header9-meta">
							<ProfileKeyInfo data={infoList} />
							<SocialLinks links={socialLinks} />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};


export default HeroHeader;