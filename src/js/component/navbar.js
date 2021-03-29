import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import emblemas from "../store/personajes/emblemas.jpg";
export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<Fragment>
			<nav className="navbar navbar-expand-lg navbar-light fixed-top fond ">
				<button
					className="navbar-toggler text-danger"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				{/* <div classNameName="collapse navbar-collapse text-danger" id="navbarTogglerDemo01">
				<a classNameName="navbar-brand" href="#">
					Hidden brand
				</a> */}
				<div className="collapse navbar-collapse text-danger" id="navbarTogglerDemo01">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<a className="nav-link text-danger" data-toggle="modal" data-target="#ventana1" href="#">
								<strong>LOG IN </strong> <span className="sr-only">(current)</span>
							</a>
						</li>
						<Link to="/formulario">
							<li className="nav-item">
								<a className="nav-link text-danger" href="#">
									<strong>BUY</strong>
								</a>
							</li>
						</Link>
						<li className="d">
							<a href="https://es-es.facebook.com/StarWars/" target="example" rel="noopener">
								<img src="facebook.png" className="a" height="33px" width="53px" alt="..." />
							</a>
							<a href="https://www.instagram.com/starwars/" target="example" rel="noopener">
								<img src="instagram.png" className="a" height="33px" width="53px" alt="..." />
							</a>

							<a href="https://www.youtube.com/user" target="example" rel="noopener">
								<img src="youtube.png" className="a" height="33px" width="53px" alt="..." />
							</a>

							<a href="https://twitter.com/starwars" target="example" rel="noopener">
								<img src="twitter.png" className="a" height="33px" width="53px" alt="..." />
							</a>
						</li>
					</ul>
				</div>

				<div className="collapse navbar-collapse text-danger" id="navbarTogglerDemo01">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link to="/" className="navbar-brand mb-0 h1">
								<img src="emblemas.jpg" height="90px" width="210px" alt="..." />
							</Link>
						</li>
					</ul>
				</div>

				<div className="btn-group">
					<div className="btn-group dropleft" role="group">
						<button
							type="button"
							className="btn btn-outline-danger rounded-0 dropdown-toggle dropdown-toggle-split"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							{/* <span className="sr-only">Toggle Dropleft</span> */}
						</button>
						<ul className="dropdown-menu">
							{" "}
							{store.favorites.map((favorite, index) => {
								return (
									<li key={index} className="dropdown-item text-danger">
										{favorite}{" "}
										<button className="btn" onClick={() => actions.deleteFavorites(index)}>
											<i className="fas fa-trash-alt text-danger" />
										</button>
									</li>
								);
							})}
						</ul>
					</div>
					<button type="button" className="btn btn-outline-danger rounded-0">
						<strong>Favorites ({store.favorites.length})</strong>
					</button>
				</div>
				{/* <Link to="/demo">
					<button className="btn btn-outline-danger rounded-0">Check the Context in action</button>
				</Link> */}
			</nav>

			<div id="ventana1" className="modal">
				<div className="modal-fade-show" aria-modal="true" style={{ display: "block" }}>
					<div className="modal-dialog modal-login">
						<div className="modal-content">
							<form method="post">
								<div className="modal-header">
									<h4 className="modal-title">LOGIN</h4>
									<button type="button" className="close" data-dismiss="modal" aria-hidden="true">
										x
									</button>
								</div>
								<div className="modal-body">
									<div className="form-group">
										<label>Username or Email address</label>

										<input type="text" className="form-control" required="required" />
									</div>
									<div className="form-group">
										<div className="clearfix">
											<label>Password</label>
											<a herf="#" className="float-right text-muted">
												<small>Forgot?</small>
											</a>
										</div>
										<input type="password" className="form-control" required="required" />
									</div>
								</div>
								<div className="modal-footer justify-content-between">
									<label className="form-check-label">
										<input type="checkbox" />
										Remember me
									</label>

									<input type="submit" className="btn btn-warning" value="login" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
