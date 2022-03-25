import React from "react";
import PropTypes from 'prop-types'
import propTypes from "prop-types";
const Card = (props) => {
	return (
		<div class="card mx-2">
			<img
				class="card-img-top"
				src={props.img}
				alt="Card image cap"></img>
			<div class="card-body">
				<h5 class="card-title">{props.title}</h5>
				<p class="card-text">
					{props.text}
				</p>
				<a href="#" class="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
Card.PropTypes={
	text: propTypes.string,
	img: propTypes.string,
	title: propTypes.string
}
export default Card;
