import React, { useState } from "react";

const Square = ({ color, squareTextColor }) => {
	let currentText = color === "" ? "No color" : color;
	return (
		<div className="square" style={{ backgroundColor: color }}>
			<div style={{ color: squareTextColor }}>{currentText}</div>
		</div>
	);
};

export default Square;
