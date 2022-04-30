import ProjectsListItem from "./ProjectsListItem";
const projects = {
	"Machine Learning": [
		{
			title: "Self driving car",
			image: "/projects/car_finishes.gif",
			description:
				"Deep Q Learning in Tensorflow to learn a custom driving game created with ThreeJS and CannonJS ",
		},
		{
			title: "Digit Recognizer",
			image: "/projects/digit.png",
			description:
				"Digit classifier trained on MNIST dataset with canvas for frontend drawing and flask python server for prediction",
		},
	],
	"Bootcamp Group Projects": [
		{
			title: "Bridge",
			image: "/projects/bridge.png",
			description:
				"A language exchange chat app based on HelloTalk using React frontend, Rails backend, and Action Cables for Websockets",
		},
		{
			title: "Burger Place",
			image: "/projects/burger_place.png",
			description:
				"A food ordering app built with an express server and JQuery Ajax calls",
		},
	],
	"Bootcamp Individual Projects": [
		{ title: "Jungle", image: "", description: "" },
		{ title: "Scheduler", image: "", description: "" },
		{ title: "Tweeter", image: "", description: "" },
		{ title: "TinyApp", image: "", description: "" },
	],
};

export default function Projects(props) {
	return (
		<section id="projects">
			<div id="projects-link"></div>
		</section>
	);
}
