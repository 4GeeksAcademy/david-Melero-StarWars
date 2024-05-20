import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<Link className="navbar-brand text-white" to="/demo">Home</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<Link to="/characters">
							<button className="btn btn-warning">characters</button>
						</Link>
						
						<Link to="/Planets">
							<button className="btn btn-warning ms-2">Planets</button>
						</Link>
						
						<Link to="/Vehicles">
							<button className="btn btn-warning ms-2">Vehicles</button>
						</Link>

					</ul>
				</div>
			</div>
		</nav>
	);
};



<nav className="navbar navbar-light bg-light mb-3">
	<Link to="/">
		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
	</Link>
	<div className="ml-auto">
		<Link to="/characters">
			<button className="btn btn-primary">characters</button>
		</Link>
	</div>
</nav>