import React, { Fragment, useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import CardStarship from "../store/cardstarships.js";
import "../../styles/cards.scss";

const CardsStarships = () => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.loadSomeData();
	// }, []);

	return (
		<Fragment>
			<div className="row flex-row flex-sm-nowrap pt-3">
				{" "}
				{store.starships.map((elements, index) => (
					<div className="col-sm" key={index}>
						<CardStarship name={elements.name} features={elements.url} />
					</div>
				))}
			</div>
		</Fragment>
	);
};

export default CardsStarships;
