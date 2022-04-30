import "./App.scss";
import About from "./Components/About";
import Experiences from "./Components/Experiences";
import Leftnav from "./Components/Leftnav";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Leftnav></Leftnav>
			<main>
				<About></About>
				<br></br>
				<Experiences></Experiences>
			</main>
		</div>
	);
}

export default App;
