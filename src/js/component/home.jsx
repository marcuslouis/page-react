import React from "react";
import Nav from "./nav.jsx";
import Card from "./card.jsx";
import Page from "./page.jsx";
import Jumbo from "./jumbo.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	let m = {
		width: "80%",
		marginInline: "10%",
	};
	let r = {
		marginTop: "20px",
	};
	return (
		<div>
			<Nav />
			<div className="container" style={r}>
				<Jumbo />
				<div className="card-group" style={m}>
					<Card /> <Card /> <Card /> <Card />
				</div>
			</div>
			<Page />
		</div>
	);
};

export default Home;
