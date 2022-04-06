import React from "react";

let k = {
	marginLeft: "8px",
};

const Nav = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-Dark bg-dark">
			<div className="container-fluid">
				<a
					className="navbar-brand text-light text-right "
					style={{ marginLeft: "21%" }}
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
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul style={k} className="navbar-nav text-right">
						<li className="nav-item">
							<a
								className="nav-link active text-light"
								style={{ marginLeft: "651px" }}
								aria-current="page"
								href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light " href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-light" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item ">
							<a className="nav-link disabled text-light">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Nav;
