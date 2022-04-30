import "./styles/ExperiencesListItem.scss";
export default function ExperiencesListItem(props) {
	const { experienceDetails, experienceType } = props;

	let experienceDisplay;
	if (experienceType === "education") {
		const { institution, program, dates, notes } = experienceDetails;
		const notesMap = notes.map((note, i) => {
			return <li key={i}>{note}</li>;
		});
		experienceDisplay = (
			<>
				<p>{institution}</p>
				<p>{program}</p>
				<p>{dates}</p>
				<ul>{notesMap}</ul>
			</>
		);
	} else {
		const { role, place, dates, notes } = experienceDetails;
		const notesMap = notes.map((note, i) => {
			return <li key={i}>{note}</li>;
		});
		experienceDisplay = (
			<>
				<p>{role}</p>
				<p>{place}</p>
				<p>{dates}</p>
				<ul>{notesMap}</ul>
			</>
		);
	}

	return <article id="experiences-list-item">{experienceDisplay}</article>;
}
