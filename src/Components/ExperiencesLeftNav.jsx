import "./styles/ExperiencesLeftNav.scss";
export default function ExperiencesLeftNav(props) {
	const { experienceListTabs, handleClickInstance } = props;
	const tabButtons = experienceListTabs.map(tab => {
		return (
			<button
				className="experiences-list-tab"
				key={tab}
				onClick={() => handleClickInstance(tab)}
			>
				{tab}
			</button>
		);
	});

	return <div id="experiences-left-nav">{tabButtons}</div>;
}
