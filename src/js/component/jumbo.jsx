import React from "react";

const Jumbo = () => {
	let m = {
		width: "80%",
		margin: "0 auto",
	};
	return (
		<div className="jumbotron bg-light" style={m}>
			<h1 className="display-4">Hello, world!</h1>
			<p className="lead">
				This is a simple hero unit, a simple jumbotron-style component
				for calling extra attention to featured content or information.
			</p>
			<hr className="my-4"></hr>
			<p>
				It uses utility classNamees for typography and spacing to space
				content out within the larger container.
			</p>
			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Learn more
				</a>
			</p>
		</div>
	);
};
export default Jumbo;
