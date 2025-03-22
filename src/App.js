import "./App.css";
import Square from "./Square";
import ColorTextBox from "./ColorTextBox";
import { useState } from "react";

function App() {
	const [color, setColor] = useState("blue");
	console.log(color);
	return (
		<div className="App">
			<Square color={color} />
			<ColorTextBox color={color} setColor={setColor} />
		</div>
	);
}

export default App;
