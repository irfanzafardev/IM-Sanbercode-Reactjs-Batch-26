import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormBuah from "../Tugas-9/formBuah";
import DaftarBuah from "../Tugas-10/hargaBuah";
import Timer from "../Tugas-11/waktu&timer";
import CRUDbuah from "../Tugas-12/crud.js";
import NilaiMahasiswa from "../Tugas-13/daftarNilaiMahasiswa.js";
import StudentScores from "../Tugas-14/studentScores";

const Routes = () => {
	return (
		<Router>
			<div>
				<nav className="navbar">
					<ul>
						<li>
							<Link to="/">Tugas 9</Link>
						</li>
						<li>
							<Link to="/tugas10">Tugas 10</Link>
						</li>
						<li>
							<Link to="/tugas11">Tugas 11</Link>
						</li>
						<li>
							<Link to="/tugas12">Tugas 12</Link>
						</li>
						<li>
							<Link to="/tugas13">Tugas 13</Link>
						</li>
						<li>
							<Link to="/tugas14">Tugas 14</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/">
						<FormBuah />
					</Route>
					<Route exact path="/tugas10">
						<DaftarBuah />
					</Route>
					<Route exact path="/tugas11">
						<Timer />
					</Route>
					<Route exact path="/tugas12">
						<CRUDbuah />
					</Route>
					<Route exact path="/tugas13">
						<NilaiMahasiswa />
					</Route>
					<Route exact path="/tugas14">
						<StudentScores />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default Routes;
