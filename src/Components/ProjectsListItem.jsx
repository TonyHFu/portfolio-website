import "./styles/ProjectsListItem.scss";
export default function ProjectsListItem(props) {
	const { project } = props;
	return (
		<li className="projects-list-item">
			<h3>{project.title}</h3>
			<img src={project.image}></img>
			<p>{project.description}</p>
		</li>
	);
}
