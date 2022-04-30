export default function ExperiencesNav(props) {
	const { handleClickEducation, handleClickWork } = props;
	return (
		<div id="experiences-nav">
			<button onClick={handleClickEducation}>Education</button>
			<button onClick={handleClickWork}>Work</button>
		</div>
	);
}
