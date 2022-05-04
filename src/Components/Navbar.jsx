import "./styles/Navbar.scss";
import Rightnav from "./Rightnav";
export default function Navbar(props) {
	return (
		<div id="navbar">
			<img id="logo" src="/logo.png" alt="logo"></img>
			<Rightnav></Rightnav>
		</div>
	);
}
