import React from "react";
import Nav from "./nav.jsx";
import Card from "./card.jsx";
import Page from "./page.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	let m = {
		width: "50%",
		margin: "0 auto",
	};
	return (
		<div>
			<Nav />
			<div className="jumbotron text-center bg-light" style={m}>
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					This is a simple hero unit, a simple jumbotron-style
					component for calling extra attention to featured content or
					information.
				</p>
				<hr className="my-4"></hr>
				<p>
					It uses utility classNamees for typography and spacing to
					space content out within the larger container.
				</p>
				<p className="lead">
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Learn more
					</a>
				</p>
			</div>
			<Card />
			<Page />
		</div>
	);
};

export default Home;
