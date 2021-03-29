import React, { Component } from "react";
import "../../styles/footer.scss";
import facebook from "../store/personajes/facebook.png";
import instagram from "../store/personajes/instagram.png";
import youtube from "../store/personajes/youtube.png";
import twitter from "../store/personajes/twitter.png";
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-left bg ">
		<p className="padding">
			Made with <i className="fas fa-crown text-danger" /> by <strong>JMAR76</strong>{" "}
		</p>

		<div className="contenido">
			<div className="">
				<h3>
					<i>Imposible nada es. Dificil, muchas cosas son.</i>
				</h3>
			</div>
			<div className="deplazado">
				<h4>-Yoda-</h4>
			</div>
		</div>
	</footer>
);
