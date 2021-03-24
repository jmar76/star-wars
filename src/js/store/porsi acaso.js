// import React, { useState, useEffect, useContext } from "react";
// import { Context } from "../store/appContext";
// import "../../styles/home.scss";
// import Card from "../store/card.js";

const Cards = () => {
	const { store, actions } = useContext(Context);

	// useEffect(() => {
	// 	actions.loadSomeData();
	// }, []);

	// let allName = [];

	if (store.people !== []) {
		console.log(store.people);
		allName = store.people.map((element, index) => {
			return <p key={index}>{element.name}</p>;
		});
	}
	return (
		<div>
			<div className="container d-flex justify-content-center align-items-center h-100">
				<div className="row">
					<div className="col-md-4">
						<div className="card text center bg-dark">
							<img
								src="https://wipy.tv/wp-content/uploads/2020/02/Luke-Skywalker-se-iba-a-llamar-Luke-Starkiller-2.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body text-light">
								<h5 className="card-title">{allName}</h5>
								<p className="card-text">example.</p>
								<a href="#" className="btn btn-primary">
									Go somewhere
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
//export default Cards;

