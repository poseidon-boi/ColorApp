import React from "react";

const ColorTextBox = ({ color, setColor }) => {
	return (
		<div className="color-textbox">
			<form className="color">
				<label htmlFor="enterColor">Enter color</label>
				<input
					autoFocus
					type="text"
					id="inputColor"
					placeholder="Enter color"
					value={color}
					onChange={(e) => setColor(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default ColorTextBox;
