import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.scss";
import ImageData from "../store/cards";

import personajes1 from "../store/personajes/personajes1.jpg";
import personajes2 from "../store/personajes/personajes2.jpg";
import personajes3 from "../store/personajes/personajes3.jpg";
import personajes4 from "../store/personajes/personajes4.jpg";
import personajes5 from "../store/personajes/personajes5.jpg";
import personajes6 from "../store/personajes/personajes6.jpg";
import personajes7 from "../store/personajes/personajes7.jpg";
import personajes8 from "../store/personajes/personajes8.jpg";
import personajes9 from "../store/personajes/personajes9.jpg";
import personajes10 from "../store/personajes/personajes10.jpg";

const characters = [
	{
		id: 1,
		image: personajes1,
		description:
			"Lorem ipsum dolor sit amet consectetur adipiscing elit, sociis arcu nisl consequat ad odio ut urna, euismod risus felis porttitor enim phasellus. Porta etiam luctus lectus suscipit senectus accumsan, pharetra mattis vestibulum sollicitudin ut nibh vulputate, nisl sodales pulvinar phasellus maecenas. Porttitor pharetra non feugiat facilisis tellus viverra tempor sed potenti"
	},
	{
		id: 2,
		image: personajes2,
		description:
			" phasellus ornare condimentum turpis aenean nunc mauris eu suscipit mattis, parturient ante sociosqu habitant per ultrices imperdiet mollis."
	},
	{
		id: 3,
		image: personajes3,
		description: "condimentum turpis aenean nunc mauris eu suscipit mattis, parturient ante soc"
	},
	{
		id: 4,
		image: personajes4,
		description:
			"t amet consectetur adipiscing elit, sociis arcu nisl consequat ad odio ut urna, euismod risus felis porttitor enim phasellus. Porta etiam luctus lectus suscipit senectus accumsan, pharetra mattis vestibulum sollicitudin ut nibh vulputate, nisl sodales pulvinar phasellus maecenas. Porttitor pharetra non feugiat facilisis tellus viverra tempor s"
	},
	{
		id: 5,
		image: personajes5,
		description:
			"Pharetra purus morbi ad augue varius tellus mauris, ante duis imperdiet sociis lobortis justo eros laoreet, leo magna mattis venenatis mi lectus. Tristique hendr"
	},
	{
		id: 6,
		image: personajes6,
		description:
			"que aenean placerat velit proin, a neque suspendisse dignissim sed integer aliquet nostra. Taciti diam libero malesuada commodo"
	},
	{
		id: 7,
		image: personajes7,
		description: "n placerat velit proin, a neque suspendisse dignissim sed integer alique"
	},
	{
		id: 8,
		image: personajes8,
		description: "scing elit, sociis arcu nisl consequat ad odio ut urna, eui"
	},
	{
		id: 9,
		image: personajes9,
		description:
			"us accumsan, pharetra mattis vestibulum sollicitudin ut nibh vulputate, nisl sodales pulvinar phasellus maecenas. Porttitor pharetra non feugiat facilisis tellus viverra te"
	},
	{
		id: 10,
		image: personajes10,
		description:
			" smo, cuyas palabras habían sido alteradas, añadidas y eliminadas para convertirlas en un latín sin sentido e impropio. No se sabe exactamente cuándo el texto recibió su forma tradicional actual. Sin embargo, las"
	}
];

export function Single() {
	const { store, actions } = useContext(Context);

	const [result, setResult] = useState({});

	const params = useParams();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.id)
			.then(response => response.json())

			.then(data => setResult(data.result.properties));
	}, []);

	let info = {};
	for (let i = 0; i < characters.length; i++) {
		if (params.id == characters[i].id) {
			info = characters[i];
		}
	}
	//console.log(info);

	return (
		<div>
			<div className="container-fluid padding background">
				<div className="row">
					<div className="col-md-4">
						<div className="color ">
							{/* <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1> */}
							<h2>{result.name}</h2>
							<div>
								height : <strong>{result.height}</strong>
							</div>
							<div>
								mass : <strong>{result.mass}</strong>
							</div>
							<div>
								hair color : <strong>{result.hair_color}</strong>
							</div>
							<div>
								skin color : <strong>{result.skin_color}</strong>
							</div>
							<div>
								eye color : <strong>{result.eye_color}</strong>
							</div>
							<div>
								birth year : <strong> {result.birth_year}</strong>
							</div>
							<div>
								gender : <strong>{result.gender}</strong>
							</div>
							<div>
								created : <strong>{result.created}</strong>
							</div>
							<div>
								edited : <strong>{result.edited}</strong>
							</div>
							<div>
								name : <strong>{result.name}</strong>
							</div>
						</div>
					</div>
					<ImageData image={info.image} description={info.description} />
				</div>

				<Link to="/">
					<span className="btn btn-outline-danger rounded-0" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		</div>
	);
}

Single.propTypes = {
	match: PropTypes.object,
	description: PropTypes.string,
	imageSource: PropTypes.string
};
