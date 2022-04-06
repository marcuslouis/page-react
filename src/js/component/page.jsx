import React from "react";

const Page = () => {
	let j = {
		marginTop: "192px",
	};
	return (
		<nav className="navbar navbar-expand-lg navbar-Dark bg-dark" style={j}>
			<div className="container-fluid">
				<a
					className="navbar-brand text-light"
					style={{ marginLeft: "20%" }}
					href="#">
					Start bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
		</nav>
	);
};
export default Page;
