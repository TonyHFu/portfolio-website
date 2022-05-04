import "./styles/ExperiencesNav.scss";
import classNames from "classnames";

export default function ExperiencesNav(props) {
	const { handleClickEducation, handleClickWork, experienceType } = props;
	return (
		<div id="experiences-nav">
			<button
				className={classNames("experience-type-button", {
					selected: experienceType === "education",
				})}
				onClick={handleClickEducation}
			>
				Education
			</button>
			<button
				className={classNames("experience-type-button", {
					selected: experienceType === "work",
				})}
				onClick={handleClickWork}
			>
				Work
			</button>
		</div>
	);
}
