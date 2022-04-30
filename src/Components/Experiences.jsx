import ExperiencesLeftNav from "./ExperiencesLeftNav";
import ExperiencesNav from "./ExperiencesNav";
import { useState } from "react";
import "./styles/Experiences.scss";
import ExperiencesListItem from "./ExperiencesListItem";

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
			dates: "2019 - Jan 2022",
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
		"Cancer Data": {
			role: "Data Officer",
			place: "University of Calgary",
			dates: "June 2018 - Jun 2019",
			notes: [
				"Created a new REDCap database with over 200 columns and migrated 8000+ patient records",
				"Performed survival analysis using R",
				"Published in a peer-reviewed academic journal and presented at a conference",
				"Advised principal investigator on data science and AI",
			],
		},
		"Medical Lab": {
			role: "Medical Laboratory Assistant",
			place: "Calgary Laboratory Services",
			dates: "2016 - 2019",
			notes: [
				"Performed phlebotomy and electrocardiography on over 10,000 patients",
				"Created pleasant experiences for patients and helped them navigate through the healthcare system.",
			],
		},
		"X-ray Crystallography": {
			role: "Research Assistant",
			place: "University of Calgary",
			dates: "Summer 2017",
			notes: [
				"Performed biochemical experiments to grow crystals of GBS antibodies",
			],
		},
	},
};

export default function Experiences(props) {
	const [experienceType, setExperienceType] = useState("education");
	const [experienceInstance, setExperienceInstance] = useState(
		Object.keys(experiences[experienceType])[0]
	);

	const handleClickEducation = () => {
		setExperienceType("education");
		setExperienceInstance(Object.keys(experiences.education)[0]);
	};
	const handleClickWork = () => {
		setExperienceType("work");
		setExperienceInstance(Object.keys(experiences.work)[0]);
	};

	const handleClickInstance = instance => {
		setExperienceInstance(instance);
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
				<div id="experience-display">
					<ExperiencesLeftNav
						experienceListTabs={experienceListTabs}
						handleClickInstance={handleClickInstance}
					></ExperiencesLeftNav>
					<ExperiencesListItem
						experienceDetails={experiences[experienceType][experienceInstance]}
						experienceType={experienceType}
					></ExperiencesListItem>
				</div>
			</article>
		</section>
	);
}
