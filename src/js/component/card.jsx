import React from "react";
const Card = () => {
	return (
		<div class="card mx-2">
			<img
				class="card-img-top"
				src="https://picsum.photos/200/250?random=4"
				alt="Card image cap"></img>
			<div class="card-body">
				<h5 class="card-title">Card title</h5>
				<p class="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" class="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
