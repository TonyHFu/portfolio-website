import ProjectsListItem from "./ProjectsListItem";
import "./styles/Projects.scss";
const projects = {
	"Machine Learning": [
		{
			title: "Self driving car",
			image: "/projects/car_finishes.gif",
			description:
				"Deep Q Learning in Tensorflow to learn a custom driving game created with ThreeJS and CannonJS ",
			link: "https://github.com/TonyHFu/Driving-game-AI",
		},
		{
			title: "Digit Recognizer",
			image: "/projects/digit.png",
			description:
				"Digit classifier trained on MNIST dataset with canvas for frontend drawing and flask python server for prediction",
			link: "https://github.com/TonyHFu/digit-recognizer",
		},
	],
	"Bootcamp Group Projects": [
		{
			title: "Bridge",
			image: "/projects/bridge.png",
			description:
				"A language exchange chat app based on HelloTalk using React frontend, Rails backend, and Action Cables for Websockets",
			link: "https://github.com/TonyHFu/Chat-app-prototype",
		},
		{
			title: "Burger Place",
			image: "/projects/burger place.png",
			description:
				"A food ordering app built with an express server and JQuery Ajax calls",
			link: "https://github.com/TonyHFu/LHL-midterm",
		},
	],
	"Bootcamp Solo Projects": [
		{
			title: "Jungle",
			image: "/projects/jungle.png",
			description: "A marketplace app built using Ruby on Rails",
			link: "https://github.com/TonyHFu/Jungle",
		},
		{
			title: "Scheduler",
			image: "/projects/scheduler.png",
			description: "A single-page-application built with React",
			link: "https://github.com/TonyHFu/Interview-Scheduler",
		},
		{
			title: "Tweeter",
			image: "/projects/tweeter.png",
			description: "A twitter clone built using JQuery",
			link: "https://github.com/TonyHFu/tweeter",
		},
		{
			title: "TinyApp",
			image: "/projects/tinyapp.png",
			description: "First project - a tiny URL clone",
			link: "https://github.com/TonyHFu/tinyapp",
		},
	],
};

const projectsList = Object.keys(projects).map((projectType, i) => {
	return (
		<ul className="projects-type" key={i}>
			<h2>{projectType}</h2>
			{projects[projectType].map(project => {
				return <ProjectsListItem project={project}></ProjectsListItem>;
			})}
		</ul>
	);
});

export default function Projects(props) {
	return (
		<section id="projects">
			<div id="projects-link"></div>
			<div className="projects-list">{projectsList}</div>
		</section>
	);
}
