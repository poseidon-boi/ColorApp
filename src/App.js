import "./App.css";
import Square from "./Square";
import ColorTextBox from "./ColorTextBox";
import { useState } from "react";

function App() {
	const [color, setColor] = useState("");
	const square = document.querySelector(".square");
	const [squareTextColor, setSquareTextColor] = useState("whitesmoke");
	const handleSquareTextColorChange = () => {
		setSquareTextColor(() => {
			if (color === "") return "whitesmoke";
			const colorRGB = window
				.getComputedStyle(square)
				.getPropertyValue("background-color");
			const startingVal = colorRGB.includes("rgba") ? 5 : 4;
			const colorBrightness = colorRGB
				.slice(startingVal, -1)
				.split(",")
				.map((str) => Number(str))
				.reduce((acc, curr) => acc + curr, 0);
			console.log(colorBrightness);
			if (isNaN(colorBrightness)) return "whitesmoke";
			else if (colorBrightness >= 383) return "black";
			else return "whitesmoke";
		});
	};
	return (
		<div className="App">
			<Square color={color} squareTextColor={squareTextColor} />
			<ColorTextBox
				color={color}
				setColor={setColor}
				handleSquareTextColorChange={handleSquareTextColorChange}
			/>
		</div>
	);
}

export default App;
