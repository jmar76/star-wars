import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
//import Cards from "../store/cards.js";
import CardsPlanets from "../store/cardsplanets";
import CardsStarships from "../store/cardsstarships";
//import PropTypes from "prop-types";
import Card from "../store/card.js";

export const Home = () => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.loadSomeData();
	// }, []);

	const People = store.people.map((person, index) => (
		<div className="col-sm" key={index}>
			<Card name={person.name} features={person.url} id={person.uid} />
		</div>
	));

	return (
		<div className="App">
			<div className="container-fluid pt-3 ">
				<div className="row">
					<div className="col-md-3">
						<h2 className="color">Characters</h2>
						<p className="text-white">
							This list of characters from the Star Wars franchise contains only those which are
							considered part of the official Star Wars canon, as of the changes made by Lucasfilm in
							April 2014. Following its acquisition by The Walt Disney Company in 2012, Lucasfilm
							rebranded most of the novels, comics, video games and other works produced since the
							originating 1977 film Star Wars as Star Wars Legends and declared them non-canon to the rest
							of the franchise.
						</p>
					</div>
				</div>
				<div className="row flex-row flex-sm-nowrap pt-3">{People}</div>

				<h2 className="color ho">Planets</h2>
				<div className="row">
					<div className="col-md-3">
						<p className="text-white">
							The fictional universe of the Star Wars franchise features multiple planets and moons. While
							only the feature films and selected other works are considered canon to the franchise since
							the 2012 acquisition of Lucasfilm by The Walt Disney Company, some canon planets were first
							named or explored in works from the non-canon Star Wars expanded universe, now rebranded
							Star Wars Legends.
						</p>
					</div>
				</div>

				<CardsPlanets />

				<h2 className="color ho">Starships</h2>
				<div className="row">
					<div className="col-md-3">
						<p className="text-white">
							The following is a list of starships, cruisers, battleships, and other spacecraft in the
							Star Wars films, books, and video games.
						</p>
					</div>
				</div>
				<CardsStarships />
			</div>
		</div>
	);
};
