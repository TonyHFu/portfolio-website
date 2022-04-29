import "./App.scss";
import About from "./Components/About";
import Leftnav from "./Components/Leftnav";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<Leftnav></Leftnav>
			<main>
				<About></About>
			</main>
		</div>
	);
}

export default App;
