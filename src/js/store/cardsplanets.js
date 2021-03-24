import React, { Fragment, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CardPlanets from "../store/cardplanet.js";
//import "../../styles/cards.scss";

const CardsPlanets = () => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.loadSomeData();
	// }, []);

	return (
		<Fragment>
			<div className="row flex-row flex-sm-nowrap pt-3">
				{" "}
				{store.planets.map((elements, index) => (
					<div className="col-sm" key={index}>
						<CardPlanets name={elements.name} features={elements.url} />
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default CardsPlanets;
