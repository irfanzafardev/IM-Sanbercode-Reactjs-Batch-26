import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import FormBuah from "../Tugas-9/formBuah";
import DaftarBuah from "../Tugas-10/hargaBuah";
import Timer from "../Tugas-11/waktu&timer";
import CRUDbuah from "../Tugas-12/crud.js";
import NilaiMahasiswa from "../Tugas-13/daftarNilaiMahasiswa.js";
import StudentScores from "../Tugas-14/studentScores";
import SwitchTheme from "../Tugas-15/switchTheme";
import { ThemeProvider } from "../Tugas-15/themeContext";
import StudentScoresList from "../Tugas-15/studentScoresList";
import StudentScoresForm from "../Tugas-15/studentScoresForm";
import ButtonExample from "./buttonExample";

const Section = () => {
	// const Materi13 = () => {
	// 	return (
	// 		<>
	// 			<Link to="materi-13-1">materi-13-1</Link>
	// 			<br />
	// 			<Link to="materi-13-2">materi-13-2</Link>
	// 		</>
	// 	);
	// };
	return (
		<div>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route exact path="/" component={FormBuah}></Route>
				<Route exact path="/tugas10">
					<DaftarBuah />
				</Route>

				<Route exact path="/tugas11">
					<Timer start={5} />
				</Route>
				<Route exact path="/tugas12">
					<CRUDbuah />
				</Route>
				<Route exact path="/tugas13">
					<NilaiMahasiswa />
				</Route>

				{/* <Route exact path="/materi-13-1">
					<HooksExample />
					<br />
					<Link to="materi-13">back to materi 10</Link>
				</Route>
				<Route exact path="/materi-13-2">
					<HooksWithAxios />
					<br />
					<Link to="materi-13">back to materi 10</Link>
				</Route> */}
				<Route exact path="/tugas14">
					<StudentScores />
				</Route>
				<Route exact path="/tugas15">
					<StudentScoresList />
				</Route>
				{/* <Route exact path="/materi-15/peserta/:id">
					<SinglePeserta />
				</Route> */}
				<Route exact path="/tugas16">
					<ButtonExample />
				</Route>
			</Switch>
		</div>
	);
};

export default Section;

// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import FormBuah from "../Tugas-9/formBuah";
// import DaftarBuah from "../Tugas-10/hargaBuah";
// import Timer from "../Tugas-11/waktu&timer";
// import CRUDbuah from "../Tugas-12/crud.js";
// import NilaiMahasiswa from "../Tugas-13/daftarNilaiMahasiswa.js";
// import StudentScores from "../Tugas-14/studentScores";
// import SwitchTheme from "../Tugas-15/switchTheme";
// import { ThemeProvider } from "../Tugas-15/themeContext";
// import StudentScoresList from "../Tugas-15/studentScoresList";
// import StudentScoresForm from "../Tugas-15/studentScoresForm";

// const Section = () => {
// 	const containerStyle = { margin: "0 auto", width: "80%" };

// 	return (
// 		<>
// 			<Router>
// 				<ThemeProvider>
// 					<h1 style={{ textAlign: "center" }}>Tugas 15</h1>
// 					<Switch>
// 						<Route exact path="/">
// 							<FormBuah />
// 						</Route>

// 						<Route exact path="/tugas10">
// 							<DaftarBuah />
// 						</Route>

// 						<Route exact path="/tugas11">
// 							<Timer />
// 						</Route>

// 						<Route exact path="/tugas12">
// 							<CRUDbuah />
// 						</Route>

// 						<Route exact path="/tugas13">
// 							<NilaiMahasiswa />
// 						</Route>

// 						<Route exact path="/tugas14">
// 							<StudentScores />
// 						</Route>

// 						<Route exact path="/tugas15">
// 							<SwitchTheme />
// 							<StudentScoresList containerStyle={containerStyle} />
// 						</Route>

// 						<Route exact path="/tugas15/create">
// 							<StudentScoresForm containerStyle={containerStyle} />
// 						</Route>

// 						<Route exact path="/tugas15/edit/:id">
// 							<StudentScoresForm containerStyle={containerStyle} />
// 						</Route>
// 					</Switch>
// 				</ThemeProvider>
// 			</Router>
// 		</>
// 	);
// };

// export default Section;
