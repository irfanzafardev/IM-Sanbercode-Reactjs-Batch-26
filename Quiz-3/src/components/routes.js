import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./navbarComponents";
import HomeSection from "./sectionComponents";
import About from "./aboutComponent";
import GameListEditor from "./listEditor";

export default function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<HomeSection />
					</Route>

					<Route exact path="/about">
						<About />
					</Route>

					<Route exact path="/editor">
						<GameListEditor />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
