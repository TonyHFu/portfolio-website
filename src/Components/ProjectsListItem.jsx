import "./styles/ProjectsListItem.scss";
export default function ProjectsListItem(props) {
	const { project } = props;
	return (
		<li className="projects-list-item">
			<h3 className="project-title">{project.title}</h3>
			<a href={project.link}>
				<img src={project.image}></img>
			</a>
			<p>{project.description}</p>
		</li>
	);
}
