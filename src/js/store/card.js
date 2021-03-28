import React, { useEffect, useState, useContext } from "react";
import Proptypes from "prop-types"; //Import PropTypes
import "../../styles/card.scss";
import { Link } from "react-router-dom";
import { Context } from "./appContext";
import Stars from "../component/stars.js";
function Card({ name, features, id }) {
	//console.log(features);
	//console.log(name);
	const { store, actions } = useContext(Context);

	const [result, setResult] = useState();
	const [views, setViews] = useState(0); //este useState era para las vistas views de las cards, se hará con base de datos

	//const [namesArray, setNamesArray] = useState([]);
	//console.log(views);
	//console.log(result);
	const [color, setColor] = useState(<i className="fas fa-heart text-white btn btn-outline-danger  rounded-100" />);
	const [colors, setColors] = useState(
		// <i className="far fa-thumbs-up text-white btn btn-outline-danger rounded-100" />
		"btn btn-outline-danger rounded-100"
	);

	// const next =
	// 	colors == <i className="far fa-thumbs-up text-white btn btn-outline-danger rounded-100" /> ? (
	// 		<i className="far fa-thumbs-up text-white btn btn-danger rounded-100" />
	// 	) : (
	// 		<i className="far fa-thumbs-up text-white btn btn-outline-danger rounded-100" />
	// 	);
	const likeClick = () => {
		if (colors === " btn btn-outline-danger rounded-100") {
			setColors("btn btn-danger rounded-100");
		} else {
			setColors(" btn btn-outline-danger rounded-100");
		}
	};

	const corazon = () => {
		if (store.favorites.includes(name)) {
			setColor(<i className="fas fa-heart    text-white    btn btn-danger  rounded-100" />);
		} else {
			setColor(<i className="fas fa-heart text-white btn btn-outline-danger  rounded-100" />);
		}
	};
	useEffect(() => {
		corazon();
	}, []);

	const handleClick = () => {
		//actions.addColor(color);
		// namesArray.push(oneName);
		//console.log(store.favorites, "aaaaaaaaaaaaaaaaa");
		actions.addFavorites(name);
		//console.log(store.favorites);
		corazon();
		// const nextColor = <i className="fas fa-heart text-white btn btn-outline-danger  rounded-100" /> ? (
		// 	<i className="fas fa-heart    text-white    btn btn-danger  rounded-100" />
		// ) : (
		// 	<i className="fas fa-heart text-white btn btn-outline-danger  rounded-100" />
		// );
		//"fas fa-heart  text-white  btn btn-outline-danger  rounded-100"
	};

	useEffect(() => {
		fetch(features)
			.then(response => response.json())

			.then(data => setResult(data.result.properties));
	}, []);

	// useEffect(
	// 	() => {
	// 		alert("Star Wars Web Site");
	// 	},
	// 	[result]
	// );

	return (
		<div>
			<div className="card dark " style={{ width: "21rem" }}>
				<div>
					<img
						src="https://store-images.s-microsoft.com/image/apps.40057.13982743944721264.aba8e5da-4441-4232-a0e1-21747a781f2b.0c0baeb1-555e-4ef5-af93-ca8b1bd633d7"
						className="card-img-top image"
						alt="..."
						width="100%"
						height="199px"
					/>
				</div>
				<div className="card-body text-white ">
					<h5 className="card-title text">{name}</h5>
					<div className="card-text size">
						<div>
							Gender: <strong>{result ? result.gender : " loading..."}</strong>
						</div>
						<div>
							Hair color: <strong>{result ? result.hair_color : " loading..."}</strong>
						</div>
						<div>
							Eye color: <strong>{result ? result.eye_color : " loading..."}</strong>
						</div>
					</div>

					{/* <div className="row justify-content-center marging">
						<p>
							<i className="fas fa-eye ">
								<strong> Views {views}</strong>
							</i>
						</p>
					</div> */}

					<div className="row justify-content-between margingButton">
						<Link to={"/single/" + id}>
							<button type="button" className="btn btn-warning rounded-0">
								<strong>READ MORE</strong>
							</button>
						</Link>
						{/* para las vistas es necesario base de datos */}
						{/* <button
							className="btn btn-outline-danger rounded-0"
							onClick={() => {
								setViews(views + 1);
							}}>
							{" "}
							View
						</button> */}
						<i onClick={handleClick}>{color}</i>

						<strong>
							{" "}
							<i className="far fa-comment text-white btn btn-outline-danger rounded-100" />
						</strong>

						<button onClick={likeClick} className={colors}>
							<i className="far fa-thumbs-up text-white" />
						</button>
					</div>
					<div className="row text-yellow center">
						{" "}
						<Stars />{" "}
					</div>
				</div>
			</div>
		</div>
	);
}
Card.propTypes = {
	name: Proptypes.string,
	features: Proptypes.string,
	id: Proptypes.string
};

export default Card;
