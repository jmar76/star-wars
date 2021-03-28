import React, { useEffect, useState } from "react";
import Proptypes from "prop-types"; //Import PropTypes
import "../../styles/card.scss";
import Stars from "../component/stars.js";
function CardPlanets({ name, features }) {
	//console.log(name);

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
				src="https://i.ytimg.com/vi/r6UcxbuigU0/maxresdefault.jpg"
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
						Population: <strong> {result ? result.population : "loading..."}</strong>{" "}
					</div>
					<div>
						{" "}
						Terrain: <strong> {result ? result.terrain : "loading..."}</strong>
					</div>
					<div>
						{" "}
						Gravity:
						<strong> {result ? result.gravity : "loading..."}</strong>
					</div>
				</div>
				<div className="row justify-content-between margingButton">
					<span href="#" className="btn btn-warning rounded-0 ">
						<strong>READ MORE</strong>
					</span>
					<i className="fas fa-heart text-white btn btn-outline-dark rounded-0" />
				</div>
				<div className="row text-yellow center">
					{" "}
					<Stars />{" "}
				</div>
			</div>
		</div>
	);
}
CardPlanets.propTypes = {
	name: Proptypes.string,
	features: Proptypes.string
};

export default CardPlanets;
