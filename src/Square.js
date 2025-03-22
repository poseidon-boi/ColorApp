import React, { useState } from "react";

const Square = ({ color }) => {
	let currentText = color === "" ? "No color" : color;
	return (
		<div className="square" style={{ backgroundColor: color }}>
			<div>{currentText}</div>
		</div>
	);
};

export default Square;
