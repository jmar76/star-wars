import React, { useEffect, useState } from "react";
import Proptypes from "prop-types"; //Import PropTypes
import "../../styles/card.scss";
import Stars from "../component/stars.js";
function CardStarship({ name, features }) {
	//console.log(imageSource);
	const [result, setResult] = useState();

	//console.log(result);

	useEffect(() => {
		fetch(features)
			.then(response => response.json())

			.then(data => setResult(data.result.properties));
	}, []);

	return (
		<div className="card dark" style={{ width: "21rem" }}>
			<img
				src="https://p4.wallpaperbetter.com/wallpaper/903/382/518/t-70-x-wing-fighter-star-wars-battlefront-ii-4k-wallpaper-preview.jpg"
				className="card-img-top"
				alt="..."
				width="100%"
				height="199px"
			/>
			<div className="card-body text-white">
				<h5 className="card-title text">{name}</h5>
				<div className="card-text size">
					<div>
						{" "}
						Passengers:
						<strong> {result ? result.passengers : "loading..."}</strong>
					</div>
					<div>
						{" "}
						Model: <strong> {result ? result.model : "loading..."}</strong>{" "}
					</div>
					<div>
						{" "}
						Starship class: <strong> {result ? result.starship_class : "loading..."}</strong>
					</div>
				</div>
				<div className="row justify-content-between margingButton">
					<span href="#" className="btn btn-warning rounded-0">
						<strong>READ MORE</strong>
					</span>

					<i className="fas fa-heart text-white btn btn-outline-danger rounded-0" />
				</div>
				<div className="row text-yellow center">
					{" "}
					<Stars />{" "}
				</div>
			</div>
		</div>
	);
}
CardStarship.propTypes = {
	name: Proptypes.string,
	features: Proptypes.string
};

export default CardStarship;
