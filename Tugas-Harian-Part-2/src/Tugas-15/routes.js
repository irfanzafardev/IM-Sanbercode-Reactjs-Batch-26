import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormBuah from "../Tugas-9/formBuah";
import DaftarBuah from "../Tugas-10/hargaBuah";
import Timer from "../Tugas-11/waktu&timer";
import CRUDbuah from "../Tugas-12/crud.js";
import NilaiMahasiswa from "../Tugas-13/daftarNilaiMahasiswa.js";
import StudentScores from "../Tugas-14/studentScores";
import SwitchTheme from "../Tugas-15/switchTheme";
import { ThemeProvider } from "./themeContext";
import StudentScoresList from "./studentScoresList";
import StudentScoresForm from "./studentScoresForm";
import Nav from "./navbar";

export default function App() {
	const containerStyle = { margin: "0 auto", width: "80%" };

	return (
		<>
			<Router>
				<ThemeProvider>
					<Nav />
					<h1 style={{ textAlign: "center" }}>Tugas 15</h1>
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

						<Route exact path="/tugas15">
							<SwitchTheme />
							<StudentScoresList containerStyle={containerStyle} />
						</Route>

						<Route exact path="/tugas15/create">
							<StudentScoresForm containerStyle={containerStyle} />
						</Route>

						<Route exact path="/tugas15/edit/:id">
							<StudentScoresForm containerStyle={containerStyle} />
						</Route>
					</Switch>
				</ThemeProvider>
			</Router>
		</>
	);
}
