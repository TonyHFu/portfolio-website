import ProjectsListItem from "./ProjectsListItem";
import "./styles/Projects.scss";
const projects = {
	"Machine Learning": [
		{
			title: "Self driving car",
			image: "/projects/car_finishes.gif",
			description:
				"Deep Q Learning in Tensorflow to learn a custom driving game created with ThreeJS and CannonJS ",
			link: "https://self-driving-ai-dql.netlify.app/",
			github: "https://github.com/TonyHFu/Driving-game-AI",
			hosted: "https://self-driving-ai-dql.netlify.app/",
		},
		{
			title: "Digit Recognizer",
			image: "/projects/mnist.png",
			description:
				"Digit classifier trained on MNIST dataset with canvas for frontend drawing and flask python server for prediction",
			link: "https://github.com/TonyHFu/digit-recognizer",
			github: "https://github.com/TonyHFu/digit-recognizer",
			hosted: "https://self-driving-ai-dql.netlify.app/",
		},
	],
	"Bootcamp Group Projects": [
		{
			title: "Bridge",
			image: "/projects/bridge.png",
			description:
				"A language exchange chat app based on HelloTalk using React frontend, Rails backend, and Action Cables for Websockets",
			link: "https://github.com/TonyHFu/Chat-app-prototype",
			github: "https://github.com/TonyHFu/Chat-app-prototype",
			hosted: "https://self-driving-ai-dql.netlify.app/",
		},
		{
			title: "Burger Place",
			image: "/projects/burger place.png",
			description:
				"A food ordering app built with an express server and JQuery Ajax calls",
			link: "https://github.com/TonyHFu/LHL-midterm",
			github: "https://github.com/TonyHFu/LHL-midterm",
			hosted: "https://self-driving-ai-dql.netlify.app/",
		},
	],
	"Bootcamp Solo Projects": [
		{
			title: "Jungle",
			image: "/projects/jungle.png",
			description: "A marketplace app built using Ruby on Rails",
			link: "https://github.com/TonyHFu/Jungle",
			github: "https://github.com/TonyHFu/Jungle",
			hosted: "https://self-driving-ai-dql.netlify.app/",
		},
		{
			title: "Scheduler",
			image: "/projects/scheduler.png",
			description: "A single-page-application built with React",
			link: "https://lighthouse-scheduler.netlify.app/",
			github: "https://github.com/TonyHFu/Interview-Scheduler",
			hosted: "https://lighthouse-scheduler.netlify.app/",
		},
		// {
		// 	title: "Tweeter",
		// 	image: "/projects/tweeter.png",
		// 	description: "A twitter clone built using JQuery",
		// 	link: "https://github.com/TonyHFu/tweeter",
		// },
		// {
		// 	title: "TinyApp",
		// 	image: "/projects/tinyapp.png",
		// 	description: "First project - a tiny URL clone",
		// 	link: "https://github.com/TonyHFu/tinyapp",
		// },
	],
};

const projectsList = Object.keys(projects).map((projectType, i) => {
	return (
		<ul className="projects-type" key={i}>
			<h2 className="project-type-heading">{projectType}</h2>
			{projects[projectType].map((project, j) => {
				return <ProjectsListItem key={j} project={project}></ProjectsListItem>;
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
