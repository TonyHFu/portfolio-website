import "./App.scss";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Leftnav from "./Components/Leftnav";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Leftnav></Leftnav>
			<main>
				<About></About>
				<Experiences></Experiences>
				<Projects></Projects>
			</main>
		</div>
	);
}

export default App;
