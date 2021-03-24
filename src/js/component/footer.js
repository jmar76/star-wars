import React, { Component } from "react";
import "../../styles/footer.scss";
import facebook from "../store/personajes/facebook.png";
import instagram from "../store/personajes/instagram.png";
import youtube from "../store/personajes/youtube.png";
import twitter from "../store/personajes/twitter.png";
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-left bg ">
		<div className="d">
			<a href="https://es-es.facebook.com/StarWars/" target="example" rel="noopener">
				<img src="facebook.png" className="a" height="50px" width="60px" alt="..." />
			</a>
			<a href="https://www.instagram.com/starwars/" target="example" rel="noopener">
				<img src="instagram.png" className="a" height="50px" width="60px" alt="..." />
			</a>

			<a href="https://www.youtube.com/user" target="example" rel="noopener">
				<img src="youtube.png" className="a" height="50px" width="60px" alt="..." />
			</a>

			<a href="https://twitter.com/starwars" target="example" rel="noopener">
				<img src="twitter.png" className="a" height="50px" width="60px" alt="..." />
			</a>
		</div>
		<p className="padding">
			Made with <i className="fas fa-crown text-danger" /> by <strong>JMAR76</strong>{" "}
		</p>
	</footer>
);
