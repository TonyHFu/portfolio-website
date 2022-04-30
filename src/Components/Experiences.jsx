import ExperiencesLeftNav from "./ExperiencesLeftNav";
import ExperiencesNav from "./ExperiencesNav";
import { useState } from "react";
import "./styles/Experiences.scss";

const experiences = {
	education: {
		WebDev: {
			institution: "Lighthouse Labs",
			program: "Web Development",
			dates: "Feb 2022 - May 2022",
			notes: [
				"3 months intensive coding bootcamp",
				"Learnt Javascript, Ruby on Rails, React, SQL, ExpressJS, NodeJS, and more",
			],
		},
		Medicine: {
			institution: "University of Alberta",
			program: "MD - Doctor of Medicine",
			dates: "2019 - January 2022",
			notes: [
				"Highest MCAT score for class (100%tile of global test-takers)",
				"Student Representative - Communications",
				"Completed clinical rotations in Psychiatry, General Surgery, Obstetrics & Gynecology, Urology, Rural Family Medicine, and ENT H&N Surgery",
			],
		},
		Statistics: {
			institution: "University of Calgary",
			program: "BSc - Statistics",
			dates: "2016 - 2018",
			notes: ["4.0 GPA (Top of Class)", "Programming in R"],
		},
		Psychology: {
			institution: "University of Alberta",
			program: "BSc specialization in Psychology",
			dates: "2010 - 2014",
			notes: [
				"including 9 courses in Math",
				"Top of class in Math 222 (Intro to Discrete Math) and PHIL 366 (Computers and Culture)",
			],
		},
	},
	work: {
		"Data Officer": {},
		"Medical Laboratory Assistant": {},
		"Research Assistant": {},
		Intern: {},
	},
};

export default function Experiences(props) {
	const [experienceType, setExperienceType] = useState("education");
	const [experienceInstance, setExperienceInstance] = useState(
		Object.keys(experiences[experienceType])[0]
	);

	const handleClickEducation = () => {
		setExperienceType("education");
	};
	const handleClickWork = () => {
		setExperienceType("work");
	};

	const experienceList = experiences[experienceType];
	const experienceListTabs = Object.keys(experienceList);

	return (
		<section id="experiences">
			<div id="experiences-link"></div>
			<article className="experiences">
				<ExperiencesNav
					handleClickEducation={handleClickEducation}
					handleClickWork={handleClickWork}
				></ExperiencesNav>
				<ExperiencesLeftNav
					experienceListTabs={experienceListTabs}
				></ExperiencesLeftNav>
			</article>
		</section>
	);
}
