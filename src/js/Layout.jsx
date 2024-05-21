import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Characters } from "./views/Characters.js"
import { Planets } from "./views/Planets.js"
import { Vehicles } from "./views/Vehicles.js"



import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Contacts } from "./views/Contacts.js";
import { DetailsCharacters } from "./views/DetailsCharacters.js";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column min-vh-100 bg-dark">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Characters" element={<Characters />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="/detail-users/:personajeId" element={<DetailsCharacters/>} />		
						<Route path="/planets" element={<Planets/>} />		
						<Route path="/contacts" element={<Contacts/>} />		
						<Route path="/vehicles" element={<Vehicles/>} />		
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
