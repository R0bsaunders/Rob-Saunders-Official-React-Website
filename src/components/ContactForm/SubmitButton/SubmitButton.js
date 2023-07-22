import React from "react";

export default function SubmitButton(props) {
	if (props.state === 0) {
		return (

			<button type="submit" className="onPurpleButton">
				Submit
			</button>

		);

	} else if (props.state === 1) {
		return (

			<button type="submit" className="sendingMessage">
				Sending Message<div className="dot-carousel"></div>
			</button>

		);
	};
};
