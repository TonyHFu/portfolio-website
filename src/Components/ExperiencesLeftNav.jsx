export default function ExperiencesLeftNav(props) {
	const { experienceListTabs } = props;
	const tabButtons = experienceListTabs.map(tab => {
		return <button key={tab}>{tab}</button>;
	});

	return <div id="experiences-nav">{tabButtons}</div>;
}
