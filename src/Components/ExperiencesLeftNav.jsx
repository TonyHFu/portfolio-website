import "./styles/ExperiencesLeftNav.scss";
import classNames from "classnames";

export default function ExperiencesLeftNav(props) {
	const { experienceListTabs, handleClickInstance, experienceInstance } = props;
	const tabButtons = experienceListTabs.map(tab => {
		return (
			<button
				className={classNames("experiences-list-tab", {
					selected: experienceInstance === tab,
				})}
				key={tab}
				onClick={() => handleClickInstance(tab)}
			>
				{tab}
			</button>
		);
	});

	return <div id="experiences-left-nav">{tabButtons}</div>;
}
