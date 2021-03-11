import "./App.css";
import { Button } from "react-bootstrap";

function App() {
	return (
		<div className="backgroundContainer">
			<div className="centerVertical">
				<h1>Welcome to F.R.U.I.T.</h1>
				<h3>
					This website is currently under development, but in the
					meantime feel free to visit our shop!
				</h3>
				<Button href="https://urban-greenworks-inc.square.site/">
					SHOP
				</Button>
			</div>
		</div>
	);
}

export default App;
